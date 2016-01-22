/*
 *
 */
;(function (angular) {
    'use strict';

    function compareTo() {
        return {
            restrict: 'A',
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {
                 
                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.otherModelValue;
                };
     
                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };
    }
     
    angular.module('litewait.directives').directive("compareTo", compareTo);

})(angular);
