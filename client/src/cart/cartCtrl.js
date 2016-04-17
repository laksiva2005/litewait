/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('CartCtrl', CartCtrl);

	CartCtrl.$inject = ['$scope', 'CartService', 'User'];

	function CartCtrl($scope, CartService, User) {
		var vm = this;
		vm.cart = CartService;
	}
})();