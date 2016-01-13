/*
 *
 */
;(function(angular) {
	'use strict';

	angular.module('litewait.ui').controller('navbarCtrl', navbarCtrl);

	navbarCtrl.$inject = ['$scope', '$q', '$state', '$uibModal', 'User', 'AuthService', 'PubSub'];

	function navbarCtrl($scope, $q, $state, $uibModal, User, AuthService, PubSub) {
		$scope.user = User;
		$scope.auth = AuthService;
		$scope.notifyToggle = false;
		$scope.signin = true;

		$scope.openUserModal = openUserModal;
		$scope.openSignUpModal = openSignUpModal;
		$scope.logout = logout;
		$scope.go = go;

		function openUserModal() {
			$scope.signin = true;
			userModal();
		}

		function openSignUpModal() {
			$scope.signin = false;
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
                    $scope.modalProps.username = '';
                    $scope.modalProps.password = '';
                    $scope.modalProps.login = login;
                    $scope.modalProps.logout = logout;

                    function login() {
                    	AuthService.login($scope.modalProps.username, $scope.modalProps.password).then(function(data) {
                    		console.log(data);
                    		$scope.modalProps.close();
                    	}, function(error) {

                    	});
                    }

                    $scope.modalProps.close = function() {
                        $uibModalInstance.close();
                    };
                }
            });
        }
	}
})(angular);