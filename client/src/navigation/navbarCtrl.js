/*
 *
 */
;(function(angular) {
	'use strict';

	angular.module('litewait.ui').controller('navbarCtrl', navbarCtrl);

	navbarCtrl.$inject = ['$scope', '$q', '$state', '$uibModal', 'User', 'AuthService', 'PubSub', 'Spinner', 'SPINING_EVENTS', 'HTTPEvent'];

	function navbarCtrl($scope, $q, $state, $uibModal, User, AuthService, PubSub, Spinner, SPINING_EVENTS, HTTPEvent) {
		$scope.user = User;
		$scope.auth = AuthService;
		$scope.notifyToggle = false;
		$scope.signin = true;
        $scope.signup = false;
        $scope.spinner = Spinner;

		$scope.openUserModal = openUserModal;
		$scope.openSignUpModal = openSignUpModal;
		$scope.logout = logout;
		$scope.go = go;

		function openUserModal() {
			$scope.signin = true;
            $scope.signup = false;
			userModal();
		}

		function openSignUpModal() {
			$scope.signin = false;
            $scope.signup = true;
			userModal();
		}

		function logout() {
        	AuthService.logout().then(function() {
        		$state.go('home');
        	}, function() {

        	});
        }

        function go(state) {
        	$state.go(state);
        }

		function userModal() {
            var modalInstance = $uibModal.open({
                templateUrl: 'userModal.html',
                backdrop: 'static',
                size: 'lg',
                windowClass: 'signin-modal',
                keyboard: false,
                scope: $scope,
                controller: function($scope, $uibModalInstance, PubSub, AuthService, toaster, AUTH_MSG, AUTH_PROPS) {
                    $scope.modalProps = {};
                    $scope.modalProps.signin = $scope.$parent.signin;
                    $scope.modalProps.signup = $scope.$parent.signup;
                    $scope.modalProps.username = '';
                    $scope.modalProps.password = '';
                    $scope.modalProps.passwordPattern = AUTH_PROPS.PASSWORD_PATTERN;

                    $scope.registerProps = {
                        user: '',
                        user_mail: '',
                        user_password: '',
                        user_confirm_password: '',
                        user_type: ''
                    };

                    $scope.modalProps.login = login;
                    $scope.modalProps.register = register;


                    function login() {
                    	AuthService.login($scope.modalProps.username, $scope.modalProps.password).then(function(response) {
                    		$scope.modalProps.close();
                    	}, function(error) {

                    	});
                    }

                    function register(valid, data) {
                        if (!valid) return;
                        var udata = {};
                        udata.user = data.user;
                        udata.user_mail = data.user_mail;
                        udata.user_password = data.user_password;
                        udata.user_type = data.user_type;

                        AuthService.register(udata).then(function(response) {
                            if (!response.code) {
                                toaster.pop('success', 'Success', AUTH_MSG.registerSuccess);
                            } else {
                                toaster.pop('error', 'Error', AUTH_MSG.registerSuccess);
                            }
                            $scope.modalProps.close();
                        }, function (err) {

                        });
                    }

                    $scope.modalProps.close = function() {
                        $uibModalInstance.close();
                    };
                }
            });
        }

        HTTPEvent.on(SPINING_EVENTS.SPINING, function (data) {
            Spinner.spining(data);
        });
	}
})(angular);