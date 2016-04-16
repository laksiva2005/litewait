/**
 *
 */
;(function(angular){

    'use strict';
    var USER_KEY = 'USER:KEY';
    angular.module('litewait.services')
        .constant('MSG', {
            addCategorySuccess: 'Category has been added successfully',
            addCategoryFailed: 'Adding Category failed',
            updateCategorySuccess: 'Category has been updated successfully',
            updateCategoryFailed: 'Update category has been failed',
            deleteCategorySuccess: 'Category has been deleted successfully',
            deleteCategoryFailed: 'Category delete has been failed',
            addMenuSuccess: 'Menu has been added successfully',
            addMenuFailed: 'Adding Menu failed',
            updateMenuSuccess: 'Menu has been updated successfully',
            updateMenuFailed: 'Update menu has been failed',
            deleteMenuSuccess: 'Menu has been deleted successfully',
            deleteMenuFailed: 'Menu delete has been failed',
            changeStatusSuccess: 'Order status has been changed successfully',
            changeStatusFailed: 'Order status change has been failed'
        })
        .constant('AUTH_EVENTS', {
            loginSuccess: 'auth:login-success',
            loginFailed: 'auth:login-failed',
            logoutSuccess: 'auth:logout-success',
            logoutFailed: 'auth:logout-failed',
            sessionTimeout: 'auth:session-timeout',
            notAuthenticated: 'auth:not-authenticated',
            notAuthorized: 'auth:not-authorized'
        })
        .constant('AUTH_MSG', {
            loginSuccess: 'User logged in successfully',
            loginFailed: 'Invalid attempt, please check email/password',
            logoutSuccess: 'You have been logged out successfully',
            logoutFailed: 'Logout failed',
            registerSuccess: 'Registration success',
            registerFailed: 'Registration failed',
            profileUpdateSuccess: 'Profile has been successfully updated',
            profileUpdateFailed: 'Profile update has been failed',
            paymentUpdateSuccess: 'Payment has been successfully updated',
            paymentUpdateFailed: 'Payment update has been failed',
            chPwdSuccess: 'Password has been changed successfully',
            chPwdFailed: 'Password change has been failed',
            resetSuccess: 'Password has been reseted successfully',
            resetFailed: 'Password reset has been failed'
        })
        .constant('AUTH_PROPS', {
            'PASSWORD_PATTERN': "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}",
            'CARD': '^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$',
            'CVV': '^[0-9]{3,4}$'
        })
        .factory('User', User)
        .config(config)
        .factory('AuthInterceptor', AuthInterceptor)
        .provider('AuthService', AuthService);

    User.$inject = ['$http', 'RouteConfig', '$q', 'AUTH_MSG', 'toaster', 'session'];
    config.$inject = ['$httpProvider'];
    AuthInterceptor.$inject = ['$rootScope', '$q', 'AUTH_EVENTS'];

    function User ($http, RouteConfig, $q, AUTH_MSG, toaster, session) {

        var urlBase = RouteConfig.apiBase;
        var sessionUser = {
            id: 0,
            isLoggedIn: false,
            username: '',
            email: '',
            role: null,
            name: 'User',
            data: {}
        };

        sessionUser.updateProfile = function (data) {
            var deferred = $q.defer();
            return $http.put(urlBase + '/user', data).success(function(response) {
                return deferred.resolve(response);
            }).error(function(error) {
                toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: AUTH_MSG.profileUpdateFailed, 
                    toasterId: 1
                });
                deferred.reject();
            });
        };

        sessionUser.updatePayment = function (data) {
            var deferred = $q.defer();
            return $http.post(urlBase + '/payment', data).success(function(response) {
                return deferred.resolve(response);
            }).error(function(error) {
                toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: AUTH_MSG.paymentUpdateFailed, 
                    toasterId: 1
                });
                deferred.reject();
            });
        };

        sessionUser.changePassword = function (data) {
            return $http.put(urlBase + '/passhash', data).then(function(response) {
                return response;
            }, function(error) {
                toaster.pop({
                    type: 'error', 
                    title:'Error', 
                    body: AUTH_MSG.chPwdFailed, 
                    toasterId: 1
                });
            });
        };

        sessionUser.resetPassword = function (data) {
            return $http.post(urlBase + '/forgotpassword', data).then(function(response) {
                return response;
            });
        };

        sessionUser.verifyUser = function (code) {
            return $http.put(urlBase + '/verifyuser?activation_code=' + code);
        };


        sessionUser.assign = function(user) {
            if (user) {
                var data = {};
                data.isLoggedIn = true;
                data.id = user.contact.mail_id;
                data.username = user.user;
                data.email = user.contact.mail_id;
                data.role = user.user_type;
                data.name = user.username;
                data.data = user;
                
                angular.extend(sessionUser, data);
                sessionUser.resetUser(sessionUser.data);
            } else {
                sessionUser.resetUser(null);
                sessionUser.clear();
            }
        };

        sessionUser.resetUser = function(data) {
            if (data) {
                session.setItem(USER_KEY, data);
            } else {
                session.removeItem(USER_KEY);
            }
        };

        sessionUser.clear = function() {
            sessionUser.id = 0;
            sessionUser.name = 'User';
            sessionUser.role = '';
            sessionUser.username = '';
            sessionUser.email = '';
            sessionUser.isLoggedIn = false;
            sessionUser.data = {};
            sessionUser.resetUser(null);
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
            '$q', '$rootScope', '$http', 'User', 'RouteConfig', 'AUTH_EVENTS', 'AUTH_MSG', '$auth', 'toaster', 'session',

            function($q, $rootScope, $http, User, RouteConfig, AUTH_EVENTS, AUTH_MSG, $auth, toaster, session) {

                var TOKEN_KEY = 'AUTH:TOKEN';
                var USER_KEY = 'USER:KEY';

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
                    var a = session.getItem(TOKEN_KEY);
                    return session.getItem(TOKEN_KEY);
                };

                var getUser = function() {
                    return session.getItem(USER_KEY);
                };

                var reloadUser = function(token) {
                    var deferred = $q.defer(),
                        authUrl = getUrl(WHOAMI_ENDPOINT);

                    var userVal = getUser();
                    User.assign(userVal);
                    var data = {};
                    deferred.resolve(User);

                    /*                    
                    $http({
                        method: 'GET',
                        url: authUrl,
                        data: data
                    }).success(function(data) {
                       // data.isLoggedIn = true;
                       // User.assign(data);
                       // setToken(token);
                        deferred.resolve(User);
                    }).error(function(reason) {
                        // clear user, clear token
                       // setToken(null);
                        //User.clear();
                        //deferred.reject(reason);
                        deferred.resolve(User);
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
                        var params = user ? user : {},
                            endpoint = getUrl(REGISTER_ENDPOINT);

                        return $http.post(endpoint, params);
                    },
                    authenticate: function (provider, data) {
                        switch(provider) {
                            case 'litewait':
                                return service.login(data);
                                break;
                            case 'facebook':    
                                return service.facebookLogin(data);
                                break;
                            case 'google':
                                return service.googleLogin(data);    
                                break;
                        }
                    },
                    facebookLogin: function (data) {
                        var params = {
                            provider: 'facebook',
                            user_type: data.user_type
                        };

                        return $auth.authenticate(provider).then(function(response) {
                            console.log(response);
                            params.code = response.access_token;
                            params.expiresIn = response.expires_in;
                            return service.login(params);
                        }, function (error) {
                            console.log('facebook failed');
                            setToken(null);
                            User.clear();
                            raise(AUTH_EVENTS.loginFailure, params);
                        });
                    },
                    googleLogin: function (data) {
                        var params = {
                            provider: 'google',
                            user_type: data.user_type
                        };

                        return $auth.authenticate(provider).then(function(response) {
                            console.log(response);
                            params.code = response.access_token;
                            params.expiresIn = response.expires_in;
                            return service.login(params);
                        }, function (error) {
                            console.log('google failed');
                            setToken(null);
                            User.clear();
                            raise(AUTH_EVENTS.loginFailure, params);
                        });
                    },
                    login: function(data) {
                        var authUrl = getUrl(AUTH_ENDPOINT),
                            deferred = $q.defer(),
                            params = {
                                provider: 'litewait',
                                user: data.username,
                                user_password: data.password,
                                user_type: data.user_type
                            };

                        return $http({
                            method: 'POST',
                            url: authUrl,
                            data: params
                        }).success(function(response, status, headers) {
                            if (!response.error) {
                                response.data.user_type = params.user_type;
                                User.assign(response.data);
                                setToken(response.data.user_session || response.data.merchant_session);
                                raise(AUTH_EVENTS.loginSuccess, User);
                                deferred.resolve(User);
                            } else {
                                setToken(null);
                                User.clear();
                                raise(AUTH_EVENTS.loginFailure, params);
                                deferred.reject();
                            }
                        }).error(function(reason) {
                            setToken(null);
                            User.clear();
                            raise(AUTH_EVENTS.loginFailure, params);
                            deferred.reject(reason);
                        });
                    },
                    logout: function() {
                        var endpoint = getUrl(LOGOUT_ENDPOINT);
                        var deferred = $q.defer();

                        var saveUser = _.clone(User);
                        
                        return $http.get(endpoint + '?user_type=' + User.role).success(function(response) {
                            if (!response.error) {
                                
                                setToken(null);
                                User.clear();
                                session.clear();
                                raise(AUTH_EVENTS.logoutSuccess, saveUser);
                                toaster.pop({
                                    type: 'success', 
                                    title:'Success', 
                                    body: AUTH_MSG.logoutSuccess, 
                                    toasterId: 1
                                });
                                return deferred.resolve(response);
                            } else {
                                raise(AUTH_EVENTS.logoutFailed, saveUser);
                                toaster.pop({
                                    type: 'error', 
                                    title:'Error', 
                                    body: AUTH_MSG.logoutFailed, 
                                    toasterId: 1
                                });
                                return deferred.reject(response);
                            }
                        });
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