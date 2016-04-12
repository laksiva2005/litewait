/*
 *
 */
;(function(angular) {
	'use strict';

	angular.module('litewait.ui').controller('MyOrderCtrl', MyOrderCtrl);

	MyOrderCtrl.$inject = ['$scope', 'User', 'OrderService', 'OrderStatus', 'MSG', '$stateParams', '$filter', 'authentication'];

	function MyOrderCtrl($scope, User, OrderService, OrderStatus, MSG, $stateParams, $filter, authentication) {
		var vm = this;
		vm.data = {};
		vm.orderStatus = orderStatus;
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
	            	var date = items[i].order_date;
	            	var dateString = $filter('date')(date, 'dd/MM/yyyy hh:mm a');
	            	items[i].order_date_string = dateString;
	            	vm.data.orders.push(items[i]);
	            }
	        }
	        vm.data.orderParams.offset = vm.data.orders.length;
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
			seachOrder();
		}

		function nextPage() {
			if (!vm.data.orderParams.busy) {
				vm.data.orderParams.busy = true;
				searchOrder();
			}
		}

		searchOrder();
	}


})(angular);