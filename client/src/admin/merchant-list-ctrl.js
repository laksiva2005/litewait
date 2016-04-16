/*
*
*/
;(function(angular) {
	'use strict';
	angular.module('litewait.ui').controller('MerchantListCtrl', MerchantListCtrl);

	angular.$inject = ['$scope', 'Merchant', '$window', 'AUTH_MSG'];

	function MerchantListCtrl($scope, Merchant, $window, AUTH_MSG) {
		var vm = this;
		vm.merchant = {
			list: [],
			busy: false,
			offset: 0,
			limit: 20,
			totalRecords: 0,
			keyword: ''
		};
		vm.initializeMerchant = initializeMerchant;
		vm.nextPage = nextPage;
		vm.deleteMerchant = deleteMerchant;

		function deleteMerchant(event, id) {
			event.preventDefault();
			var confirm = $window.confirm('Are you sure to want to delete?');
			if (confirm) {
				Merchant.deleteMerchant(id).then(function(response) {
					if (!response.error) {
						toaster.pop({
	                        type: 'success', 
	                        title:'Success', 
	                        body: AUTH_MSG.merchantDeleteSuccess, 
	                        toasterId: 1
	                    });
					} else {
						toaster.pop({
	                        type: 'error', 
	                        title:'Error', 
	                        body: AUTH_MSG.merchantDeleteFailed, 
	                        toasterId: 1
	                    });
					}
				}, function(error) {
					toaster.pop({
	                    type: 'error', 
	                    title:'Error', 
	                    body: AUTH_MSG.merchantDeleteFailed, 
	                    toasterId: 1
	                });
				});
			}
		}

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
            	var data = items[i];
            	var addrArr = [];
            	var addrArr1 = [];
            	if (data.contact !== null) {
            		if (data.contact.address_1) {
            			addrArr.push(data.contact.address_1);
            		}
            		if (data.region) {
            			addrArr.push(data.region);
            		}
            		if (data.contact.city) {
            			addrArr.push(data.contact.city);
            		}
            		if (data.contact.state) {
            			addrArr1.push(data.contact.state);
            		}
            		if (data.contact.zip_code) {
            			addrArr1.push(data.contact.zip_code);
            		}
            		if (data.contact.country) {
            			addrArr1.push(data.contact.country);
            		}
            	}

            	data.addr_line_1 = addrArr.join(', ');
            	data.addr_line_2 = addrArr1.join(', ');
              	vm.merchant.list.push(data);
            }
          }
          vm.merchant.offset = vm.merchant.list.length;
          vm.merchant.busy = false;
        }

        function getMerchantParams() {
        	var page_no = parseInt(vm.merchant.offset/vm.merchant.limit) + 1;
          	return {
				page_no: page_no,
				page_size: vm.merchant.limit,
				search: vm.merchant.keyword
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