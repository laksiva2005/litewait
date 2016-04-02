/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('ShopDetailMenuCtrl', ShopDetailMenuCtrl);

	ShopDetailMenuCtrl.$inject = ['$scope', '$state', '$stateParams', 'Merchant'];

	function ShopDetailMenuCtrl($scope, $state, $stateParams, Merchant) {
		var vm = this;
		vm.nest = {};
		vm.nest.merchantDetail = {};
		vm.nest.merchantId = $stateParams.id;

		function getMerchant(id) {
			Merchant.get(id).then(function(response) {
				vm.nest.merchantDetail = response.data;
				vm.nest.merchantId = vm.nest.merchantDetail.id;
			}, function(error) {
				vm.nest.merchantDetail = {};
				vm.nest.merchantId = '';
			});
		}

		if (vm.nest.merchantId) {
			getMerchant(vm.nest.merchantId);
		}
	}
})();