/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('CartService', CartService);

	CartService.$inject = ['$q', 'session', 'User', 'PubSub', 'OrderService', 'EVENTS', 'MSG', 'toaster'];

	function CartService($q, session, User, PubSub, OrderService, EVENTS, MSG, toaster) {
		var storeKey = 'cart:data';
		var service = {
			init: init,
			remove: remove,
			add: add,
			get: get,
			process: process,
			addQty: addQty,
			removeQty: removeQty,
			placeOrder: placeOrder,
			user: User.username,
			total_price: 0,
			total_quantity: 0,
			merchantId: '',
			merchantDetails: {},
			order_details: []
		};

		function placeOrder() {
			var cart = {
				user: User.username,
				merchant_id: service.merchantId,
				total_quantity: service.total_quantity,
				order_details: []
			};

			for(var i = 0;i < service.order_details.length;i++) {
				var order_details = {
					category_id: service.order_details[i].category_id,
					item_id: service.order_details[i].item_id,
					item_name: service.order_details[i].item_name,
					description: service.order_details[i].description,
					qty: service.order_details[i].qty,
					price: service.order_details[i].price,
					picture: service.order_details[i].picture,
					addons: service.order_details[i].addons
				};
				cart.order_details.push(order_details);
			}

			if (!cart.order_details.length) {
				return;
			}

			OrderService.placeOrder(cart).then(function(response) {
				if (!response.data.error) {
					service.clear();
					toaster.pop({
                        type: 'success', 
                        title:'Success', 
                        body: MSG.orderSuccess, 
                        toasterId: 1
                    });
					PubSub.publish(EVENTS.ORDER_PLACED, {order_id: response.data.data.order_id, merchant: service.merchantDetails});
				} else {
					toaster.pop({
                        type: 'error', 
                        title:'Error', 
                        body: MSG.orderFailed, 
                        toasterId: 1
                    });
				}
			}, function (err) {
				toaster.pop({
	                type: 'error', 
	                title:'Error', 
	                body: MSG.orderFailed, 
	                toasterId: 1
	            });
			});
		}

		function addQty(item_id) {
			var index = _.findIndex(service.order_details, {item_id: obj.item_id});
			if (index !== -1) {
				service.order_details[index].qty += 1;
				service.total_price += (1 * service.order_details[index].price);
			}			
		}

		function removeQty(item_id) {
			var index = _.findIndex(service.order_details, {item_id: obj.item_id});
			if (index !== -1) {
				if (service.order_details[index].qty > 1) {
					service.order_details[index].qty -= 1;
					service.total_price -= (1 * service.order_details[index].price);
				}
			}	
		}

		function add(obj, merchant) {
			if (merchant && merchant.id != service.merchantId) {
				service.order_details.length = 0;
				service.total_quantity = 0;
				service.total_price = 0;
				service.merchantId = merchant.id;
				service.merchantDetails = merchant;
			}

			var index = _.findIndex(service.order_details, {item_id: obj.item_id});
			var cartObject;
			if (index !== -1) {
				service.total_price -= (service.order_details[index].qty * service.order_details[index].price);
				if (service.total_price < 0) {
					service.total_price = 0;
				}
				service.order_details[index].qty = parseInt(obj.qty);
				service.total_price += (service.order_details[index].qty * service.order_details[index].price);
				cartObject = service.order_details[index];
			} else {
				cartObject = {
					category_id: obj.category_id,
					item_id: obj.item_id,
					item_name: obj.item_name,
					description: obj.description,
					qty: parseInt(obj.qty),
					price: obj.price,
					picture: obj.picture,
					addons: obj.addons,
					original: obj
				};
				service.total_price += cartObject.qty * cartObject.price;
				service.order_details.push(cartObject);
				service.total_quantity += 1;
			}

			PubSub.publish('cart:added', cartObject);

			storeCartToSession();
		}

		function storeCartToSession() {
			session.setItem(storeKey, {
				order_details: service.order_details,
				merchantId: service.merchantId,
				merchantDetails: service.merchantDetails,
				total_price: service.total_price,
				total_quantity: service.total_quantity
			});
		}

		function getCartFromSession() {
			var data = {
				order_details: [],
				merchantId: '',
				merchantDetails: {},
				total_price: 0,
				total_quantity: 0
			};
			return session.getItem(storeKey) || data;
		}

		function remove(item_id) {
			var index = _.findIndex(service.order_details, {item_id: item_id});

			if (index !== -1) {
				var save = service.order_details[index];
				service.total_price -= save.qty * save.price;
				delete service.order_details[index];
				service.total_quantity -= 1;
				PubSub.publish('cart:removed', save);

				storeCartToSession();
			}
		}

		function get(item_id) {
			var index = _.findIndex(service.order_details, {item_id: item_id});

			if (index != -1) {
				return service.order_details[index];
			}
			return false;
		}

		function init() {
			var data = getCartFromSession();
			service.total_price = data.total_price || 0;
			service.total_quantity = data.total_quantity || 0;
			service.order_details = data.order_details || [];
			service.merchantId = data.merchantId || '';
			service.merchantDetails = data.merchantDetails || {};
		}

		function clear() {
			service.total_price = 0;
			service.total_quantity = 0;
			service.order_details.length = 0;
			service.merchantId = '';
			service.merchantDetails = {};
			storeCartToSession();	
		}

		function process() {
			var data = getCartFromSession();
			for(var i=0;i<data.order_details.length;i++) {
				PubSub.publish('cart:added', data.order_details[i]);				
			}
		}

		init();

		return service;

	}
})();