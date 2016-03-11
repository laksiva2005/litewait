/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('SearchBoxCtrl', SearchBoxCtrl);

	SearchBoxCtrl.$inject = ['$scope', '$state', '$stateParams', 'PubSub', 'Search', 'Location', 'srch', 'geolocation'];

	function SearchBoxCtrl($scope, $state, $stateParams, PubSub, Search, Location, srch, geolocation) {
		var vm = this;
		vm.searchCriteria = {};
		vm.isLocation = false;
		if ($stateParams.location) {
			vm.searchCriteria.location = $stateParams.location;
		} else if (Location.current.place) {
			vm.searchCriteria.location = Location.current.place;
			vm.isLocation = true;
		} else if (geolocation.status) {
			vm.searchCriteria.location =  geolocation.data;	
			vm.isLocation = true;
		}
		
		vm.searchCriteria.keyword =  '';
		if ($stateParams.keyword) {
			vm.searchCriteria.keyword = $stateParams.keyword;
		} else if (Location.current.keyword) {
			vm.searchCriteria.keyword = Location.keyword;
		}

		vm.search = srch;

		vm.searchFn = searchFn;
		vm.getLocation = getLocation;
		vm.onSelectRegion = onSelectRegion;
		vm.getKeywords = getKeywords;

		function searchFn(event) {
			if (srch == 'home') {
				$state.go('search', {
					location: vm.searchCriteria.location, 
					keyword: vm.searchCriteria.keyword
				});
			} else {
				PubSub.publish('search', vm.searchCriteria);
				//TODO: do the actual search and emit the result
			}
		}

		function getLocation(str) {
			return Search.getRegions(str);
		}

		function getKeywords(str) {
			if (!vm.searchCriteria.location) {
				return [];
			}
			var data = {
				region_id: vm.searchCriteria.location.region_id,
				city_id: vm.searchCriteria.location.city_id,
				search_text: str
			};
			return Search.getKeywords(data);
		}

		function onSelectRegion() {
			Location.current.place = vm.searchCriteria.location;
		}

		function onSelectKeyword() {
			Location.current.keyword = vm.searchCriteria.keyword;
		}

		$scope.$watch(function(scope) {
            // Return the "result" of the watch expression.
            return vm.searchCriteria.location;
        },
        function(newValue, oldValue) {
            if (!vm.searchCriteria.location && Location.data) {
            	vm.searchCriteria.location = Location.data;
            	Location.current.place = vm.searchCriteria.location;
            	vm.isLocation = true;
            }

            if (!vm.searchCriteria.location && !Location.data) {
            	vm.isLocation = false;
            	Location.current.place = null;
            }

            if (vm.searchCriteria.location || Location.data) {
            	vm.isLocation = true;
            }
        });

        $scope.$watch(function(scope) {
            // Return the "result" of the watch expression.
            return vm.searchCriteria.keyword;
        },
        function(newValue, oldValue) {
            if (!vm.searchCriteria.keyword || vm.searchCriteria.keyword === '') {
            	Location.current.keyword = '';
            } else {
	            Location.current.keyword = newValue;
	        }
        });

        if (srch !== 'home') {
        	PubSub.publish('search', vm.searchCriteria);
        }
	}
})();