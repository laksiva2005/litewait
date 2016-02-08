
;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('shop', {
                abstract: true
            })
            .state('shop.detail', {
            	url: "/shop-detail-menu",
                views: {
                    "@": {
                        templateUrl: "shop/shop-detail-menu.html",
                        controller: "ShopDetailMenuCtrl"
                    }
                }
            });
    }
})(angular);