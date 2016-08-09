/**
 * Created by seancai on 8/8/16.
 */
'use strict';
var gulp = require('gulp');
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