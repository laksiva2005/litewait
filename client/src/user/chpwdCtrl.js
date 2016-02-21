/*
 *
 */
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('ChpwdCtrl', ChpwdCtrl);

	ChpwdCtrl.$inject = ['$scope', 'AUTH_PROPS', 'authentication'];

	function ChpwdCtrl($scope, AUTH_PROPS, authentication) {
		var vm = this;
		vm.pwd = {
			old_password: '',
			new_password: '',
			confirm_password: '',
			passwordPattern: AUTH_PROPS.PASSWORD_PATTERN
		};

		vm.changePassword = changePassword;
		vm.resetForm = resetForm;

		function changePassword(valid) {
			if (valid) {
				var data = {};
				data.old_password = vm.pwd.old_password;
				data.new_password = vm.pwd.new_password;

				vm.user.changePassword(data).then(function(response) {
					if (!(response.data.error || response.error)) {
						toaster.pop({
                            type: 'success', 
                            title:'Success', 
                            body: AUTH_MSG.chPwdSuccess, 
                            toasterId: 1
                        });
					} else {
						toaster.pop({
                            type: 'error', 
                            title:'Error', 
                            body: AUTH_MSG.chPwdFailed, 
                            toasterId: 1
                        });
					}

					vm.resetForm();
				}, function() {
					vm.resetForm();
				});
			}
		}

		function resetForm() {
			vm.chPwdForm.reset();
			vm.pwd.old_password = '';
			vm.pwd.new_password = '';
			vm.pwd.confirm_password = '';
		}
	}
})(angular);