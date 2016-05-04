/*
 *
 */
;(function() {
	'use strict';
	angular.module('litewait.ui').controller('SearchCtrl', SearchCtrl);

	SearchCtrl.$inject = ['$scope', '$state', 'PubSub', 'Location', 'Search', 'srch', 'authentication'];

	function SearchCtrl($scope, $state, PubSub, Location, Search, srch, authentication) {
		var vm = this;
		vm.merchant = {
			list: [],
			busy: false,
			offset: 0,
			limit: 10,
			searchCriteria: {},
			totalRecords: 0
		};
		vm.keyword = '';
		vm.viewMerchant = viewMerchant;
		vm.initializeMerchant = initializeMerchant;
		vm.nextPage = nextPage;

		function viewMerchant(id) {
			$state.go('shop.detail', {id: id});
		}

		function searchMerchant() {
			var obj = getMerchantParams();
			Search.getMerchantList(obj).then(function(response) {
				assignMerchants(response.merchants);
				vm.merchant.busy = false;
			}, function() {
				vm.merchant.busy = false;
			});
		}

        function assignMerchants(items) {
          for (var i = 0; i < items.length; i++) {
            var index = _.findIndex(vm.merchant.list, {id: items[i].id});
            if (-1 === index) {
              vm.merchant.list.push(items[i]);
            }
          }
          vm.merchant.offset = vm.merchant.list.length;
        }

        function getMerchantParams() {
        	vm.keyword = vm.merchant.searchCriteria.keyword.category;
          	return {
				region_id: vm.merchant.searchCriteria.location.region_id,
				city_id: vm.merchant.searchCriteria.location.city_id,
				search_text: vm.merchant.searchCriteria.keyword.category,
				page_no: vm.merchant.offset,
				page_size: vm.merchant.limit
			};
        }

        function initializeMerchant() {
          vm.merchant.offset = 1;
          vm.merchant.list.length = 0;
          searchMerchant();
        }

        function nextPage() {
          var params = getMerchantParams();

          if ( ! vm.merchant.busy) {
            vm.merchant.busy = true;
            searchMerchant();
          }
        }

        PubSub.subscribe('search', function(event, obj) {
			vm.merchant.searchCriteria = obj.args;
			initializeMerchant();
		});
	}
})();
