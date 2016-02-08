
;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('cart', {
                abstract: true
            })
            .state('cart.detail', {
            	url: "/cart",
                views: {
                    "@": {
                        templateUrl: "cart/cart.html",
                        controller: "CartCtrl"
                    }
                }
            })
            .state('cart.summary', {
                url: "/cart-summary",
                views: {
                    "@": {
                        templateUrl: "cart/cart-summary.html",
                        controller: "CartSummaryCtrl"
                    }
                }
            });
    }
})(angular);