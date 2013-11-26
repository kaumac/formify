module.exports = function(grunt) {
  var testFiles = ['*.js'],
      specFiles = ['spec/*.js']
  grunt.initConfig({
    jshint: {
      all: testFiles
    },
    jasmine: {
      src: testFiles,
      options: {
        specs: specFiles
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
};