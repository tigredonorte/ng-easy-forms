"use strict";
function loadProcess(){
  if(typeof process === 'undefined'){
    require('dotenv').config({path: 'gulp/.env'});
    if(typeof process === 'undefined'){var process = {};}
  }
}
var gulp = require('gulp-help')(require('gulp'));
var readConfig = require('read-config');
var requireDir = require('require-dir');
loadProcess();
var tasks = requireDir('./gulp');
gulp.task('default', ['help']);
