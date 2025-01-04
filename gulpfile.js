// Importação dos módulos necessários
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Caminhos das pastas
const paths = {
    styles: {
        src: './source/styles/**/*.scss',
        dest: './build/styles'
    },
    scripts: {
        src: './source/scripts/**/*.js',
        dest: './build/scripts'
    },
    images: {
        src: './source/images/**/*.{jpg,jpeg,png,gif}',
        dest: './build/images'
    }
};

// Compilar SASS com sourcemaps
function compilaSass() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init()) // Inicializa o sourcemap
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Compila o SASS e comprime
        .pipe(sourcemaps.write('./maps')) // Escreve o sourcemap
        .pipe(gulp.dest(paths.styles.dest)); // Salva na pasta destino
}

// Comprimir imagens
function comprimeImagens() {
    return gulp.src(paths.images.src)
        .pipe(imagemin()) // Comprime as imagens
        .pipe(gulp.dest(paths.images.dest)); // Salva as imagens na pasta destino
}

// Comprimir JavaScript
function comprimeJavaScript() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify()) // Minifica o JavaScript
        .pipe(gulp.dest(paths.scripts.dest)); // Salva na pasta destino
}

// Tarefa padrão que executa todas as tarefas
function tarefaPadrao(callback) {
    console.log("Executando todas as tarefas com Gulp!");
    callback();
}

// Exportar tarefas
exports.styles = compilaSass;
exports.images = comprimeImagens;
exports.scripts = comprimeJavaScript;
exports.default = gulp.series(tarefaPadrao, gulp.parallel(compilaSass, comprimeImagens, comprimeJavaScript));
