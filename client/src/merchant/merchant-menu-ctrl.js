/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantMenuCtrl', MerchantMenuCtrl);

	MerchantMenuCtrl.$inject = ['$scope', 'User'];

	function MerchantMenuCtrl($scope, User) {
		var vm = this;
		vm.data = {};
		vm.data['merchant'] = User.data || {};

		// TODO: have to get menu list
	}
})(angular);