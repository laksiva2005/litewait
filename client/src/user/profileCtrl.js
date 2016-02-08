/*
 *
 */
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['$scope', 'User', '$state', 'toaster', 'AUTH_MSG', 'authentication'];

	function ProfileCtrl($scope, User, $state, toaster, AUTH_MSG, authentication) {
		$scope.user = User;
		$scope.profile = {
			user_name: '',
			contact: {
				address_1: '',
				address_2: '',
				phone: '',
				city: '',
				state: '',
				country: '',
				zip_code: '',
				mail_id: ''
			}
		};

		$scope.updateProfile = updateProfile;
		$scope.assignProfile = assignProfile;
		$scope.cancel = cancel;

		function updateProfile(valid) {
			if (valid) {
				
				$scope.user.updateProfile($scope.profile).then(function(response) {
					if (!response.data.code) {
						toaster.pop({
                            type: 'success', 
                            title:'Success', 
                            body: AUTH_MSG.profileUpdateSuccess, 
                            toasterId: 1
                        });
					} else {
						toaster.pop({
                            type: 'error', 
                            title:'Error', 
                            body: AUTH_MSG.profileUpdateFailed, 
                            toasterId: 1
                        });
					}
				});
			}
		}

		function assignProfile() {
			$scope.profile.user_name = $scope.user.data.user_name;
			$scope.profile.contact.address_1 = $scope.user.data.contact.address_1;
			$scope.profile.contact.address_2 = $scope.user.data.contact.address_2;
			$scope.profile.contact.phone = $scope.user.data.contact.phone;
			$scope.profile.contact.city = $scope.user.data.contact.city;
			$scope.profile.contact.state = $scope.user.data.contact.state;
			$scope.profile.contact.country = $scope.user.data.contact.country;
			$scope.profile.contact.zip_code = $scope.user.data.contact.zip_code;
			$scope.profile.contact.mail_id = $scope.user.data.contact.mail_id;
		}

		function cancel(event) {
			event.preventDefault();
			$state.go('home');
		}

		$scope.assignProfile();
	}
})(angular);