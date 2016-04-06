/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('ShopDetailMenuCtrl', ShopDetailMenuCtrl);

	ShopDetailMenuCtrl.$inject = ['$scope', '$state', '$stateParams', 'PubSub', 'Merchant', 'MenuService'];

	function ShopDetailMenuCtrl($scope, $state, $stateParams, PubSub, Merchant, MenuService) {
		var vm = this;
		vm.nest = {};
		vm.nest.merchantDetail = {};
		vm.nest.merchantId = $stateParams.id;
		vm.getMenuByMandC = getMenuByMandC;

		function getMerchant(id) {
			Merchant.get(id).then(function(response) {
				vm.nest.merchantDetail = response.data.data;
				vm.nest.merchantDetail.categories = [];
				vm.nest.merchantId = vm.nest.merchantDetail.id;
				return MenuService.getCategoryByMerchantId(vm.nest.merchantId);
			}).then(function(response) {
				if (!response.data.error) {
					vm.nest.merchantDetail.categories = response.data.data.item_categories || [];
					if (vm.nest.merchantDetail.categories.length) {
						for(var i=0;i<vm.nest.merchantDetail.categories.length; i++) {
							vm.nest.merchantDetail.categories[i].menu_items = [];
						}
						PubSub.publish('getfirstmenu', vm.nest.merchantDetail.categories[0]);
					}
				}
			});
		}

		function getMenuByMandC(category_id) {
			var data = {
				category_id: category_id,
				merchant_id: vm.nest.merchantId
			};

			var index = _.findIndex(vm.nest.merchantDetail.categories, {id: category_id});
			if (index !== -1 && vm.nest.merchantDetail.categories[index].menu_items.length == 0) {
				MenuService.getByMandC(data).then(function(res) {
					
					vm.nest.merchantDetail.categories[index].menu_items = res.data.data.menu_items || [];
				});
			}
		}

		if (vm.nest.merchantId) {
			getMerchant(vm.nest.merchantId);
		}

		PubSub.subscribe('getfirstmenu', function(event, obj) {
			var category_id = obj.args.id;
			getMenuByMandC(category_id);
		});
	}
})();