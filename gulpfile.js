// importação gulp
const gulp = require('gulp');
// importação comprimir sass
const sass = require('gulp-sass')(require('sass'));
// importação comprimir js
const uglify = require('gulp-uglify');
// importação comprimir imagens @7.1.0
const imagemin = ('gulp-imagemin');
// importação sourcemap
const sourcemaps = require('gulp-sourcemaps');

// função para comprimir sass
function comprimeSass() {
    return gulp.src('./local_do_projeto/source/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./local_do_projeto/build/styles'))
}

// função para comprimir imagens
function comprimeImagens() {
    return gulp.src('./local_do_projeto/source/images')
        .pipe(imagesmin())
        .pipe(gulp.dest('./local_do_projeto/build/images'))
}

// função para comprimir js
// caso queira esconder o conteúdo, adicionar .pipe(obfuscate()) após o .pipe(uglify())
function comprimeJS() {
    return gulp.src('./local_do_projeto/source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./local_do_projeto/build/scripts'))
}

// exportação das funções
exports.default = function() {
    gulp.watch('./local_do_projeto/source/styles/*.scss', { ignoreInitial: false }, gulp.series(comprimeSass));
    gulp.watch('./local_do_projeto/source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJS));
    gulp.watch('./local_do_projeto/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}