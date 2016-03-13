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
		obj.deleteMerchant = deleteMerchant;

		function get(id) {
			var params = {
				params: {
					id: id
				}
			};

			return $http.get(urlBase, params).then(function(response) {
				if (!response.data.error) {
					return response.data.data;
				}
				return {};
			});
		}

		function deleteMerchant() {

		}

		return obj;
	}
})();