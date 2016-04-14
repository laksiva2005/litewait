/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('GeoService', GeoService);

	GeoService.$inject = ['$http', 'RouteConfig'];

	function GeoService($http, RouteConfig) {
		var apiBase = RouteConfig.apiBase;
		var service = {};
		service.getCountries = getCountries;
		service.getStates = getStates;
		service.getCities = getCities;

		function getCountries(str) {
			var params = {
				params: {
					search: str
				}
			};

			var url = apiBase + '/countries';
			return $http.get(url, params);
		}

		function getStates(data) {
			var params = {
				params: data
			};

			var url = apiBase + '/states';
			return $http.get(url, params);
		}

		function getCities(data) {
			var params = {
				params: data
			};

			var url = apiBase + '/cities';
			return $http.get(url, params);
		}

		return service;
	}
})();