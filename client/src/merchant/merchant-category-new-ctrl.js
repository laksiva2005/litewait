/*
*
*/
;(function(){
	'use strict';
	angular.module('litewait.ui').controller('NewCategoryCtrl', NewCategoryCtrl);

	NewCategoryCtrl.$inject = ['$scope', 'User', 'MenuService', '$stateParams', '$state', 'MSG', 'toaster', 'category'];

	function NewCategoryCtrl($scope, User, MenuService, $stateParams, $state, MSG, toaster, category) {
		var vm = this;

		vm.data = {};
		vm.data.modelOptions = {
			debounce: {
				default: 500,
				blur: 0
			}
		};
		vm.data.merchant = User.data;
		vm.data.action = ($stateParams.id === '') ? 'Update' : 'Add';
		vm.category = {
			id: '',
			category_name: '',
			merchant_id: User.data.id
		};
		vm.addCategory = addCategory;
		vm.cancel = cancel;

		if (category) {
			vm.category.category_name = category.category_name;
			vm.category.id = category.id;
		}

		function cancel(event) {
			event.preventDefault();
			$state.go('merchant.category');
		}

		function addCategory(valid, data) {
			if (valid) {
				var action = (data.id > 0) ? MenuService.updateCategory : MenuService.addCategory;
				var smsg = vm.data.action == 'Add' ? MSG.addCategorySuccess : MSG.updateCategorySuccess;
				var fmsg = vm.data.action == 'Add' ? MSG.addCategoryFailed : MSG.updateCategoryFailed;
				var params = {
					merchant_id: vm.data.merchant.id,
					category_name: data.category_name
				};

				if (vm.data.action === 'Update' && vm.category.id !== '') {
					params.id = vm.category.id;
				}

				action(params).then(function(response) {
					if ( ! response.data.error) {
						toaster.pop({
	                        type: 'success', 
	                        title:'Success', 
	                        body: smsg, 
	                        toasterId: 1
	                    });
	                    $state.go('merchant.category');
					} else {
						toaster.pop({
	                        type: 'error', 
	                        title:'Error', 
	                        body: fmsg, 
	                        toasterId: 1
	                    });
					}
				}, function(err) {
						toaster.pop({
	                        type: 'error', 
	                        title:'Error', 
	                        body: fmsg, 
	                        toasterId: 1
	                    });
				});
			}
		}
	}
})();