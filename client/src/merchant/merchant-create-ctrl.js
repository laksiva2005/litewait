/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantCreateCtrl', MerchantCreateCtrl);

	angular.$inject = ['$scope', 'Merchant', 'merchant'];

	function MerchantCreateCtrl($scope, Merchant, merchant) {
		var vm = this;
		vm.merchant = {
			id: '',
			business_name: '',
			business_type: '',
			contact_person: '',
			username: '',
			contact: {
				address_1: '',
				phone: '',
				city: '',
				state: '',
				country: '',
				zip_code: '',
				mail_id: ''
			},
			region: '',
			region_id: '',
			city: '',
			city_id: '',
			photo: '',
			website: '',
			open_time: '',
			close_time: '',
			avg_waiting_time: ''
		};

		vm.updateMerchant = updateMerchant;
		vm.assignmerchant = assignmerchant;
		vm.cancel = cancel;

		function updateMerchant(valid) {
			if (valid) {
				var action;
				if (vm.merchant.id) {
					action = Merchant.update;
				} else {
					action = Merchant.add;
				}
				action(vm.merchant).then(function(response) {
					if (!(response.error)) {
						toaster.pop({
                            type: 'success', 
                            title:'Success', 
                            body: AUTH_MSG.merchantUpdateSuccess, 
                            toasterId: 1
                        });
					} else {
						toaster.pop({
                            type: 'error', 
                            title:'Error', 
                            body: AUTH_MSG.merchantUpdateFailed, 
                            toasterId: 1
                        });
					}
				});
			}
		}

		function assignMerchant() {
			if (merchant) {
				vm.merchant.username = merchant.data.username;
				vm.merchant.business_name = merchant.data.business_name;
				vm.merchant.business_type = merchant.data.business_type;
				vm.merchant.contact_person = merchant.data.contact_person;
				vm.merchant.contact.address_1 = merchant.data.contact.address_1;
				vm.merchant.contact.phone = merchant.data.contact.phone;
				vm.merchant.contact.city = merchant.data.contact.city;
				vm.merchant.contact.state = merchant.data.contact.state;
				vm.merchant.contact.country = merchant.data.contact.country;
				vm.merchant.contact.zip_code = merchant.data.contact.zip_code;
				vm.merchant.contact.mail_id = merchant.data.contact.mail_id;
				vm.merchant.region = merchant.data.region;
				vm.merchant.region_id = merchant.data.region_id;
				vm.merchant.city = merchant.data.city;
				vm.merchant.city_id = merchant.data.city_id;
				vm.merchant.open_time = merchant.data.open_time;
				vm.merchant.close_time = merchant.data.close_time;
				vm.merchant.avg_waiting_time = merchant.data.avg_waiting_time;
				vm.merchant.photo = merchant.data.photo;
				vm.merchant.website = merchant.data.website;
			}
		}

		function cancel(event) {
			event.preventDefault();
			$state.go('home');
		}

		assignMerchant();
	}
})(angular);