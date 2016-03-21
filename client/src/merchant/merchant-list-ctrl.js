/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantListCtrl', MerchantListCtrl);

	angular.$inject = ['$scope', 'Merchant'];

	function MerchantListCtrl($scope, Merchant) {
		var vm = this;
		vm.merchant = {
			list: [],
			busy: false,
			offset: 0,
			limit: 10,
			totalRecords: 0,
			search: ''
		};
		vm.initializeMerchant = initializeMerchant;
		vm.nextPage = nextPage;

		function searchMerchant() {
			var obj = getMerchantParams();
			Merchant.getList(obj).then(function(response) {
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
          	return {
				page_no: vm.merchant.offset,
				page_size: vm.merchant.limit,
				search: vm.merchant.search
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

        initializeMerchant();
	}
})(angular);