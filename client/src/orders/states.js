
;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('order', {
                abstract: true
            })
            .state('order.myorder', {
            	url: "/myorder",
                views: {
                    "@": {
                        templateUrl: "orders/myorder.html",
                        controller: "MyOrderCtrl",
                        controllerAs: "olc"
                    }
                },
                params: { status: [1,2,3,4]},
                resolve: {
                    authentication: function (AuthService, $q, $timeout) {
                        var deferred = $q.defer();
                        
                        var handler = $timeout(function() {
                            var auth = AuthService.isAuthenticated();
                            if (auth) {
                                deferred.resolve(true);
                            } else {
                                deferred.reject(true);
                            }
                            $timeout.cancel(handler);
                        }, 0);
                        
                        return deferred.promise;
                    }
                }
            })
            .state('order.thankyou', {
                url: "/order/thankyou/:time",
                views: {
                    "@": {
                        templateUrl: "orders/thankyou.html",
                        controller: "ThankyouCtrl",
                        controllerAs: "tuc"
                    }
                }
            })
            .state('order.summary', {
                url: "/order-summary/:orderId",
                views: {
                    "@": {
                        templateUrl: "orders/order-summary.html",
                        controller: "OrderSummaryCtrl",
                        controllerAs: "osc"
                    }
                },
                resolve: {
                    orderdetails: function($stateParams, OrderService) {
                        if ($stateParams.orderId) {
                            return OrderService.getById($stateParams.orderId).then(function(response) {
                                if (!response.data.error) {
                                    return response.data.data;
                                }
                                return false;
                            });
                        }
                        return false;
                    }
                }
            });
    }
})(angular);