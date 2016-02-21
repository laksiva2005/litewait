/**
 *
 */
 ;(function() {
 	'use strict';

	angular.module('litewait.directives')
    .directive('datepickerPopup', datepickerPopup);

    function datepickerPopup() {

        return {
            restrict: 'EA',
            require: 'ngModel',
            link: function(scope, element, attr, controller) {
              controller.$formatters.shift();
            }
        };
    }
 })();

