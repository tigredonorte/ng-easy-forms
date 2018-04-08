const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');

var push_description = 'inline angularX templates preparing them to build';
gulp.task('inline-build-templates', push_description, () => {
  return gulp
    .src(['./src/app/lib/**/*.ts', '!./src/app/lib/**/**.spec.ts'])
    .pipe(
      inlineNg2Template({
        target: 'es5',
        useRelativePaths: true
      })
    )
    .pipe(gulp.dest('./build'));
});
