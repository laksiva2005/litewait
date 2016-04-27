/*
*
*/
;(function(){
	'use strict';
	angular.module('litewait.ui').controller('NewMenuCtrl', NewMenuCtrl);

	NewMenuCtrl.$inject = ['$scope', 'User', 'MenuService', '$stateParams', '$state', 'MSG', 'toaster', '$filter', 'AddonService', 'userrestriction', 'menu'];

	function NewMenuCtrl($scope, User, MenuService, $stateParams, $state, MSG, toaster, $filter, AddonService, userrestriction, menu) {
		var vm = this;
		vm.data = {};
		vm.data.merchant = User.data;
		vm.data.action = ($stateParams.id === '') ? 'Update' : 'Add';

		vm.menu = {
			item_id: '',
			category_id: '',
			category: '',
			item_name: '',
			description: '',
			price: '',
			picture: '',
			featured: false,
			addons: [],
			merchant_id: User.data.id
		};
		vm.addMenu = addMenu;
		vm.cancel = cancel;
		vm.getCategory = getCategory;
		vm.onSelectCategory = onSelectCategory;
		vm.searchAddons = searchAddons;
		assignMenu();

		function searchAddons(query) {
			var data = {
				page_no: 1,
				page_size: 20,
				search: query
			};

			return AddonService.get(data).then(function(response) {
				if (!response.data.error && response.data.data !== null) {
					var res = response.data.data;
					var a = [];
					for(var i=0;i<res.length;i++) {
						a.push({
							name: res[i].name,
							price: res[i].price,
							picture: res[i].picture
						});
					}
					return a;
				}
				return [];
			});
		}

		function onSelectCategory() {
			vm.menu.category_id = vm.menu.category.category_id;
		}

		function getCategory(str) {
			var param = {
				merchant_id: vm.menu.merchant_id,
				offset: 0,
				limit: 20,
				search: str
			};
			return MenuService.getCategoryByMerchantId(param).then(function(res) {
				if (!res.data.error) {
					var a = [];
					for (var i = 0; i < res.data.data.item_categories.length; i++) {
						a.push({
							category_id: res.data.data.item_categories[i].id,
							category_name: res.data.data.item_categories[i].category_name
						});
					}
					return a;
				}
				return [];
			});
		}
			
		function assignMenu() {
			if (menu) {
				vm.menu.item_id = menu.item_id;
				vm.menu.category_id = menu.category_id;
				vm.menu.category = {
					category_id: menu.category_id,
					category_name: menu.category_name || ''
				};
				vm.menu.item_name = menu.item_name;
				vm.menu.description = menu.description;
				vm.menu.price = menu.price;
				vm.menu.picture = menu.picture;
				vm.menu.featured = menu.featured;
				vm.menu.addons = menu.addons || [];
			}
		}

		function cancel(event) {
			event.preventDefault();
			$state.go('merchant.menu');
		}

		function addMenu(valid, data) {
			if (valid) {
				var action = (data.id > 0) ? MenuService.update : MenuService.add;
				var smsg = vm.data.action == 'Add' ? MSG.addMenuSuccess : MSG.updateMenuSuccess;
				var fmsg = vm.data.action == 'Add' ? MSG.addMenuFailed : MSG.updateMenuFailed;
				var params = angular.copy(data);
				delete params.category;
				if (!(vm.data.action === 'Update' && data.item_id !== '')) {
					delete params.item_id;
				}

				action(params).then(function(response) {
					if ( ! response.data.error) {
						toaster.pop({
	                        type: 'success', 
	                        title:'Success', 
	                        body: smsg, 
	                        toasterId: 1
	                    });
	                    $state.go('merchant.menu');
					} else {
						toaster.pop({
	                        type: 'error', 
	                        title:'Error', 
	                        body: fmsg, 
	                        toasterId: 1
	                    });
					}
				}, function(err) {
						toaster.pop({
	                        type: 'error', 
	                        title:'Error', 
	                        body: fmsg, 
	                        toasterId: 1
	                    });
				});
			}
		}
	}
})();