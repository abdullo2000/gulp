global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    sass: require('gulp-sass')(require('sass')),

    path: {
        serverDir: './app/build',
        tasks: require('./gulp/config'),
        src: {
            html: './app/src/*.html',
            style: './app/src/style/*.*',
            js: './app/src/script/*.js'
        },
        build: {
            html: './app/build',
            style: './app/build/style',
            js: './app/build/script'
        },
        watch: {
            html: ['./app/src/*.html', './app/src/view/*.html'],
            style: './app/src/style/*.*',
            js: './app/src/script/*.js'
        }
    },
    tasks: {
        default: ['html', 'serve', 'watch', 'style', 'js'],
        build: ['html', 'style', 'js']
    }

}
$.path.tasks.forEach(tasPath => require(tasPath)())

for (const key in $.tasks) {
    
    $.gulp.task(key, $.gulp.series($.gulp.parallel(...$.tasks[key])))
}


