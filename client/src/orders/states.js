
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
                        controller: "myOrderCtrl"
                    }
                },
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
            });
    }
})(angular);