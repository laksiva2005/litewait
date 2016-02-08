/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('SearchBoxCtrl', SearchBoxCtrl);

	SearchBoxCtrl.$inject = ['$scope', '$state', '$stateParams', 'search'];

	function SearchBoxCtrl($scope, $state, $stateParams, search) {
		$scope.searchCriteria = {};
		$scope.searchCriteria.location =  $stateParams.location;
		$scope.searchCriteria.keyword =  $stateParams.keyword;
		$scope.search = search;

		$scope.searchFn = searchFn;

		function searchFn(event) {
			if (search == 'home') {
				$state.go('search.restaurant', {location: $scope.searchCriteria.location, keyword: $scope.searchCriteria.keyword});
			} else {
				//TODO: do the actual search and emit the result
			}
		}
	}
})();