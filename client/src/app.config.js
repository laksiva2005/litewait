/**
 * 
 */
(function () {
    "use strict";
    var app = angular.module('litewait');

    var apiBase = 'http://litewait-sandbox.herokuapp.com/v1.0/rest';

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

        //$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
            //console.log(arguments);
        //});
    });

    app.config(function ($httpProvider, $authProvider) {
        $httpProvider.useApplyAsync(true);

        $authProvider.facebook({
            name: 'facebook',
            url: '/auth/facebook',
            authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
            redirectUri: window.location.origin + '/',
            clientId: '1558123447850269',
            responseType: 'token'
        });

        $authProvider.google({
            name: 'google',
            url: '/auth/google',
            authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
            redirectUri: window.location.origin,
            clientId: '165165136801-696aje3s6hs717to99umig0j0a05oaf8.apps.googleusercontent.com',
            responseType: 'token'
        });
    });

})();
