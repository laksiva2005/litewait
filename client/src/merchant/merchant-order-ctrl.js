/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantOrderCtrl', MerchantOrderCtrl);

	MerchantOrderCtrl.$inject = ['$scope', 'User', 'OrderService', 'OrderStatus', 'MSG', '$stateParams'];

	function MerchantOrderCtrl($scope, User, OrderService, OrderStatus, MSG, $stateParams) {
		var vm = this;
		vm.data = {};
		vm.orderStatus = OrderStatus;
		vm.data.merchant = User.data || {};
		vm.data.orderParams = {
			busy: false,
			offset: 0,
			limit: 10,
			merchant_id: vm.data.merchant.id,
			status: $stateParams.status
		};
		vm.data.orders = [];
		vm.nextPage = nextPage;
		vm.changeStatus = changeStatus;

		function changeStatus(status, id) {
			var param = {
				status: status,
				order_id: id
			};

			OrderService.changeStatus(param).then(function(response) {
				if (!response.data.error) {
					var index = _.findIndex(vm.data.orders, {order_id: id});
					if (index !== -1) {
						if (status !=4) {
							vm.data.orders[index].order_status = status;
						} else {
							delete vm.data.orders[index];
							vm.data.orderParams.offset--;
						}
					}
				} else {
					toaster.pop({
                        type: 'error', 
                        title:'Error', 
                        body: MSG.statusChangeFailed, 
                        toasterId: 1
                    });
				}
			}, function(error) {
				toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: MSG.statusChangeFailed, 
                    toasterId: 1
                });
			});
		}

		function searchOrder() {
			var param = getOrderParams();
			OrderService.get(param).then(function(res) {
				assignOrders(res);
			});
		}

		function assignOrders(items) {
			for (var i = 0; i < items.length; i++) {
	            var index = _.findIndex(vm.data.orders, {id: items[i].id});
	            if (-1 === index) {
	              vm.data.orders.push(items[i]);
	            }
	        }
	        vm.data.orderParams.offset = vm.data.orders.length;
	        vm.data.orderParams.busy = false;
		}

		function getOrderParams() {
			return {
				offset: vm.data.orderParams.offset,
				limit: vm.data.orderParams.limit,
				status: vm.data.orderParams.status
			};
		}

		function initializeOrderList() {
			vm.data.orderParams.offset = 0;
			vm.data.orderParams.busy = false;
			vm.data.orders.length = 0;
			searchOrder();
		}

		function nextPage() {
			if (!vm.data.orderParams.busy) {
				vm.data.orderParams.busy = true;
				searchOrder();
			}
		}

		initializeOrderList();
	}
})(angular);