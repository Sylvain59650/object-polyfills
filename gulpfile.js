const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");


gulp.task("object-polyfills.min.js", () => {
  return gulp.src([
      "sources/*.js"
    ])
    .pipe(concat("object-polyfills.min.js"))
    .pipe(uglify())
    .on("error", function(err) { console.error(err.toString()); })
    .pipe(gulp.dest("./distrib"))
});

gulp.task("default", ["object-polyfills.min.js"]);


gulp.task("all", ["default"]);