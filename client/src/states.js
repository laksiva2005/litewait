
;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('home', {
            	url: "",
                views: {
                    "search-box@home": {
                      templateUrl: 'navigation/search-box.html',
                      controller: "SearchBoxCtrl",
                      controllerAs: "sbc"
                    },
                    "@": {
                        templateUrl: "home/home.html",
                        controller: "HomeCtrl",
                        controllerAs: "home"
                    }
                },
                params: { location: '', keyword: '' },
                resolve: {
                    srch: function ($q, $timeout) {
                        var deferred = $q.defer();

                        var handler = $timeout(function() {
                            deferred.resolve('home');
                            $timeout.cancel(handler);
                        }, 0);

                        return deferred.promise;
                    },
                    geolocation: function ($q, Search, $timeout, Location) {
                        var loc = {};
                        var deferred = $q.defer();

                        var handler = $timeout(function() {
                            Search.getRegionByGeo().then(function(response) {
                                if (!response.data.error) {
                                    Location.status = loc.status = true;
                                    Location.data = loc.data = response.data.data;
                                    deferred.resolve(loc);
                                } else {
                                    getByIp();
                                }
                            }, function(error) {
                                getByIp();
                            });

                            function getByIp() {
                                Search.getRegionByIP().then(function(res) {
                                    if (res.length) {
                                        Location.status = loc.status = true;
                                        Location.data = loc.data = res.data.data;
                                        deferred.resolve(loc);
                                    } else {
                                        Location.status = loc.status = false;
                                        Location.data = loc.data = null;
                                        deferred.resolve(loc);
                                    }
                                }, function() {
                                    Location.status = loc.status = false;
                                    Location.data = loc.data = null;
                                    deferred.resolve(loc);
                                });
                            }

                            $timeout.cancel(handler);
                        }, 0);
                        return deferred.promise;
                    },
                    authentication: function (User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            return true;
                        }
                        if (User.isLoggedIn && User.role == 'm') {
                            var handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('merchant');
                            }, 0);
                        }
                    }
                }
            });
    }
})(angular);
