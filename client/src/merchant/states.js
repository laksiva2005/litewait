
;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('merchant', {
                url: '/merchant',
                views: {
                    "merchant-landing@merchant": {
                        templateUrl: 'merchant/merchant-order.html',
                        controller: 'MerchantOrderCtrl',
                        controllerAs: 'moc'
                    },
                    '@': {
                        templateUrl: 'merchant/merchant-landing.html',
                        controller: 'MerchantLandingCtrl',
                        controllerAs: 'mlc'
                    }
                }
            })
            .state('merchant.order', {
                url: '/order',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-order.html',
                        controller: 'MerchantOrderCtrl',
                        controllerAs: 'moc'
                    }
                }
            })
            .state('merchant.pastorder', {
                url: '/pastorder',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-order.html',
                        controller: 'MerchantOrderCtrl',
                        controllerAs: 'moc'
                    }
                }
            })
            .state('merchant.review', {
                url: '/review',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-review.html',
                        controller: 'MerchantReviewCtrl',
                        controllerAs: 'mrc'
                    }
                }
            })
            .state('merchant.menu', {
                url: '/menu',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-menu.html',
                        controller: 'MerchantMenuCtrl',
                        controllerAs: 'mmc'
                    }
                }
            })
            .state('merchant.menuadd', {
                url: '/menu/add',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-menu-new.html',
                        controller: 'NewMenuCtrl',
                        controllerAs: 'nmc'
                    }
                },
                resolve: {
                    menu: function() {
                        return false;
                    }
                }
            })
            .state('merchant.menuedit', {
                url: '/menu/edit/:id',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-menu-new.html',
                        controller: 'NewMenuCtrl',
                        controllerAs: 'nmc'
                    }
                },
                resolve: {
                    menu: function(MenuService, $stateParams, User) {
                        var data = {
                            merchant_id: User.data.id,
                            item_id: $stateParams.id
                        };

                        return MenuService.getCategoryByMandMId(data).then(function(response) {
                            if (!response.error && response.data !== null) {
                                return response.data.data;
                            } else {
                                return false;
                            }
                        });
                    }
                }
            })
            .state('merchant.category', {
                url: '/category',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-category.html',
                        controller: 'MerchantCategoryCtrl',
                        controllerAs: 'mcc'
                    }
                }
            })
            .state('merchant.categoryadd', {
                url: '/category/add',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-category-new.html',
                        controller: 'NewCategoryCtrl',
                        controllerAs: 'ncc'
                    }
                },
                resolve: {
                    category: function() {
                        return false;
                    }
                }
            })
            .state('merchant.categoryedit', {
                url: '/category/edit/:category_id',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-category-new.html',
                        controller: 'NewCategoryCtrl',
                        controllerAs: 'ncc'
                    }
                },
                resolve: {
                    category: function(MenuService, $stateParams, User, $state) {
                        var data = {
                            merchant_id: User.data.id,
                            category_id: $stateParams.category_id
                        };

                        return MenuService.getCategoryByMandCId(data).then(function(res){
                            if (!res.data.error) {
                                var index = _.findIndex(res.data.data.item_categories, {id: $stateParams.category_id});
                                if (index == -1) {
                                    $state.go('merchant.category');
                                }
                                return res.data.data.item_categories[index];
                            }

                            return false;
                        });
                    }
                }
            });
    }
})(angular);