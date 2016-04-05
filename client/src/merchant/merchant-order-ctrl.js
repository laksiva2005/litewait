/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantOrderCtrl', MerchantOrderCtrl);

	MerchantOrderCtrl.$inject = ['$scope', 'User'];

	function MerchantOrderCtrl($scope, User) {
		var vm = this;
		vm.data = {};
		vm.data['merchant'] = User.data || {};

		// TODO: have to get order list
	}
})(angular);