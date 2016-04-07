/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.ui').controller('NewMenuCtrl', NewMenuCtrl);

	NewMenuCtrl.$inject = ['$state', 'MenuService', 'User'];

	function NewMenuCtrl($state, MenuService, User) {
		var vm = this;
		vm.data = {};
		vam.data.merchant = User.data;
	}
})();