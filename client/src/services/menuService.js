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
		service.addCategory = addCategory;
		service.updateCategory = updateCategory;
		service.checkCategoryExists = checkCategoryExists;
		service.deleteCategory = deleteCategory;
		service.getCategoryByMerchantId = getCategoryByMerchantId;
		service.getCategoryByMandCId = getCategoryByMandCId;
		service.getCategoryByMandMId = getCategoryByMandMId;
		service.getByMandC = getByMandC;
		service.featuredByMerchant = featuredByMerchant;
		service.deleteMenu = deleteMenu;
		service.update = update;
		service.add = add;

		function addCategory(data) {
			var params = [{
				category_name: data.category_name
			}];
			var url = apiBase + '/category?merchant_id=' + data.merchant_id;

			return $http.post(url, params);
		}

		function updateCategory(data) {
			var params = [{
				id: data.category_id,
				category_name: data.category_name
			}];
			var url = apiBase + '/category?merchant_id='+data.merchant_id;

			return $http.put(url, params);
		}

		function deleteCategory(data) {
			var params = {
				params: {
					merchant_id: data.merchant_id,
					category_id: data.category_id
				}
			};
			var url = apiBase + '/category';

			return $http.delete(url, params);
		}

		function checkCategoryExists(data) {
			var params = {params: {
					merchant_id: data.merchant_id,
					category_name: data.category_name
				}
			};
			var url = apiBase + '/category/nameAvailability';
			if (data.category_id) {
				params.params.category_id = data.category_id;
			}

			return $http.get(url, params);
		}

		function getCategoryByMandCId(data) {
			var url = apiBase + '/category';
			var params = {
				params: {
					merchant_id: data.merchant_id,
					category_id: data.category_id
				}
			};

			return $http.get(url, params);
		}

		function getCategoryByMandMId(data) {
			var url = apiBase + '/category/item/details';
			var params = {
				params: {
					merchant_id: data.merchant_id,
					item_id: data.item_id
				}
			};

			return $http.get(url, params);
		}

		function add(data) {
			var url = apiBase + '/category/items';
			var params = {
				merchant_id: data.merchant_id,
				menu_items: []
			};
			delete data.merchant_id;
			params.menu_items.push(data);
			return $http.post(url, params);
		}

		function update(data) {
			var url = apiBase + '/category/items';
			var params = {
				merchant_id: data.merchant_id,
				menu_items: []
			};
			delete data.merchant_id;
			params.menu_items.push(data);
			return $http.put(url, params);
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
					params: id
				};

			return $http.get(apiBase, data).then(function(res) {
				var objArr = [];
				var data = res.data.data;
				if (!res.data.error) {
					return formatMenu(data);
				} else {
					return [];
				}
			});
		}

		function formatMenu(data) {
			var objArr = [];
			for (var i = 0; i < data.menu_items.length; i++) {
				var menu_item = data.menu_items[i];
				var obj = {
					item_id: menu_item.item_id,
					item_name: menu_item.item_name,
					description: menu_item.description,
					price: menu_item.price,
					merchant_id: data.merchant_id,
					category_id: menu_item.category_id,
					category_name: menu_item.category_name || ''
				};

				objArr.push(obj);
			}
			return objArr;
		}

		function uploadByExcel() {

		}

		function getCategoryByMerchantId(id) {
			var url = apiBase + '/category';
			var data;
			if (!angular.isObject(id)) {
				data = {
					params: {
						merchant_id: id
					}
				};	
			} else {
				data = {
					params: id
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