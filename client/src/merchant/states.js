
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
                url: "/merchant/:id",
                views: {
                    "@": {
                        templateUrl: "merchant/merchant-create.html",
                        controller: "MerchantCreateCtrl",
                        controllerAs: "mcr"
                    }
                },
                resolve: {
                    merchant: function($timeout, $q, Merchant, $stateParams) {
                        var deferred = $q.defer();
                        var handle = $timeout(function() {
                            
                            Merchant.get($stateParams.id).then(function(response) {
                                deferred.resolve(response.data);
                            }, function(error) {
                                deferred.resolve({});
                            });

                            $timeout.cancel(handle);
                        }, 0);

                        return deferred.promise;
                    }
                }
            });
    }
})(angular);