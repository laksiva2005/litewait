/*
 *
 */
;(function () {
	'use strict';
	angular.module('litewait.ui').controller('ShopDetailMenuCtrl', ShopDetailMenuCtrl);

	ShopDetailMenuCtrl.$inject = ['$scope', '$state', '$uibModal', '$stateParams', 'PubSub', 'Merchant', 'MenuService', 'User', 'CartService'];

	function ShopDetailMenuCtrl($scope, $state, $uibModal, $stateParams, PubSub, Merchant, MenuService, User, CartService) {
		var vm = this;
		vm.nest = {};
		vm.nest.merchantDetail = {};
		vm.nest.merchantId = $stateParams.id;
		vm.getMenuByMandC = getMenuByMandC;
		vm.addToCart = addToCart;
		vm.openCartModal = openCartModal;
        vm.nest.rating = 0;
		$scope.menu = {};

        vm.openRatingModel = function() {
            $scope.nest = vm.nest;
            var modalInstance = $uibModal.open({
                templateUrl: 'ratingModal.html',
                backdrop: 'static',
                size: 'lg',
                windowClass: 'menu-modal',
                keyboard: false,
                scope: $scope,
                bindToController: true,
                controllerAs: 'ratingModal',
                controller: function($scope, $uibModalInstance, RatingService, User) {
                    var vm = this;
                    vm.nest = $scope.nest;
                    vm.close = close;
                    vm.data = {
                        user: User.username,
                        merchant: vm.nest.merchantDetail.username,
                        rating: vm.nest.rating,
                        comment: ''
                    };

                    vm.addRating = addRating;

                    function addRating() {
                        RatingService.add(vm.data).then(function(response) {
                            if (response.data.error) {
                                $scope.nest.rating = $scope.nest.merchantDetail.rating;
                            }
                        });
                        close();
                    }

                    function close() {
                        $scope.nest.rating = $scope.nest.merchantDetail.rating;
                        $uibModalInstance.close();
                    }
                }
            });
        };

		function openCartModal(data) {
			var menu = angular.copy(data);
			if (!User.isLoggedIn) {
				PubSub.publish('open:login');
				return;
			}

			var cartmenu = CartService.get(menu.item_id);
			if (cartmenu) {
				menu.qty = cartmenu.qty;
				menu.isCart = true;
			} else {
				menu.qty = 1;
				menu.isCart = false;
			}

			$scope.menu = menu;
			$scope.nest = vm.nest;
			var modalInstance = $uibModal.open({
                templateUrl: 'cartModal.html',
                backdrop: 'static',
                size: 'lg',
                windowClass: 'menu-modal',
                keyboard: false,
                scope: $scope,
                bindToController: true,
                controllerAs: 'cartModal',
                controller: function($scope, $uibModalInstance, CartService) {
                    var vm = this;
                    vm.nest = $scope.nest;
                    vm.menu = angular.copy($scope.menu);

                    vm.addToCart = addToCart;
                    vm.close = close;

                    function addToCart() {
                    	CartService.add(vm.menu, vm.nest.merchantDetail);
                    	close();
                    }

                    function close() {
                    	$uibModalInstance.close();
                    }
                }
            });
		}

		function addToCart(obj) {
			if (!User.isLoggedIn) {
				PubSub.publish('open:login');
				return;
			}

			CartService.add(obj, vm.nest.merchantId);
		}

		function getMerchant(id) {
			Merchant.get(id).then(function(response) {
				vm.nest.merchantDetail = response.data.data;
                vm.nest.rating = vm.nest.merchantDetail.rating;
				vm.nest.merchantDetail.categories = [];
				vm.nest.merchantId = vm.nest.merchantDetail.id;
				return MenuService.getCategoryByMerchantId(vm.nest.merchantId);
			}).then(function(response) {
				if (!response.data.error) {
					vm.nest.merchantDetail.categories = response.data.data.item_categories || [];
					if (vm.nest.merchantDetail.categories.length) {
						for(var i=0;i<vm.nest.merchantDetail.categories.length; i++) {
							vm.nest.merchantDetail.categories[i].menu_items = [];
						}
						PubSub.publish('getfirstmenu', vm.nest.merchantDetail.categories[0]);
					}
				}
			});
		}

		function getMenuByMandC(category_id) {
			var data = {
				category_id: category_id,
				merchant_id: vm.nest.merchantId
			};

			var index = _.findIndex(vm.nest.merchantDetail.categories, {id: category_id+''});
			if (index !== -1 && vm.nest.merchantDetail.categories[index].menu_items.length === 0) {
				MenuService.getByMandC(data).then(function(res) {

					vm.nest.merchantDetail.categories[index].menu_items = res.data.data.menu_items || [];
					CartService.process();
				});
			}
			console.log(vm.nest);

		}

		if (vm.nest.merchantId) {
			getMerchant(vm.nest.merchantId);
		}

		function processCartRemove(data) {
			var cindex = _.findIndex(vm.nest.merchantDetail.categories, {id: data.category_id+''});
			if (cindex !== -1) {
				var category = vm.nest.merchantDetail.categories[cindex];
				var index = _.findIndex(category.menu_items, {item_id: data.item_id});
				if (index !== -1) {
					vm.nest.merchantDetail.categories[cindex].menu_items[index].isCart = false;
					vm.nest.merchantDetail.categories[cindex].menu_items[index].qty = '';
				}
			}
		}

		function processCartAdd(data) {
			var cindex = _.findIndex(vm.nest.merchantDetail.categories, {id: data.category_id+''});
			if (cindex !== -1) {
				var category = vm.nest.merchantDetail.categories[cindex];
				var index = _.findIndex(category.menu_items, {item_id: data.item_id});
				if (index !== -1) {
					vm.nest.merchantDetail.categories[cindex].menu_items[index].isCart = true;
					vm.nest.merchantDetail.categories[cindex].menu_items[index].qty = data.qty;
				}
			}
		}

		PubSub.subscribe('getfirstmenu', function(event, obj) {
			var category_id = obj.args.id;
			getMenuByMandC(category_id);
		});

		PubSub.subscribe('cart:added', function(event, obj) {
			var data = obj.args;
			processCartAdd(data);
		});

		PubSub.subscribe('cart:removed', function(event, obj) {
			var data = obj.args;
			processCartRemove(data);
		});
	}
})();
