/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantCreateCtrl', MerchantCreateCtrl);

	angular.$inject = ['$scope', 'merchant'];

	function MerchantCreateCtrl($scope, merchant) {
		var vm = this;
		vm.data = {};
		vm.data.merchant = merchant;
	}
})(angular);