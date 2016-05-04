/*
*
*/
;(function(angular) {
	'use strict';

	angular.module('litewait.ui').controller('VerifyUserCtrl', VerifyUserCtrl);

	VerifyUserCtrl.$inject = ['$scope', 'verify'];

	function VerifyUserCtrl($scope, verify) {
		var vm = this;

		vm.data = verify;
	}
})(angular);
