var gulp       = require('gulp'), // Подключаем Gulp
		browserSync  = require('browser-sync'); // Подключаем Browser Sync

	gulp.task('browser-sync', function() { 
		browserSync({ 
			proxy: 'verstka1',
			notify: false 
		});
	});
	 	 
	gulp.task('code', function() {
		return gulp.src('app/*.html')
		.pipe(browserSync.reload({ stream: true }))
	});

	gulp.task('css', function() {
		return gulp.src('app/css/*.css')
		.pipe(browserSync.reload({ stream: true }))
	});
	 	 
	gulp.task('watch', function() {
		gulp.watch('app/css/**/*.css', gulp.parallel('css')); // Наблюдение за css файлами
		gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
	});
	gulp.task('default', gulp.parallel('browser-sync', 'watch'));