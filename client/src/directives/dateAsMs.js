
;(function() {
  'use strict';

  function dateAsMs() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ngModelCtrl) {
        ngModelCtrl.$parsers.push(function(value){
          if (value && value.getTime) {
            return value.getTime();
          } else {
            return value;
          }
        });
      }
    };
  }

  angular.module('litewait.directives').directive("dateAsMs", dateAsMs);

})();
