/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('SearchBoxCtrl', SearchBoxCtrl);

	SearchBoxCtrl.$inject = ['$scope', '$state', '$stateParams', 'search'];

	function SearchBoxCtrl($scope, $state, $stateParams, search) {
		var vm = this;
		vm.searchCriteria = {};
		vm.searchCriteria.location =  $stateParams.location;
		vm.searchCriteria.keyword =  $stateParams.keyword;
		vm.search = search;

		vm.searchFn = searchFn;

		function searchFn(event) {
			if (search == 'home') {
				$state.go('search.restaurant', {location: vm.searchCriteria.location, keyword: vm.searchCriteria.keyword});
			} else {
				//TODO: do the actual search and emit the result
			}
		}
	}
})();