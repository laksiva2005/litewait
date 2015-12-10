'use strict';

module.exports = {
	serverDir: 'server',
	buildDir: 'build/tmp',
	distDir: 'build/dist',
	express: {
		port: 3000,
		livereload: 35729,
		hostname: 'localhost'
	},
	clientFiles: {
		js: ['client/assets/js/*.js', 'client/app.js', 'client/src/**/*.js'],
		assetJs: 'client/assets/js/**/*.js',
		images: ['client/assets/img/**'],
		assets: ['client/assets/**'],
        fonts: ['client/assets/fonts/**'],		
        templates: ['client/src/**/*.html'],
        css: ['client/assets/css/**/*.css'],
        sass: ['client/assets/sass/**/*.scss'],
		html: 'client/index.html',
        index: 'client/index.html'
    	},
	vendorFiles: {
		js: [
   			 'client/vendor/jquery/dist/jquery.js',
             'client/vendor/jquery-ui/ui/jquery-ui.js',
             'client/vendor/angular/angular.js',             
             'client/vendor/angular-animate/angular-animate.js',
             'client/vendor/AngularJS-Toaster/toaster.js',
             'client/vendor/lodash/lodash.js',
             'client/vendor/moment/moment.js',
             'client/vendor/moment-timezone/builds/moment-timezone-with-data-2010-2020.js',
             'client/vendor/sass-bootstrap/dist/js/bootstrap.js',
             'client/vendor/angular-bootstrap/ui-bootstrap.js',
             'client/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
             'client/vendor/ngInfiniteScroll/build/ng-infinite-scroll.js',
             'client/vendor/ng-tags-input/ng-tags-input.js',
             'client/vendor/angular-busy/dist/angular-busy.js',
             'client/vendor/angular-ui-router/release/angular-ui-router.js'
		],
		css: [
			'client/vendor/sass-bootstrap/dist/css/bootstrap.min.css',
            // 'client/vendor/sass-bootstrap/dist/css/bootstrap-theme.css',
            'client/vendor/font-awesome/css/font-awesome.css',
            'client/vendor/jquery-ui/themes/base/jquery-ui.css',
            'client/vendor/AngularJS-Toaster/toaster.css',
            'client/vendor/ng-tags-input/ng-tags-input.css',
            'client/vendor/angular-busy/dist/angular-busy.css'
		],
		fonts: [
 			'client/vendor/sass-bootstrap/dist/fonts/**',
            'client/vendor/font-awesome/fonts/**'
		]
	}
};