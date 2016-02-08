/*
 *
 */
;(function() {
	'use strict';
	angular.module('litewait.ui').controller('SearchCtrl', SearchCtrl);

	SearchCtrl.$inject = ['$scope', '$state'];

	function SearchCtrl($scope, $state) {
		$scope.viewRetailer = viewRetailer;

		function viewRetailer() {
			$state.go('shop.detail.menu');
		}
	}
})();