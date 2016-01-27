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


                    function login(valid, data) {
                    	AuthService.login(data.username, data.password).then(function(response) {
                            if (!response.data.code) {
                                $scope.modalProps.close();
                            } else {
                                toaster.pop({
                                    type: 'error', 
                                    title:'Error', 
                                    body: AUTH_MSG.loginFailed, 
                                    toasterId: 3
                                });
                            }
                    		
                    	}, function(error) {
                            toaster.pop({
                                type: 'error', 
                                title:'Error', 
                                body: AUTH_MSG.loginFailed, 
                                toasterId: 3
                            });
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
                            if (!response.data.code) {
                                toaster.pop({
                                    type: 'success', 
                                    title: 'Success', 
                                    body: AUTH_MSG.registerSuccess,
                                    toasterId: 1
                                });
                                $scope.modalProps.close();
                            } else {
                                toaster.pop({
                                    type: 'error', 
                                    title: 'Error', 
                                    body: AUTH_MSG.registerFailed, 
                                    toasterId: 2
                                });
                            }
                            
                        }, function (err) {
                            toaster.pop({
                                type: 'error', 
                                title: 'Error', 
                                body: AUTH_MSG.registerFailed, 
                                toasterId: 2
                            });
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