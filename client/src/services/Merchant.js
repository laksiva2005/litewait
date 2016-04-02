/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('Merchant', Merchant);

	Merchant.$inject = ['$http', '$q', 'RouteConfig'];

	function Merchant($http, $q, RouteConfig) {
		var urlBase = RouteConfig.apiBase + '/merchant';
		var obj = {};

		obj.get = get;
		obj.update = update;
		obj.add = add;
		obj.deleteMerchant = deleteMerchant;
		obj.getList = getList;

		function get(id) {
			var params = {
				params: {
					id: id
				}
			};

			return $http.get(urlBase, params);
		}

		function deleteMerchant(id) {
			//return $http.put(urlBase, data);
		}

		function update(data) {
			return $http.put(urlBase, data);
		}

		function add(data) {
			return $http.post(urlBase, data);
		}

		function getList(data) {
			var params = {
				params: data
			};
			var url = urlBase + 's';
			return $http.get(url, params).then(function(response) {
				if (!response.data.error) {
					if (response.data.data) {
						return response.data.data;
					} else {
						return {merchants: []};
					}
				}

				return {merchants:[]};
			});
		}

		return obj;
	}
})();