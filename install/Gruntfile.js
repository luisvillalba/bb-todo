module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          '../../deploy/js/main.min.js': ['../js/main.js']
        }
      }
    },
    watch: {
      files: [''],
      tasks: ['handlebars']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('deploy', ['handlebarsDeploy']);

};