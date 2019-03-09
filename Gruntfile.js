// const mozjpeg = require('imagemin-mozjpeg');
module.exports = function(grunt) {

  grunt.initConfig({
      imagemin: {
          // static: {
          //     options: {
          //         optimizationLevel: 3,
          //         svgoPlugins: [{removeViewBox: false}],
          //         use: [mozjpeg()] // Example plugin usage
          //     },
          //     files: {
          //         'dist/img.png': 'src/img.png',
          //         'dist/img.jpg': 'src/img.jpg',
          //         'dist/img.gif': 'src/img.gif'
          //     }
          // },
          dynamic: {
              files: [{
                  expand: true,
                  cwd: 'src/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'dist/'
              }]
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin']);
  
};
