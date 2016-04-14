/*
*
*/
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('MerchantCategoryCtrl', MerchantCategoryCtrl);

	MerchantCategoryCtrl.$inject = ['$state', 'MenuService', 'User'];

	function MerchantCategoryCtrl($state, MenuService, User) {
		var vm = this;
		vm.data = {};
		vm.data.merchant = User.data || {};
		vm.data.categoryParams = {
			busy: false,
			offset: 0,
			limit: 10,
			merchant_id: vm.data.merchant.id
		};
		vm.data.category = [];
		vm.nextPage = nextPage;
		vm.deleteCategory = deleteCategory;

		function deleteCategory(id) {
			var params = {
				merchant_id: vm.data.merchant.id,
				category_id: id
			};
			MenuService.deleteCategory(params).then(function(response){
				if (!response.data.error) {
					var index = _.findIndex(vm.data.category, {id: id});
					
					if (index !== -1) {
						delete vm.data.category[index];
						vm.data.categoryParams.offset--;
					}
					toaster.pop({
                        type: 'success', 
                        title:'Success', 
                        body: MSG.deleteCategorySuccess, 
                        toasterId: 1
                    });
				} else {
					toaster.pop({
                        type: 'error', 
                        title:'Error', 
                        body: MSG.deleteCategoryFailed, 
                        toasterId: 1
                    });
				}
			}, function(error) {
				toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: MSG.deleteCategoryFailed, 
                    toasterId: 1
                });
			});
		}

		function searchCategory() {
			var param = getCategoryParams();
			MenuService.getCategoryByMerchantId(param).then(function(res) {
				if (!res.data.error) {
					var a = [];
					for (var i = 0; i < res.data.data.item_categories.length; i++) {
						a.push({
							merchant_id: res.data.data.merchant_id,
							_id: res.data.data.id,
							id: res.data.data.item_categories[i].id,
							is_active: res.data.data.item_categories[i].is_active,
							category_name: res.data.data.item_categories[i].category_name
						});
					}
					assignCategorys(a);
				}
			});
		}

		function assignCategorys(items) {
			for (var i = 0; i < items.length; i++) {
	            var index = _.findIndex(vm.data.category, {id: items[i].id});
	            if (-1 === index) {
	              vm.data.category.push(items[i]);
	            }
	        }
	        vm.data.categoryParams.offset = vm.data.category.length;
	        vm.data.categoryParams.busy = false;
		}

		function getCategoryParams() {
			return {
				offset: vm.data.categoryParams.offset,
				limit: vm.data.categoryParams.limit,
				merchant_id: vm.data.merchant.id
			};
		}

		function initializeCategoryList() {
			vm.data.categoryParams.offset = 0;
			vm.data.categoryParams.busy = false;
			vm.data.category.length = 0;
			seachCategory();
		}

		function nextPage() {
			if (!vm.data.categoryParams.busy) {
				vm.data.categoryParams.busy = true;
				searchCategory();
			}
		}
	}
})();