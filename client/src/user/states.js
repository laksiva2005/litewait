
;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('user', {
                abstract: true
            })
            .state('user.profile', {
            	url: "/profile",
                views: {
                    "@": {
                        templateUrl: "user/profile.html",
                        controller: "ProfileCtrl"
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
            }).state('user.chpwd', {
                url: "/change-password",
                views: {
                    "@": {
                        templateUrl: "user/ch-pwd.html",
                        controller: "ChpwdCtrl"
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