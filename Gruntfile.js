
module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      patterns : {
        files: ['public/**/*'],
        options: {
          livereload: {
            livereload: true
          }
        }
      }
    },
    express: {
      server: {
        options: {
          port: 9000,
          bases: 'public'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/css/style.css': 'source/css/style.scss'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['express','watch']);

};
