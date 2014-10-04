'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     clean: {
      files: ['dist']
    },
    uglify: {
      options: {
        banner: '/* Float label by Nemanja Popovic */'
      },
      dist: {
        src: 'src/float-label.js',
        dest: 'dist/float-label.min.js'
      },
    },
    jshint: {
      options: {
        jshintrc: true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['src/**/*.js']
      },
    },
    watch: {
      src: {
        files: 'src/float-label.less',
        tasks: ['less']
      },
      // test: {
        // files: '<%= jshint.test.src %>',
        // tasks: ['jshint:test', 'qunit']
      // },
    },
	 less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          "dist/float-label.css": "src/float-label.less"
        }
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', ['jshint', 'clean', 'less', 'uglify']);

};
