/**
 * 
 */
(function () {
    "use strict";
    var app = angular.module('litewait');

    var apiBase = 'http://fierce-scrubland-5738.herokuapp.com/v1.0/rest';

    app.value('RouteConfig', {
        base: '/',
        apiBase: apiBase,
        properties: {
            all: ''
        }
    });

    app.run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (_0, _1, _2, _3, _4, error) {
            if (error) {
                $state.go('home');
            }
        });
    });

    app.config(function ($httpProvider) {
      $httpProvider.useApplyAsync(true);
    });

})();
