
;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('home', {
            	url: "",
                views: {
                    "@": {
                        templateUrl: "home/home.html",
                        controller: "homeCtrl"
                    }
                }
            });
    }
})(angular);