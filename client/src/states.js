
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
                      controllerAs: "vm"
                    },
                    "@": {
                        templateUrl: "home/home.html",
                        controller: "HomeCtrl",
                        controllerAs: "vm"
                    }
                },
                params: { location: '', keyword: '' },
                resolve: {
                    search: function ($q, $timeout) {
                        var deferred = $q.defer();
                        
                        var handler = $timeout(function() {
                            deferred.resolve('home');
                            $timeout.cancel(handler);
                        }, 0);
                        
                        return deferred.promise;
                    }
                }
            });
    }
})(angular);