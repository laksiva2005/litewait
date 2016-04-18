/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.ui').controller('ThankyouCtrl', ThankyouCtrl);

	ThankyouCtrl.$inject = ['$scope', '$stateParams', 'session'];

	function ThankyouCtrl($scope, $stateParams, session) {
		var vm = this;

		vm.isThanks = false;

		var time = $stateParams.time;
		vm.data = session.getItem(time);
		if (time && vm.data) {
			vm.isThanks = true;
		}
	}
})();