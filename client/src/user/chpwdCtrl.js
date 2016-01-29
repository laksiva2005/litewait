/*
 *
 */
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('chpwdCtrl', chpwdCtrl);

	chpwdCtrl.$inject = ['$scope', 'AUTH_PROPS', 'authentication'];

	function chpwdCtrl($scope, AUTH_PROPS, authentication) {
		$scope.pwd = {
			old_password: '',
			new_password: '',
			confirm_password: '',
			passwordPattern: AUTH_PROPS.PASSWORD_PATTERN
		};

		$scope.changePassword = changePassword;
		$scope.resetForm = resetForm;

		function changePassword(valid) {
			if (valid) {
				var data = {};
				data.old_password = $scope.pwd.old_password;
				data.new_password = $scope.pwd.new_password;

				$scope.user.changePassword($scope.profile).then(function(response) {
					if (!response.data.code) {
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

					$scope.resetForm();
				}, function() {
					$scope.resetForm();
				});
			}
		}

		function resetForm() {
			$scope.pwd.old_password = '';
			$scope.pwd.new_password = '';
			$scope.pwd.confirm_password = '';
		}
	}
})(angular);