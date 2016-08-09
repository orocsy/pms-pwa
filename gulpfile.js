/**
 * Created by seancai on 8/8/16.
 */
'use strict';
var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('default',['generate-service-worker','webserver'],function () {
    console.log('server started at 3400');
});
gulp.task('generate-service-worker', function(callback) {
    var path = require('path');
    var swPrecache = require('sw-precache');
    var rootDir = 'app';
//'/**/*.{js,html,css}', rootDir + '/images/**.*'
    swPrecache.write(path.join(rootDir, '/service-worker.js'), {
        staticFileGlobs:[rootDir + '/**/*.{js,css,html,png,jpg}'],
        stripPrefix: rootDir
    }, callback);
});

gulp.task('webserver', function() {
    gulp.src('/app')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            port:3400
        }));
});