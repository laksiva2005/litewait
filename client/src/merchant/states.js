
;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('merchant', {
                abstract: true
            })
            .state('merchant.list', {
            	url: "/merchant",
                views: {
                    "@": {
                        templateUrl: "merchant/merchant-list.html",
                        controller: "MerchantListCtrl",
                        controllerAs: "ml"
                    }
                }
            }).state('merchant.create', {
                url: "/cmerchant/:id",
                views: {
                    "@": {
                        templateUrl: "merchant/merchant-create.html",
                        controller: "MerchantCreateCtrl",
                        controllerAs: "mcr"
                    }
                },
                resolve: {
                    merchant: function($timeout, $q, Merchant, $stateParams) {
                        return Merchant.get($stateParams.id).then(function(response) {
                            return response.data;
                        }).catch(function(error) {
                            return false;
                        });
                    }
                }
            });
    }
})(angular);