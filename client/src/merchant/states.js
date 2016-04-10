
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
                    category: function(MenuService, $stateParams) {
                        var data = {
                            merchant_id: $stateParams.merchant_id,
                            category_id: $stateParams.category_id
                        };

                        return MenuService.getCategoryByMandCId(data);
                    }
                }
            });
    }
})(angular);