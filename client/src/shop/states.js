
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
            	url: "/shop/:id",
                views: {
                    "@": {
                        templateUrl: "shop/shop-detail-menu.html",
                        controller: "ShopDetailMenuCtrl",
                        controllerAs: "sdm"
                    }
                },
                params: {id: ''}
            });
    }
})(angular);