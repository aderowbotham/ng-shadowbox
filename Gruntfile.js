module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-ng-annotate");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-remove");

  grunt.initConfig({

    ngAnnotate: {
      default: {
        files: {
          "dist/ng-shadowbox-temp.js": "dist/ng-shadowbox.js",
        }
      }
    },

    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      default: {
        files: {
          "dist/ng-shadowbox.min.js": ["dist/ng-shadowbox-temp.js"]
        }
      }
    },

    remove: {
      options: {
        trace: true
      },

      default:{
        fileList: ["dist/ng-shadowbox-temp.js"],
        dirList: []
      }
    }
  });


  grunt.registerTask("ngShadowboxMin","Compiles pricer", function(){
    grunt.log.write("Minify shadowbox.js");

    var myTasks = [

      "ngAnnotate:default",
      "uglify:default",
      "remove:default"
    ];

    grunt.task.run(myTasks);
  });

  // required default task
  grunt.registerTask("default", "ngShadowboxMin");

};
