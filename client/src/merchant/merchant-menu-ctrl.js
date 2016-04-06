/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantMenuCtrl', MerchantMenuCtrl);

	MerchantMenuCtrl.$inject = ['$scope', 'User', 'MenuService'];

	function MerchantMenuCtrl($scope, User, MenuService) {
		var vm = this;
		vm.data = {};
		vm.data.merchant = User.data || {};
		vm.data.menuParams = {
			busy: false,
			offset: 0,
			limit: 10,
			merchant_id: vm.data.merchant.id
		};
		vm.data.menu = [];
		vm.nextPage = nextPage;

		function searchMenu() {
			var param = getMenuParams();
			menuService.getByMerchantId(param).then(function(res) {
				assignMenus(res.data);
			});
		}

		function assignMenus(items) {
			for (var i = 0; i < items.length; i++) {
	            var index = _.findIndex(vm.data.menu, {item_id: items[i].item_id});
	            if (-1 === index) {
	              vm.data.menu.push(items[i]);
	            }
	        }
	        vm.data.menuParams.offset = vm.data.menu.length;
		}

		function getMenuParams() {
			return {
				offset: vm.data.menuParams.offset,
				limit: vm.data.menuParams.limit,
				merchant_id: vm.data.merchant.id
			};
		}

		function initializeMenuList() {
			vm.data.menuParams.offset = 0;
			vm.data.menuParams.busy = false;
			seachMenu();
		}

		function nextPage() {
			if (!vm.data.menuParams.busy) {
				vm.menuParams.busy = true;
				searchMenu();
			}
		}
	}
})(angular);