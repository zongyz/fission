var gulp = require('gulp'),
  	sass = require('gulp-sass'),
  	rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    html2js = require('gulp-html2js'),
    iconfont = require('gulp-iconfont'),
    browserSync = require('browser-sync');

var options = {
		buildPath : './build',
		tmpPath : './.tmp'
	};

gulp.task('scss:dev', function(){
	var task = function(){
		// gulp.src('src/scss/!(_)*.scss')
    gulp.src('src/fission.scss')
			.pipe(sass.sync().on('error', sass.logError))
			.pipe(gulp.dest('dist'));
	}
	gulp.watch(['src/scss/**/*.scss'], task);
	task();
});

gulp.task('demo:dev', function(){
  var scssTask = function(){
    gulp.src('demo/demo.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('demo'));
  }
  gulp.watch(['demo/**/*.scss'], scssTask);
  scssTask();

  var htmlTask = function(){
    gulp.src('demo/template/*.html')
      .pipe(html2js({
        outputModuleName: 'demoTemplate',
        useStrict: true,
        rename : function(moduleName){
          if (moduleName.indexOf('demo/template/') == 0) {
            return moduleName.replace('demo/template/', '');
          }
        }
      }))
      .pipe(concat('demo-tpl.js'))
      .pipe(gulp.dest('./demo'))
  }
  gulp.watch(['demo/template/*.html'], htmlTask);
  htmlTask();
});

gulp.task('develop', function(){
	gulp.start('scss:dev', "demo:dev");

  browserSync({
      files: ["dist/**", "demo/*", "!demo/**.scss", "tmp/**"],
      server: {
          baseDir: "./",
          // directory : true
      },
      startPath : '/demo'
  });
});

gulp.task('build', function(){

});

gulp.task('default', function(){
	gulp.start('develop');
});



//--------------- iconfont test

gulp.task('iconfont', function(){
  gulp.src('src/svg/*.svg')
  .pipe(iconfont({
    fontName : 'myfont',
    appendUnicode: true,
    formats: ['ttf', 'eot', 'woff', 'svg']
  }))
  .on('glyphs', function(glyphs, options){
    console.log(glyphs, options);
  })
  .pipe(gulp.dest('.tmp/iconfont'));
});

