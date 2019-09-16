module.exports = function(grunt) {
    grunt.initConfig({
      compass: {                  // Task
        dist: {                   // Target
          options: {              // Target options
            sassDir: 'src/assets/style',
            cssDir: 'public/assets/style',
            environment: 'production'
          }
        },
      },
      watch: {
        options: {
          livereload: true,
        },
        css: {
          files: ['src/assets/style/*.scss'],
          tasks: ['compass'],
        },
      },
    });
    //grunt.loadNpmTasks('grunt-contrib-compass');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    [
      'grunt-contrib-compass',
      'grunt-contrib-watch'
    ].forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['compass']);
  };
  
  