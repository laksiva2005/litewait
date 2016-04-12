
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
            });
    }
})(angular);