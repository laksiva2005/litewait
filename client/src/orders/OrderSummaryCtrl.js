/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('OrderSummaryCtrl', OrderSummaryCtrl);

	OrderSummaryCtrl.$inject = ['$scope', 'orderdetails'];

	function OrderSummaryCtrl($scope, orderdetails) {
		var vm = this;
		vm.data = {
			order: orderdetails
		};
	}
})();