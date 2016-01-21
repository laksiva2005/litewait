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
                controller: function($scope, $uibModalInstance, PubSub, AuthService) {
                    $scope.modalProps = {};
                    $scope.modalProps.signin = $scope.$parent.signin;
                    $scope.modalProps.signup = $scope.$parent.signup;
                    $scope.modalProps.username = '';
                    $scope.modalProps.password = '';

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
                    	AuthService.login($scope.modalProps.username, $scope.modalProps.password).then(function(data) {
                    		console.log(data);
                    		$scope.modalProps.close();
                    	}, function(error) {

                    	});
                    }

                    function register() {

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