'use strict';
var gulp = require('gulp');

gulp.task('bundle', function(cb) {

    var Builder = require('systemjs-builder');
    var builder = new Builder();
    var inputPath = './app/js/app.module.js';
    var outputFile = 'dist/build.js';
    var outputOptions = {sourceMaps: true};

    builder.loadConfig('config.js').then(function(){

        //builder.baseURL = './';
        console.log(builder);
        builder.buildStatic(inputPath, outputFile, outputOptions).then(function() {
            cb();
        });
    })



    //builder.loadConfig(`${path.root}/jspm.conf.js`)
    //    .then(() => {
    //    builder.buildStatic(inputPath, outputFile, outputOptions)
    //    .then(() => cb())
    //.catch((ex) => cb(new Error(ex)));
    //});
});