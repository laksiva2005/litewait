/*
 *
 */
;(function() {
	'use strict';
	angular.module('litewait.ui').controller('SearchCtrl', SearchCtrl);

	SearchCtrl.$inject = ['$scope', '$state'];

	function SearchCtrl($scope, $state) {
		var vm = this;
		vm.viewRetailer = viewRetailer;

		function viewRetailer() {
			$state.go('shop.detail.menu');
		}
	}
})();