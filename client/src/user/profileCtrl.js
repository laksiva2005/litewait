/*
 *
 */
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['Merchant', '$scope', 'User', '$state', 'toaster', 'AUTH_MSG', 'MSG', 'AUTH_PROPS', 'GeoService', 'authentication'];

	function ProfileCtrl(Merchant, $scope, User, $state, toaster, AUTH_MSG, MSG, AUTH_PROPS, GeoService, authentication) {
		var vm = this;
		vm.AUTH_PROPS = AUTH_PROPS;
		vm.user = User;
		vm.geo = {
			country: {name: '', id: ''},
			state: {name: '', id: ''},
			city: {name: '', id: ''}
		};
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
			},
			user_type: ''
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

		// functions exposed to view
		vm.updateProfile = updateProfile;
		vm.assignProfile = assignProfile;
		vm.cancel = cancel;
		vm.savePayment = savePayment;
		vm.assignPayment = assignPayment;
		vm.open1 = open1;
		vm.getCountries = getCountries;
		vm.getStates = getStates;
		vm.getCities = getCities;
		vm.onSelectCountry = onSelectCountry;
		vm.onSelectState = onSelectState;
		vm.onSelectCity = onSelectCity;

		function onSelectCountry() {
			vm.profile.contact.country = vm.geo.country.name;
			vm.profile.contact.countryId = vm.geo.country.id;
		}

		function onSelectState() {
			vm.profile.contact.state = vm.geo.state.name;
			vm.profile.contact.stateId = vm.geo.state.id;
		}

		function onSelectCity() {
			vm.profile.contact.city = vm.geo.city.name;
			vm.profile.contact.cityId = vm.geo.city.id;
		}

		function getCountries(str) {
			return GeoService.getCountries(str).then(function(res) {
				var a = [];
				if (!res.data.error && res.data.data !== null) {
					for (var i=0;i<res.data.data.length;i++) {
						a.push({
							id: res.data.data[i].id,
							name: res.data.data[i].name
						});
					}
					return a;
				}
				return [];
			});
		}

		function getStates(str) {
			if (vm.profile.contact.countryId) {
				var params = {
					search: str,
					country: vm.geo.country.name
				};

				return GeoService.getStates(params).then(function(res) {
					var a = [];
					if (!res.data.error && res.data.data !== null) {
						for (var i=0;i<res.data.data.length;i++) {
							a.push({
								id: res.data.data[i].id,
								name: res.data.data[i].name
							});
						}
						return a;
					}
					return [];
				});
			}
			return [];
		}

		function getCities(str) {
			if (vm.profile.contact.stateId) {
				var params = {
					search: str,
					country: vm.geo.country.name,
					state: vm.geo.state.name
				};

				return GeoService.getCities(params).then(function(res) {
					var a = [];
					if (!res.data.error && res.data.data !== null) {
						for (var i=0;i<res.data.data.length;i++) {
							a.push({
								id: res.data.data[i].city_name,
								name: res.data.data[i].city_name
							});
						}
						return a;
					}
					return [];
				});
			}
			return [];
		}

		function open1() {
			vm.pay.opened = true;
		}

		function updateProfile(valid) {
			if (valid) {
				if (User.role == 'm') {
					Merchant.update(vm.profile).then(function(response) {
						if (!(response.error)) {
							toaster.pop({
	                            type: 'success', 
	                            title:'Success', 
	                            body: MSG.merchantUpdateSuccess, 
	                            toasterId: 1
	                        });
						} else {
							toaster.pop({
	                            type: 'error', 
	                            title:'Error', 
	                            body: MSG.merchantUpdateFailed, 
	                            toasterId: 1
	                        });
						}
					});
				} else {
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
		}

		function assignProfile() {
			vm.profile.user_name = vm.user.data.username || vm.user.data.user_name;
			vm.profile.contact.address_1 = vm.user.data.contact.address_1;
			vm.profile.contact.phone = vm.user.data.contact.phone;
			vm.geo.city.name = vm.profile.contact.city = vm.user.data.contact.city;
			vm.geo.city.id = vm.profile.contact.cityId = vm.user.data.contact.cityId || '';
			vm.geo.state.name = vm.profile.contact.state = vm.user.data.contact.state;
			vm.geo.state.id = vm.profile.contact.stateId = vm.user.data.contact.stateId || '';
			vm.geo.country.name = vm.profile.contact.country = vm.user.data.contact.country;
			vm.geo.country.id = vm.profile.contact.countryId = vm.user.data.contact.countryId || '';
			vm.profile.contact.zip_code = vm.user.data.contact.zip_code;
			vm.profile.contact.mail_id = vm.user.data.contact.mail_id;
			vm.profile.user_type = User.role;

			if (User.role == 'm') {
				vm.profile.id = vm.user.data.id;
				vm.profile.username = vm.user.data.username;
				vm.profile.business_name = vm.user.data.business_name;
				vm.profile.business_type = vm.user.data.business_type;
				vm.profile.contact_person = vm.user.data.contact_person;
				vm.profile.region = vm.user.data.region;
				vm.profile.region_id = vm.user.data.region_id;
				vm.profile.city = vm.user.data.city;
				vm.profile.city_id = vm.user.data.city_id;
				vm.profile.open_time = vm.user.data.open_time;
				vm.profile.close_time = vm.user.data.close_time;
				vm.profile.avg_waiting_time = vm.user.data.avg_waiting_time;
				vm.profile.photo = vm.user.data.photo;
				vm.profile.website = vm.user.data.website;
				vm.profile.is_active = vm.user.data.is_active;
			}
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