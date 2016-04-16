/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('CartService', CartService);

	CartService.$inject = ['$q', 'session', 'User', 'PubSub'];

	function CartService($q, session, User, PubSub) {
		var storeKey = 'cart:data';
		var service = {
			init: init,
			remove: remove,
			add: add,
			get: get,
			process: process,
			user: User.username,
			total_quantity: 0,
			merchantId: '',
			order_details: []
		};

		function add(obj, merchantId) {
			if (merchantId && merchantId != service.merchantId) {
				service.order_details.length = 0;
				service.merchantId = merchantId;
			}

			var index = _.findIndex(service.order_details, {item_id: obj.item_id});
			var cartObject;
			if (index !== -1) {
				service.order_details[index].qty = parseInt(obj.qty);
				cartObject = service.order_details[index];
			} else {
				cartObject = {
					category_id: obj.category_id,
					item_id: obj.item_id,
					item_name: obj.item_name,
					qty: parseInt(obj.qty),
					price: obj.price,
					addons: obj.addons,
					original: obj
				};
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
				total_quantity: service.total_quantity
			});
		}

		function getCartFromSession() {
			var data = {
				order_details: [],
				merchantId: '',
				total_quantity: 0
			};
			return session.getItem(storeKey) || data;
		}

		function remove(item_id) {
			var index = _.findIndex(service.order_details, {item_id: item_id});

			if (index !== -1) {
				var save = service.order_details[index];
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
			service.total_quantity = data.total_quantity || 0;
			service.order_details = data.order_details || [];
			service.merchantId = data.merchantId || '';
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