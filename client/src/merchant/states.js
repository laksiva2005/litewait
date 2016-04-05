
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
            });
    }
})(angular);