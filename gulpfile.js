const { series, watch, src, dest } = require("gulp")
const browserSync = require("browser-sync").create()
const webpack = require("webpack-stream")

//move html
function copyHTML() {
  return src("src/*.html").pipe(dest("dist"))
}
//compile js using webpack
function jsCompile() {
  return src("src/js/*")
    .pipe(
      webpack({
        mode: "production",
        devtool: "source-map",
        output: {
          filename: "script.js",
        },
      })
    )
    .pipe(dest("dist/js"))
    .pipe(browserSync.stream())
}
//watch changes

function startWatch() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  })
  watch("src/*.html", copyHTML).on("change", browserSync.reload)
  watch("src/js/*", jsCompile)
}
// default task
exports.default = series(copyHTML, jsCompile, startWatch)
