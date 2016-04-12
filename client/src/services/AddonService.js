/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('AddonService', AddonService);

	AddonService.$inject = ['$http', 'RouteConfig'];

	function AddonService($http, RouteConfig) {
		var apiBase = RouteConfig.apiBase + '/menu/addons';
		var service = {};

		service.get = get;

		function get(data) {
			var params = {
				params: data
			};

			return $http.get(apiBase, params);
		}

		return service;
	}
})();