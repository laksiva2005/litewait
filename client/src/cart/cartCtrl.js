/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('CartCtrl', CartCtrl);

	CartCtrl.$inject = ['$scope', 'CartService', 'User', 'PubSub', 'EVENTS', '$state', 'session'];

	function CartCtrl($scope, CartService, User, PubSub, EVENTS, $state, session) {
		var vm = this;
		vm.cart = CartService;
		vm.user = User;

		PubSub.subscribe(EVENTS.ORDER_PLACED, function(event, obj) {
			var data = obj.args;
			var time = (new Date()).getTime();
			session.setItem(time, data);
			$state.go('orderthankyou', {time: time});
		});
	}
})();