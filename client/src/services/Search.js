/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.services').factory('Search', Search);

	Search.$inject = ['$http', '$q', 'RouteConfig'];

	function Search($http, $q, RouteConfig) {
		var urlBase = RouteConfig.apiBase + '/search';
		var search = {};

		search.getRegions = getRegions;
		search.getRegionByIP = getRegionByIP;
		search.getRegionByGeo = getRegionByGeo;
		search.getMerchantList = getMerchantList;
		search.getKeywords = getKeywords;

		function getRegions(str) {
			var url = urlBase + '?cityregion=' + str;
			return $http.get(url).then(function(response) {
				if (!response.data.error) {
					return response.data.data;
				}
				return [];
			});
		}

		function getKeywords(params) {
			var url = urlBase + 'items?region_id=5540de6bb01cc3100320ff05&city_id=5540de6bb01cc3100320ff04&search_text=z';
			return $http.get(url).then(function(response) {
				if (!response.data.error) {
					return response.data.data;
				}
				return [];
			});
		}

		function getRegionByIP() {
			var url = urlBase + '?type=ipaddress';
			return $http.get(url).then(function(response) {
				if (!response.data.error) {
					return response.data.data;
				}
				return [];
			});
		}

		function getRegionByGeo() {
			return getLocation().then(function(position) {
				var url = urlBase;
				var params = {
					params: {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude
					}
				};

				return $http.get(url, params);
			});
		}

		function getMerchantList(params) {
			var queryString = angular.param(params);
			var url = urlBase + 'merchant';
			return $http.get(url, {params: params}).then(function(response) {
				if (!response.data.error) {
					return response.data.data;
				}

				return [];
			});
		}

		function getLocation() {
			var deferred = $q.defer();
			if ( ! navigator.geolocation) {
				deferred.reject(false);
				return deferred.promise;
			}

			navigator.geolocation.getCurrentPosition(getPosition,failed);

			function getPosition(position) {
				deferred.resolve(position);
			}

			function failed(error) {
				deferred.reject(error);
			}

			return deferred.promise;
		}

		return search;
	}
})(angular);