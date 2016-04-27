/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantMenuCtrl', MerchantMenuCtrl);

	MerchantMenuCtrl.$inject = ['$scope', 'User', 'MenuService', 'userrestriction'];

	function MerchantMenuCtrl($scope, User, MenuService, userrestriction) {
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
		vm.deleteMenu = deleteMenu;

		function searchMenu() {
			var param = getMenuParams();
			MenuService.getByMerchantId(param).then(function(res) {
				assignMenus(res);
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
	        vm.data.menuParams.busy = false;
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
			vm.data.menu.length = 0;
			searchMenu();
		}

		function nextPage() {
			if (!vm.data.menuParams.busy) {
				vm.data.menuParams.busy = true;
				searchMenu();
			}
		}

		function deleteMenu(id) {
			var params = {
				merchant_id: vm.data.merchant.id,
				item_id: id
			};
			MenuService.deleteMenu(params).then(function(response){
				if (!response.data.error) {
					var index = _.findIndex(vm.data.menu, {item_id: id});
					
					if (index !== -1) {
						delete vm.data.menu[index];
						vm.data.menuParams.offset--;
					}

					toaster.pop({
                        type: 'success', 
                        title:'Success', 
                        body: MSG.deleteMenuSuccess, 
                        toasterId: 1
                    });
				} else {
					toaster.pop({
                        type: 'error', 
                        title:'Error', 
                        body: MSG.deleteMenuFailed, 
                        toasterId: 1
                    });
				}
			}, function(error) {
				toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: MSG.deleteMenuFailed, 
                    toasterId: 1
                });
			});
		}

		initializeMenuList();
	}
})(angular);