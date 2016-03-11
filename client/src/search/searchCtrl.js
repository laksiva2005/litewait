/*
 *
 */
;(function() {
	'use strict';
	angular.module('litewait.ui').controller('SearchCtrl', SearchCtrl);

	SearchCtrl.$inject = ['$scope', '$state', 'PubSub', 'Location', 'Search', 'srch'];

	function SearchCtrl($scope, $state, PubSub, Location, Search, srch) {
		var vm = this;
		vm.retailer = {
			list: []
		};
		vm.viewRetailer = viewRetailer;

		function viewRetailer() {
			$state.go('shop.detail.menu');
		}

		function searchRetailer(data) {
			var obj = {
				region_id: data.location.region_id,
				city_id: data.location.city_id,
				search_text: data.keyword.category,
				page_no: 1,
				page_size: 10
			};

			Search.getMerchantList(obj).then(function(response) {
				vm.retailer.list = response;
			}, function() {
				vm.retailer.list = [];
			});
		}

		PubSub.subscribe('search', function(event, obj) {
			searchRetailer(obj.args);
		});
	}
})();