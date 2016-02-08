/*
 *
 */
;(function(angular) {
	'use strict';

	angular.module('litewait.ui').controller('MyOrderCtrl', MyOrderCtrl);

	MyOrderCtrl.$inject = ['$scope', 'authentication'];

	function MyOrderCtrl($scope, authentication) {
		console.log(authentication);
		// TODO: Need to change things dynamically
	}


})(angular);