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
		vm.assignPayment = assignPayment;
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

		function assignPayment(paymentConfig) {
			//var paymentConfig = userPayment.data.paymentConfig;
			vm.payment.card_type = paymentConfig.card_type;
			vm.payment.card_number = paymentConfig.card_number;
			vm.payment.card_name = paymentConfig.card_name;
			vm.payment.card_expiry = new Date(parseInt(paymentConfig.card_expiry));
			vm.payment.cvv = paymentConfig.cvv;
			vm.payment.contact.address_1 = paymentConfig.card_address.address_1;
			vm.payment.contact.city = paymentConfig.card_address.city;
			vm.payment.contact.state = paymentConfig.card_address.state;
			vm.payment.contact.zip_code = paymentConfig.card_address.zip_code;
		}

		function savePayment(valid) {
			if (valid) {
				var data = angular.copy(vm.payment);
				data.card_expiry = formatDate(data.card_expiry);
				vm.user.updatePayment(data).then(function(response) {
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

		function formatDate(dateasms) {
			var date = new Date(dateasms);
			var month = date.getMonth() + 1;
			month = (month < 10) ? "0" + month : month;
			var year = date.getFullYear();
			return month + "/" + year;
		}


		function cancel(event) {
			event.preventDefault();
			$state.go('home');
		}

		vm.assignProfile();

		if (User.data.paymentConfig) {
			vm.assignPayment(User.data.paymentConfig);
		}
	}
})(angular);