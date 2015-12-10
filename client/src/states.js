'use strict';

angular.module('litewait')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home/home.html"
            });
    });
