module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        separator: ";"
      },
      js: {
        src: ["src/js/vendor/fastclick.js","src/js/vendor/jquery-1.11.1.min.js","src/js/main.js"],
        dest: "pub/js/script.js"
      },
      css: {
        src: ["src/css/normalize.css","src/css/main.css"],
        dest: "pub/css/styles.css"
      }
    },
    cssmin: {
      files: {
        expand : true,
        src:["pub/css/styles.css"]
      }
    },
    sync: {
      target: {
        files: [
          { expand: true, cwd: "src/", src: ["js/vendor/*.*"], dest: "pub/", filter: "isFile" },
          { expand: true, cwd:"src/", src: ["*.html", "*.ico", "img/**/*"], dest: "pub/", filter: "isFile" }
        ]
      }
    },
    uglify: {
      js: {
        files: {
          "pub/js/script.js": ["pub/js/script.js"]
        }
      }
    },
    watch: {
      files: ["src/js/*","src/index.html","src/css/*","gruntfile.js"],
      tasks: [ "jshint", "clean", "copy" ,"concat", "cssmin", "uglify"]
    },
    jshint: {
      files: ["gruntfile.js", "src/js/main.js"],
      options: {
        passfail:false,
        maxerr: 100,
        browser: true,
        jquery: true,
        devel: true,
        bitwise: true,
        boss:false,
        trailing:true,
        sub:true,
        curly:true,
        eqeqeq:true,
        forin:true,
        freeze:true,
        indent:2,
        quotmark:"double",
        unused:true
      }
    }
  });
  grunt.loadNpmTasks("grunt-mkdir");
  grunt.loadNpmTasks("grunt-sync");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-hashres");
  grunt.loadNpmTasks("grunt-replace");
  grunt.registerTask("default", [ "jshint", "sync" ,"concat", "cssmin", "uglify"]);
};