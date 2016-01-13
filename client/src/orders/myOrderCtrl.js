/*
 *
 */
;(function(angular) {
	'use strict';

	angular.module('litewait.ui').controller('myOrderCtrl', myOrderCtrl);

	myOrderCtrl.$inject = ['$scope', 'authentication'];

	function myOrderCtrl($scope, authentication) {
		console.log(authentication);
		// TODO: Need to change things dynamically
	}


})(angular);