
;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('search', {
                abstract: true
            })
            .state('search.restaurant', {
            	url: "/serach",
                views: {
                    "search-box@search": {
                      templateUrl: 'navigation/search-box.html',
                      controller: "SearchBoxCtrl"
                    },
                    "@": {
                        templateUrl: "search/search.html",
                        controller: "SearchCtrl"
                    }
                },
                params: {location: '', keyword: ''},
                resolve: {
                    search: function ($q, $timeout) {
                        var deferred = $q.defer();
                        
                        var handler = $timeout(function() {
                            deferred.resolve('search');
                            $timeout.cancel(handler);
                        }, 0);
                        
                        return deferred.promise;
                    }
                }
            });
    }
})(angular);