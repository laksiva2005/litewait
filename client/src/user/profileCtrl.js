/*
 *
 */
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['$scope', 'User', '$state', 'toaster', 'AUTH_MSG', 'AUTH_PROPS', 'authentication'];

	function ProfileCtrl($scope, User, $state, toaster, AUTH_MSG, AUTH_PROPS, authentication) {
		var vm = this;
		vm.AUTH_PROPS = AUTH_PROPS;
		vm.user = User;
		vm.profile = {
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

		vm.payment = {
			card_type: '',
			card_number: '',
			card_name: '',
			card_expiry: '',
			cvv: '',
			contact: {
				address_1: '',
				address_2: '',
				city: '',
				state: '',
				zip_code: ''
			}
		};

		vm.pay = {
			opened: false,
			onOpenFocus: true
		};

		vm.updateProfile = updateProfile;
		vm.assignProfile = assignProfile;
		vm.cancel = cancel;
		vm.savePayment = savePayment;
		vm.open1 = open1;

		function open1() {
			vm.pay.opened = true;
		}

		function updateProfile(valid) {
			if (valid) {
				
				vm.user.updateProfile(vm.profile).then(function(response) {
					if (!(response.data.error || response.error)) {
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
			vm.profile.user_name = vm.user.data.user_name;
			vm.profile.contact.address_1 = vm.user.data.contact.address_1;
			vm.profile.contact.address_2 = vm.user.data.contact.address_2;
			vm.profile.contact.phone = vm.user.data.contact.phone;
			vm.profile.contact.city = vm.user.data.contact.city;
			vm.profile.contact.state = vm.user.data.contact.state;
			vm.profile.contact.country = vm.user.data.contact.country;
			vm.profile.contact.zip_code = vm.user.data.contact.zip_code;
			vm.profile.contact.mail_id = vm.user.data.contact.mail_id;
		}

		function savePayment(valid) {
			if (valid) {
				
				vm.user.updatePayment(vm.payment).then(function(response) {
					if (!(response.data.error || response.error)) {
						toaster.pop({
                            type: 'success', 
                            title:'Success', 
                            body: AUTH_MSG.paymentUpdateSuccess, 
                            toasterId: 1
                        });
					} else {
						toaster.pop({
                            type: 'error', 
                            title:'Error', 
                            body: AUTH_MSG.paymentUpdateFailed, 
                            toasterId: 1
                        });
					}
				});
			}
		}


		function cancel(event) {
			event.preventDefault();
			$state.go('home');
		}

		vm.assignProfile();
	}
})(angular);