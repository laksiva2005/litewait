/**
 * created by kanagu on 11/05/2015
 */
;(function (angular) {
  'use strict';

  var SPINING_EVENTS = {
    'SPINING': 'http-request-loading'
  };

  function Spinner($q) {
    return {
      spinner: {
        promise: $q.when([]),
        message: 'System is loading, please wait.',
        backdrop: true,
        templateUrl: 'html/spinner.html',
        delay: 1000,
        wrapperClass: ''
      },
      spining: function (data) {
        this.spinner.promise = data.promise || $q.when([]);
      }
    };
  }

  function SpinnerConfig($provide, LOADING_EVENTS) {
    function HttpEvents() {
      EventEmitter2.call(this);
    }

    HttpEvents.prototype = Object.create(EventEmitter2.prototype);

    HttpEvents.prototype.requestInitiated = function (data) {
      this.emit(SPINING_EVENTS.SPINING, data);
    };

    var httpEvent = new HttpEvents();
    $provide.value('HTTPEvent', httpEvent);

    $provide.decorator('$http', function ($delegate) {

      var $http = $delegate;
      var wrapper = function () {
        return $http.apply($http, arguments);
      };

      Object.keys($http).filter(function (key) {
        return (typeof $http[key] !== 'function');
      }).forEach(function (key) {
        wrapper[key] = $http[key];
      });

      Object.keys($http).filter(function (key) {
        return (typeof $http[key] === 'function');
      }).forEach(function (key) {
        wrapper[key] = function () {
          var promise = $http[key].apply($http, arguments);
          var request = arguments[1] || {};
          var data = {
            request: request,
            promise: promise
          };

          httpEvent.requestInitiated(data);
          return promise;
        };
      });

      return wrapper;
    });
  }

  Spinner.$inject = ['$q'];
  SpinnerConfig.$inject = ['$provide', 'SPINING_EVENTS'];

  angular.module('litewait').factory('Spinner', Spinner)
    .constant('SPINING_EVENTS', SPINING_EVENTS)
    .config(SpinnerConfig);

})(angular);
