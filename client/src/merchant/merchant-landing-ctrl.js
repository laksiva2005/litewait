/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantLandingCtrl', MerchantLandingCtrl);

	MerchantLandingCtrl.$inject = ['$scope', 'User', '$state', 'userrestriction'];

	function MerchantLandingCtrl($scope, User, $state, userrestriction) {
		var vm = this;
		vm.data = {};
		vm.data.active = $state.current.url.replace('/', '');
		vm.data['merchant'] = User.data || {};

		vm.go = go;

		function go(stateName, linkName) {
			vm.data.active = linkName;
			$state.go(stateName);
		}
	}
})(angular);