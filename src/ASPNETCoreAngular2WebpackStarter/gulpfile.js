var gulp = require('gulp');

gulp.task('default', function (done) {
    gulp.src("./i18n/*").pipe(gulp.dest('./wwwroot/i18n'));
});
