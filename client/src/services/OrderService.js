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


		function get(data) {
			return $http.post(apiBase, data);
		}

		return service;
	}
})();