/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantCreateCtrl', MerchantCreateCtrl);

	angular.$inject = ['$scope', 'Merchant', 'merchant', 'toaster', 'GeoService'];

	function MerchantCreateCtrl($scope, Merchant, merchant, toaster, GeoService) {
		var vm = this;
		vm.type = merchant ? 'Edit' : 'Add';
		vm.data = {
			geo: {
				country: {name: '', id: ''},
				state: {name: '', id: ''},
				city: {name: '', id: ''}
			}
		};
		vm.merchant = {
			id: '',
			password: '',
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
				cityId: '',
				stateId: '',
				countryId: '',
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
			avg_waiting_time: '',
			is_active: 'N'
		};

		vm.updateMerchant = updateMerchant;
		vm.assignMerchant = assignMerchant;
		vm.cancel = cancel;
		vm.getCountries = getCountries;
		vm.getStates = getStates;
		vm.getCities = getCities;
		vm.onSelectCountry = onSelectCountry;
		vm.onSelectState = onSelectState;
		vm.onSelectCity = onSelectCity;

		function onSelectCountry() {
			vm.merchant.contact.country = vm.data.geo.country.name;
			vm.merchant.contact.countryId = vm.data.geo.country.id;
		}

		function onSelectState() {
			vm.merchant.contact.state = vm.data.geo.state.name;
			vm.merchant.contact.stateId = vm.data.geo.state.id;
		}

		function onSelectCity() {
			vm.merchant.contact.city = vm.data.geo.city.name;
			vm.merchant.contact.cityId = vm.data.geo.city.id;
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
			if (vm.merchant.contact.country) {
				var params = {
					search: str,
					country: vm.data.geo.country.name
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
			if (vm.merchant.contact.state) {
				var params = {
					search: str,
					country: vm.data.geo.country.name,
					state: vm.data.geo.state.name
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

		function updateMerchant(valid, data) {
			if (valid) {
				var params = angular.copy(data);
				var action;
				if (vm.merchant.id) {
					action = Merchant.update;
				} else {
					action = Merchant.add;
					delete params.id;
				}
				action(params).then(function(response) {
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
				vm.merchant.id = merchant.data.id;
				vm.merchant.password = '';
				vm.merchant.username = merchant.data.username;
				vm.merchant.business_name = merchant.data.business_name;
				vm.merchant.business_type = merchant.data.business_type;
				vm.merchant.contact_person = merchant.data.contact_person;
								
				if (merchant.data.contact !== null) {
					vm.merchant.contact.address_1 = merchant.data.contact.address_1;
					vm.merchant.contact.phone = merchant.data.contact.phone;
					vm.data.geo.city.name = vm.merchant.contact.city = merchant.data.contact.city || '';
					vm.data.geo.state.name = vm.merchant.contact.state = merchant.data.contact.state || '';
					vm.data.geo.country.name = vm.merchant.contact.country = merchant.data.contact.country || '';
					vm.data.geo.city.id = vm.merchant.contact.cityId = merchant.data.contact.cityId || '';
					vm.data.geo.state.id = vm.merchant.contact.stateId = merchant.data.contact.stateId || '';
					vm.data.geo.country.id = vm.merchant.contact.countryId = merchant.data.contact.countryId || '';
					vm.merchant.contact.zip_code = merchant.data.contact.zip_code;
					vm.merchant.contact.mail_id = merchant.data.contact.mail_id;
				}

				vm.merchant.region = merchant.data.region;
				vm.merchant.region_id = merchant.data.region_id;
				vm.merchant.city = merchant.data.city;
				vm.merchant.city_id = merchant.data.city_id;
				vm.merchant.open_time = merchant.data.open_time;
				vm.merchant.close_time = merchant.data.close_time;
				vm.merchant.avg_waiting_time = merchant.data.avg_waiting_time;
				vm.merchant.photo = merchant.data.photo;
				vm.merchant.website = merchant.data.website;
				vm.merchant.is_active = merchant.data.is_active;
			}
		}

		function cancel(event) {
			event.preventDefault();
			$state.go('home');
		}

		assignMerchant();
	}
})(angular);