/*
*
*/
;(function() {
	'use strict';

	angular.module('litewait.services').factory('session', session);

	session.$inject = ['$window'];

	function session($window) {
		var service = {};
		var storage = $window.sessionStorage;

		service.setItem = function(key, val) {
			storage.setItem(key, angular.toJson(val));
		};

		service.getItem = function(key) {
			var data;
			try {
				data = angular.fromJson(storage.getItem(key));
			} catch(e) {
				data = storage.getItem(key);
			}

			return data;
		};

		service.removeItem = function(key) {
			storage.removeItem(key);
		};

		service.clear = function() {
			var i = storage.length;
			while(i--) {
			  var key = storage.key(i);
			  storage.removeItem(key);
			}
		};

		return service;
	}
})();