var gulp = require('gulp');
//Initialize gulp-concat module
var concat = require('gulp-concat');


//Concatenate -no strict- example
//1.Parameter : task name
//2.Parameter : define targets
gulp.task(	'scripts1', 
			function()
			{
				return 	gulp.src(['no strict.js','strict.js'])
						.pipe(concat('smooth.js'))
						.pipe(gulp.dest('./example1/'));
				
			});
			

//Concatenate -strict- example			
gulp.task(	'scripts2', 
			function()
			{
				//Sequence of the js files is changed
				return 	gulp.src(['strict.js','no strict.js'])
						.pipe(concat('tough.js'))
						.pipe(gulp.dest('./example2/'));
				
			});