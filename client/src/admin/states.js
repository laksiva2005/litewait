
;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('admin_merchant', {
                abstract: true
            })
            .state('admin_merchant.list', {
            	url: "/admin/merchant",
                views: {
                    "@": {
                        templateUrl: "admin/merchant-list.html",
                        controller: "MerchantListCtrl",
                        controllerAs: "ml"
                    }
                }
            }).state('admin_merchant.edit', {
                url: "/admin/merchant/edit/:id",
                views: {
                    "@": {
                        templateUrl: "admin/merchant-create.html",
                        controller: "MerchantCreateCtrl",
                        controllerAs: "mcr"
                    }
                },
                resolve: {
                    merchant: function($timeout, $q, Merchant, $stateParams) {
                        if ($stateParams.id) {
                            return Merchant.get($stateParams.id).then(function(response) {
                                if (!response.data.error) {
                                    return response.data;
                                }
                                return false;
                            }).catch(function(error) {
                                return false;
                            });
                        } else {
                            return $q.when(false);
                        }
                    }
                }
            }).state('admin_merchant.new', {
                url: "/admin/merchant/new",
                views: {
                    "@": {
                        templateUrl: "admin/merchant-create.html",
                        controller: "MerchantCreateCtrl",
                        controllerAs: "mcr"
                    }
                },
                resolve: {
                    merchant: function($timeout, $q, Merchant, $stateParams) {
                        return $q.when("");
                    }
                }
            });
    }
})(angular);