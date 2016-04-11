;(function(angular){
	'use strict';	

	angular.module('litewait.services', []);
	angular.module('litewait.directives', ['ngMessages', 'ngTagsInput']);
	angular.module('litewait.ui', ['ui.bootstrap', 'litewait.directives', 'cgBusy', 'toaster', 'infinite-scroll', 'satellizer']);
	angular.module('litewait', ['ui.router', 'litewait.services', 'litewait.ui']);

})(angular);
