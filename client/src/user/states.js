
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
                        controller: "ProfileCtrl",
                        controllerAs: "vm"
                    }
                },
                resolve: {
                    authentication: function (AuthService, $q, $timeout) {
                        var deferred = $q.defer();
                        
                        var handler = $timeout(function() {
                            var auth = true;//AuthService.isAuthenticated();
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
            }).state('user.verify', {
                url: "/verify/:code",
                views: {
                    "@": {
                        templateUrl: "user/verify-email.html",
                        controller: "VerifyUserCtrl",
                        controllerAs: "vusr"
                    }
                },
                resolve: {
                    verify: function($stateParams, $q, $timeout, User) {
                        var deferred = $q.defer();
                        var code = $stateParams.code || '';
                        var handler = $timeout(function() {
                            if (code) {
                                var verified = User.verifyUser(code).then(function(response) {
                                    deferred.resolve(response.data);
                                }, function (error) {
                                    deferred.resolve({
                                        error: true, 
                                        message: 'User verification failed'
                                    });
                                });

                            } else {
                                deferred.resolve({
                                    error: true, 
                                    message: 'Could not able to verify user without verification code'
                                });
                            }

                            $timeout.cancel(handler);
                        });

                        return deferred.promise;
                    }
                }
            });
    }
})(angular);