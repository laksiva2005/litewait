/*
*
*/
;(function() {
	'use strict';
	function checkCategoryExists(MenuService, $q) {
		return {
			restrict: 'A',
			require: 'ngModel',
			scope: {
				categoryData: '='
			},
			link: function(scope, element, attrs, ngModel) {
				ngModel.$asyncValidators.checkCategoryExists = function(value) {
					var data = scope.categoryData;
					if (data.id) {

						if (data.id === '') {
							delete data['id'];
						} else {
							data.category_id = data.id;
							delete data.id;
						}
					}
					data.category_name = value;
					return MenuService.checkCategoryExists(data).then(function(response) {
						if (!response.data.error && response.data.data != null) {
							return $q.reject(false);
						}
						return response;
					});
				};
			}
		};
	}

	checkCategoryExists.$inject = ['MenuService', '$q'];

	angular.module('litewait.directives').directive('checkCategoryExists', checkCategoryExists);
})();