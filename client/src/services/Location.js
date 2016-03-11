/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('Location', Location);
	
	Location.$inject = [];

	function Location() {
		var location = {};
		location.status = false;
		location.data = "";
		location.current = {};
		location.current.place = "";
		location.current.keyword = '';
		return location;
	}
})();