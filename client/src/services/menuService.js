/*
*
*/
;(function() {
	'use strict';

	angular.module('litewait.services').factory('MenuService', MenuService);

	angular.$inject = ['$http', 'RouteConfig'];

	function MenuService($http, RouteConfig) {
		var apiBase = RouteConfig.apiBase + '/menu';
		var service = {};
		service.getByMerchantId = getByMerchantId;
		service.uploadByExcel = uploadByExcel;
		service.getCategoryByMerchantId = getCategoryByMerchantId;
		service.getByMandC = getByMandC;
		service.featuredByMerchant = featuredByMerchant;
		service.deleteMenu = deleteMenu;
		service.update = update;
		service.add = add;

		function add(data) {
			var url = apiBase + '/category/items';
			return $http.post(url, data);
		}

		function update(data) {
			var url = apiBase + '/category/items';

			return $http.put(url, data);
		}

		function deleteMenu(data) {
			var params = {
				params: data
			};

			var url = apiBase + '/category/items';

			$http.delete(url, params);
		}

		function featuredByMerchant(id) {
			var data = {
				params: {
					merchant_id: id
				}
			};

			var url = apiBase + '/items/featured';

			return $http.get(url, data);
		}

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
			var data;
			if (angular.isObject(id)) {
				data = {
					params: id
				};	
			} else {
				data = {
					params: {
						merchant_id: id
					}
				};
			}

			return $http.get(url, data);
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