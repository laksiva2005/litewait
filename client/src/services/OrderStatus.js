/*
*
*/
;(function() {
	'use strict';
	angular.module('litewait.services').factory('OrderStatus', OrderStatus);

	OrderStatus.$inject = [];

	function OrderStatus() {
		return {
			nextStatus: {
				"New": {
					label: "In Progress",
					key: 2
				},
				"In Progress": {
					label: "Ready To Pickup",
					key: 3
				},
				"Ready to Pickup": {
					label: "Complete",
					key: 4
				},
			}
		};
	}
})();