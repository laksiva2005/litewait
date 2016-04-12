/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('OrderService', OrderService);

	OrderService.$inject = ['$http', 'RouteConfig'];

	function OrderService($http, RouteConfig) {
		var service = {};
		var apiBase = RouteConfig.apiBase + '/order/search';
		service.get = get;
		service.getById = getById;
		service.changeStatus = changeStatus;

		function changeStatus(data) {
			var params = {
				params: data
			};

			var url = RouteConfig.apiBase + '/order/changeStatus';
			return $http.put(url, params);
		}

		function getById(id) {
			var params = {
				params: {
					order_id: id
				}
			};

			return $http.get(apiBase, params);
		}

		function get(data) {
			return $http.post(apiBase, data);
		}

		return service;
	}
})();