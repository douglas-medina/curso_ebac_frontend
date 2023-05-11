module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: { //para ambiente de desenvolvimento
                files: {
                    'dev/styles/main.css': 'src/styles/main.less' //arquivo final : arquivo de origem
                }
            },
            production: { //para ambiente de produção comprimido (site em si)
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less'); //compacta o less
    grunt.loadNpmTasks('grunt-contrib-uglify');  //comprime js
    
    grunt.registerTask('default', ['less:development', 'uglify']);
    grunt.registerTask('build', ['less:production', 'uglify']);
}
