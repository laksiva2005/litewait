/*
*
*/
;(function() {
	'use strict';

	angular.module('litewait.ui').factory('MenuService', MenuService);

	angular.$inject = ['$http', 'RouteConfig'];

	function MenuService($http, RouteConfig) {
		var apiBase = RouteConfig.apiBase + '/menu';
		var service = {};
		service.getByMerchantId = getByMerchantId;
		service.uploadByExcel = uploadByExcel;
		service.getCategoryByMerchantId = getCategoryByMerchantId;
		service.getByMandC = getByMandC;

		function getByMerchantId(id) {
			var data = {
				params: {
					merchant_id: id
				}
			};

			return $http.get(apiBase, data).then(function(res) {
				var objArr = [];
				var data = response.data.data;
				if (!res.data.error) {
					return formatMenu(data);
				} else {
					return [];
				}
			});
		}

		function formatMenu(data) {
			var objArr = [];
			for (var i = 0; i < data.category.length; i++) {
				for (var j=0;j<data.category[i].menu_items.length;j++) {
					var menu_item = data.category[i].menu_items[j];
					var obj = {
						item_id: menu_item.item_id,
						item_name: menu_item.item_name,
						description: menu_item.description,
						price: menu_item.price,
						merchant_id: data.merchant_id,
						category_id: data.category[i].category_id,
						category_name: data.category[i].category_name 
					};

					objArr.push(obj);
				}
			}
			return objArr;
		}

		function uploadByExcel() {

		}

		function getCategoryByMerchantId(id) {
			var url = apiBase + '/category';
			var params = {
				params: {
					merchant_id: id
				}
			};

			return $http.get(url, params);
		}

		function getByMandC(data) {
			var url = apiBase + '/category/items';
			var params = {
				params: {
					merchant_id: data.merchant_id,
					category_id: data.category_id
				}
			};

			return $http.get(url, params);
		}

		return service;
	}
})();