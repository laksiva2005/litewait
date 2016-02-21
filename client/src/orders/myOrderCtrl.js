/*
 *
 */
;(function(angular) {
	'use strict';

	angular.module('litewait.ui').controller('MyOrderCtrl', MyOrderCtrl);

	MyOrderCtrl.$inject = ['$scope', 'authentication'];

	function MyOrderCtrl($scope, authentication) {
		var vm = this;
		console.log(authentication);
		// TODO: Need to change things dynamically
	}


})(angular);