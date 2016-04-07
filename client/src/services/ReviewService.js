/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('ReviewService', ReviewService);

	ReviewService.$inject = ['$http', 'RouteConfig'];

	function ReviewService($http, RouteConfig) {
		var service = {};
		var apiBase = RouteConfig.apiBase + '/merchantratings';

		service.getMerchantReviews = getMerchantReviews;

		function getMerchantReviews(data) {
			var params = {
				params: data
			};
			return $http.get(apiBase, params);
		}

		return service;
	}
})();