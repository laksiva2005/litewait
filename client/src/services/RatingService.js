/*
*
*/
;(function() {
    'use strict';
    angular.module('litewait.services').factory('RatingService', RatingService);

    RatingService.$inject = ['RouteConfig', '$http'];

    function RatingService(RouteConfig, $http) {
        var apiBase = RouteConfig.apiBase;
        var service = {};

        service.add = add;

        function add(data) {
            var url = apiBase + '/ratingfeedback';
            return $http.post(url, data);
        }

        return service;
    }
})();
