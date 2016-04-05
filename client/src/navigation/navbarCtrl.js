/*
 *
 */
;(function(angular) {
	'use strict';

	angular.module('litewait.ui').controller('navbarCtrl', navbarCtrl);

	navbarCtrl.$inject = ['$scope', '$q', '$state', '$uibModal', 'User', 'AuthService', 'PubSub', 'Spinner', 'SPINING_EVENTS', 'HTTPEvent'];

	function navbarCtrl($scope, $q, $state, $uibModal, User, AuthService, PubSub, Spinner, SPINING_EVENTS, HTTPEvent) {
        var vm = this;
        vm.form = {};
		vm.user = User;
		vm.auth = AuthService;
		vm.notifyToggle = false;
		$scope.signin = vm.signin = 1;
        $scope.signup = vm.signup = 2;
        $scope.activeTab = vm.activeTab = 1;
        vm.spinner = Spinner;

		vm.openUserModal = openUserModal;
		vm.openSignUpModal = openSignUpModal;
		vm.logout = logout;
		vm.go = go;

		function openUserModal() {
			$scope.activeTab = 1;
			userModal();
		}

		function openSignUpModal(event) {
            if (event) {
                event.preventDefault();
            }
			$scope.activeTab = 2;
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
                bindToController: true,
                controllerAs: 'loginModal',
                controller: function($scope, $uibModalInstance, PubSub, AuthService, toaster, AUTH_MSG, AUTH_PROPS, User, $state) {
                    var vm = this;
                    vm.modalProps = {};
                    vm.modalProps.signin = $scope.$parent.signin;
                    vm.modalProps.signup = $scope.$parent.signup;
                    vm.modalProps.active = $scope.$parent.activeTab;
                    vm.modalProps.username = '';
                    vm.modalProps.password = '';
                    vm.modalProps.user_type = 'c';
                    vm.modalProps.isForgotPassword = false;
                    vm.modalProps.passwordPattern = AUTH_PROPS.PASSWORD_PATTERN;

                    vm.resetProps = {
                        user: '',
                        user_type: 'c',
                    };

                    vm.registerProps = {
                        user: '',
                        user_mail: '',
                        user_password: '',
                        user_confirm_password: '',
                        user_type: 'c'
                    };

                    vm.modalProps.login = login;
                    vm.modalProps.register = register;
                    vm.modalProps.resetPwd = resetPwd;
                    vm.modalProps.joinUs = joinUs;

                    function joinUs() {
                        vm.modalProps.isForgotPassword = false;
                        vm.modalProps.active = 2;
                    }

                    function resetPwd(valid, data) {
                        data = data || {};
                        User.resetPassword(data).then(function(response) {
                            if (!(response.data.error || response.error)) {
                                vm.modalProps.close();
                                toaster.pop({
                                    type: 'success', 
                                    title:'Success', 
                                    body: AUTH_MSG.resetSuccess, 
                                    toasterId: 1
                                });
                            } else {
                                toaster.pop({
                                    type: 'error', 
                                    title:'Error', 
                                    body: AUTH_MSG.resetFailed, 
                                    toasterId: 4
                                });
                            }
                            
                        }, function(error) {
                            toaster.pop({
                                type: 'error', 
                                title:'Error', 
                                body: AUTH_MSG.resetFailed, 
                                toasterId: 4
                            });
                        });
                    } 

                    function login(valid, provider, data) {
                        data = data || {};
                        AuthService.authenticate(provider, data).then(function(response) {
                            if (!(response.data.error || response.error)) {
                                vm.modalProps.close();
                                if (User.role == 'm') {
                                    $state.go('merchant.order');
                                }
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
                            if (!(response.data.error || response.error)) {
                                toaster.pop({
                                    type: 'success', 
                                    title: 'Success', 
                                    body: AUTH_MSG.registerSuccess,
                                    toasterId: 1
                                });
                                vm.modalProps.close();
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

                    vm.modalProps.close = function() {
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