var config = require('./build/build.config.js'),
        _ = require('lodash'),
        path = require('path'),
        pkg = require('./package.json'),
        gulp = require('gulp'),
        gutil = require('gulp-util'),
        sass = require('gulp-sass'),
        minifycss = require('gulp-minify-css'),
        prefix = require('gulp-autoprefixer'),
        clean = require('gulp-clean'),
        concat = require('gulp-concat'),
        html2js = require('gulp-html2js'),
        ngHtml2Js = require('gulp-ng-html2js'),
        template = require('gulp-template'),
        ngmin = require('gulp-ngmin'),
        htmlmin = require('gulp-htmlmin'),
        uglify = require('gulp-uglify'),
        rev = require('gulp-rev'),
        header = require('gulp-header'),
        footer = require('gulp-footer'),
        inject = require('gulp-inject'),
        tap  = require('gulp-tap'),
        debug = require('gulp-debug'),
        nodemon = require('gulp-nodemon'),
        flatten = require('gulp-flatten'),
        sourcemaps = require('gulp-sourcemaps'),
        bump = require('gulp-bump'),
        livereload = require('gulp-livereload');


gulp.task('default',['buildjs','buildcss','buildfonts','buildimg','buildhtml2js','buildindex','open']);

gulp.task('clean',function(){
    return gulp.src(config.buildDir +'/', {read:false})
          .pipe(clean({force:true}));
});

gulp.task('buildjs',function() {
    gulp.src(config.clientFiles.js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.buildDir + '/js'));
    return gulp.src(config.vendorFiles.js)
          .pipe(concat('vendor.js'))
          .pipe(gulp.dest(config.buildDir + '/js'));
});

gulp.task('buildcss',function(){    
     gulp.src(config.vendorFiles.css)
          .pipe(concat('vendor.css'))
          .pipe(gulp.dest(config.buildDir + '/css'));
     return     gulp.src(config.clientFiles.css)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.buildDir + '/css'));
});

gulp.task('buildfonts',function(){
     gulp.src(config.clientFiles.fonts)
          .pipe(gulp.dest(config.buildDir + '/fonts'));
    return gulp.src(config.vendorFiles.fonts)
          .pipe(gulp.dest(config.buildDir + '/fonts'));
});

gulp.task('buildimg',function(){
    return gulp.src(config.clientFiles.images)
          .pipe(gulp.dest(config.buildDir + '/img'));
});


gulp.task('buildhtml2js', function() {
 return gulp.src(config.clientFiles.templates)
        .pipe(html2js({
          outputModuleName: 'litewait',
          useStrict: true
        }))
        .pipe(concat('partials.js'))
        .pipe(gulp.dest(config.buildDir + '/js'));
})


gulp.task('buildindex', function(){
    var options = [
       config.buildDir +'/css/vendor.css', 
       config.buildDir +'/css/app.css',
       config.buildDir +'/js/vendor.js', 
       config.buildDir + '/js/partials.js',
       config.buildDir +'/js/app.js'      
    ];

    var destination = config.buildDir;

    var ignorepath = ['/'+config.buildDir,'/'+config.distDir]
    var indexfile  = config.clientFiles.index;
    var target = gulp.src(indexfile);
    var source = gulp.src(options,{read:false});

    return target.pipe(inject(source,{read:false}))
        .pipe(gulp.dest(destination));

    // return gulp.src(options,{read:false})
    //            .pipe(inject(indexfile,{ ignorePath: ignorepath}))
    //             .pipe(tap(function(file) {
    //             file.path = path.join(file.base, path.basename(indexFile))
    //             }))
    //             .pipe(gulp.dest(destination));
});

gulp.task('open', ['server'], function(){
    dist = false;
    var folder = dist ? config.distDir : config.buildDir,
        indexFile = folder + "/index.html",
        port = config.express.port || 80,
        open = require('gulp-open');
        //console.log(indexexFile);
        var options = {
        uri : 'http://' + config.express.hostname + ':' + port,
        app: 'chrome'
    };

    // A file must be specified as the src when running options.url or gulp will overlook the task.
    setTimeout(function(){
        return gulp.src(indexFile)
            .pipe(open(options));
    }, 3000);
});

gulp.task('server',function() {   
    var flags = false ? '--production' : '--debug';
    return nodemon({ script: 'server/app.js', options: flags });
    // .on('restart', ['lint'])
});