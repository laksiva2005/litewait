/**
 *
 */
;(function(angular){

    'use strict';

    angular.module('litewait.services')
        .constant('AUTH_EVENTS', {
            loginSuccess: 'auth:login-success',
            loginFailed: 'auth:login-failed',
            logoutSuccess: 'auth:logout-success',
            sessionTimeout: 'auth:session-timeout',
            notAuthenticated: 'auth:not-authenticated',
            notAuthorized: 'auth:not-authorized'
        })
        .factory('User', User)
        .config(config)
        .factory('AuthInterceptor', AuthInterceptor)
        .provider('AuthService', AuthService);

    config.$inject = ['$httpProvider'];
    AuthInterceptor.$inject = ['$rootScope', '$q', 'AUTH_EVENTS'];

    function User () {

        var sessionUser = {
            id: 0,
            isLoggedIn: false,
            username: '',
            role: null,
            name: 'User',
            data: {}
        };


        sessionUser.assign = function(user) {
            if (user) {
                angular.extend(sessionUser, user);
            } else {
                sessionUser.clear();
            }
        };

        sessionUser.clear = function() {
            sessionUser.id = 0;
            sessionUser.name = 'User';
            sessionUser.role = '';
            sessionUser.username = '';
            sessionUser.isLoggedIn = false;
            sessionUser.data = {};
        };

        return sessionUser;
    }

    function config($httpProvider) {
        $httpProvider.interceptors.push([
            '$injector',
            function($injector) {
                return $injector.get('AuthInterceptor');
            }
        ]);
    }

    function AuthInterceptor($rootScope, $q, AUTH_EVENTS) {
        return {
            responseError: function(response) {
                if (response.status === 401) {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated, response);
                }
                if (response.status === 403) {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized, response);
                }
                if (response.status === 419 || response.status === 440) {
                    $rootScope.$broadcast(AUTH_EVENTS.sessionTimeout, response);
                }
                return $q.reject(response);
            }
        };
    }

    function AuthService () {

        var API_KEY_HEADER = 'X-Auth-Token',
            AUTH_ENDPOINT = '/login',
            WHOAMI_ENDPOINT = '/auth',
            REGISTER_ENDPOINT = '/user',
            LOGOUT_ENDPOINT = '/logout';

        this.$get = [
            '$q', '$rootScope', '$http', 'User', 'RouteConfig', 'AUTH_EVENTS',

            function($q, $rootScope, $http, User, RouteConfig, AUTH_EVENTS) {

                var TOKEN_KEY = 'AUTH:TOKEN';
                var session = window.sessionStorage;

                var getUrl = function(path) {
                    return RouteConfig.apiBase + path;
                };

                var removeTokenHeader = function() {
                    if ($http.defaults.headers.common[API_KEY_HEADER]) {
                        delete $http.defaults.headers.common[API_KEY_HEADER];
                    }
                };

                var raise = function(evt, data) {
                    $rootScope.$broadcast(evt, data);
                };

                var setToken = function(token) {
                    if (token) {
                        session.setItem(TOKEN_KEY, token);
                        setTokenInHeader(token);
                    } else {
                        session.removeItem(TOKEN_KEY);
                        removeTokenHeader();
                    }
                };


                var getToken = function() {
                    return session.getItem(TOKEN_KEY);
                };

                var reloadUser = function(token) {
                    var deferred = $q.defer(),
                        authUrl = getUrl(WHOAMI_ENDPOINT);

                    var data = {};
                    deferred.resolve(User);

                    /*
                    $http({
                        method: 'GET',
                        url: authUrl,
                        data: data
                    }).success(function(data) {
                        data.isLoggedIn = true;
                        User.assign(data);
                        setToken(token);
                        deferred.resolve(User);
                    }).error(function(reason) {
                        // clear user, clear token
                        setToken(null);
                        User.clear();
                        deferred.reject(reason);
                    });
                    */
                    return deferred.promise;
                };

                var setTokenInHeader = function(token) {
                    token = token || getToken();
                    if (token) {
                        $http.defaults.headers.common[API_KEY_HEADER] = token;
                        if (!User.isLoggedIn) {
                            reloadUser(token);
                        }
                    }
                };

                // If the browser reloads, reset auth token in header if user was logged in before the reload
                setTokenInHeader();

                var service = {
                    API_KEY_HEADER: API_KEY_HEADER,
                    isAuthenticated: function() {
                        return !!service.getAuthToken();
                    },
                    register: function(user) {
                        var params = user ? {
                                params: user
                            } : {},
                            endpoint = getUrl(REGISTER_ENDPOINT);

                        return $http.post(endpoint, params).success(function(res) {
                            // Think this is wrong. We're not actually logged in
                            User.assign(res);
                            return res;
                        });
                    },
                    login: function(username, password) {
                        var authUrl = getUrl(AUTH_ENDPOINT),
                            params = {
                                user: username,
                                user_password: password
                            },
                            deferred = $q.defer();

                        var token = 'test-token';
                        var data = {
                            id: 1,
                            isLoggedIn: true,
                            username: username,
                            role: 'consumer',
                            name: 'John Doe',
                            data: {}
                        };
                            
                        User.assign(data);
                        setToken('secret token');
                        raise(AUTH_EVENTS.loginSuccess, User);
                        deferred.resolve(User);

                        return deferred.promise;

                        /*return $http({
                            method: 'POST',
                            url: authUrl,
                            data: params
                        }).success(function(data, status, headers) {
                            var token = headers(API_KEY_HEADER);
                            data.isLoggedIn = true;
                            User.assign(data);
                            setToken(token);
                            raise(AUTH_EVENTS.loginSuccess, User);
                            deferred.resolve(User);
                        }).error(function(reason) {
                            setToken(null);
                            User.clear();
                            raise(AUTH_EVENTS.loginFailure, params);
                            deferred.reject(reason);
                        });*/
                    },
                    logout: function() {
                        var endpoint = getUrl(LOGOUT_ENDPOINT);
                        var deferred = $q.defer();

                        var saveUser = _.clone(User);

                        setToken(null);
                        User.clear();
                        raise(AUTH_EVENTS.logoutSuccess, saveUser);
                        deferred.resolve(true);

                        return deferred.promise;

                        /*return $http.post(endpoint).success(function() {
                            var saveUser = _.clone(User);
                            setToken(null);
                            User.clear();
                            raise(AUTH_EVENTS.logoutSuccess, saveUser);
                            return true;
                        });*/
                    },
                    getAuthToken: function() {
                        return getToken();
                    }
                };

                return service;
            }

        ];

    }

})(angular);