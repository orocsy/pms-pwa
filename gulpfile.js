/**
 * Created by seancai on 8/8/16.
 */
'use strict';
var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('default',['generate-service-worker','webserver'],function () {
});
gulp.task('generate-service-worker', function(callback) {
    var path = require('path');
    var swPrecache = require('sw-precache');
    var rootDir = 'app';
    var url = new RegExp('https:\/\/demo0434460.mockable.io\/');
//'/**/*.{js,html,css}', rootDir + '/images/**.*'
    swPrecache.write(path.join(rootDir, '/service-worker.js'), {
        staticFileGlobs:[rootDir + '/**/*.{js,css,html,png,jpg,eot,svg,ttf,woff,woff2}'],
        stripPrefix: rootDir,
        runtimeCaching:[
            {
                urlPattern:url,
                handler:'cacheFirst',
                options:{
                    cache:{
                        name:'dynamic1',
                        maxEntries:4
                    }
                }
            }
        ]
    }, callback);
});

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload:true,
            directoryListing:false,
            port:3400
        }));
});