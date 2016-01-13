;(function(angular){
	'use strict';	

	angular.module('litewait.services', []);
	angular.module('litewait.directives', []);
	angular.module('litewait.ui', ['ui.bootstrap', 'litewait.directives']);
	angular.module('litewait', ['ui.router', 'litewait.services', 'litewait.ui']);

})(angular);
