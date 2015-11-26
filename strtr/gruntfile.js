module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        separator: ";"
      },
      js: {
        src: ["src/js/_assets/vendor/jquery.min.js","src/js/main.js"],
        dest: "pub/_assets/js/script.js"
      }
    },
    cssnext: {
      options: {
        sourcemap: true
      },
      dist: {
        files: {
          "pub/_assets/css/main.css": "src/_assets/css/main.css"
        }
      }
    },
    cssmin: {
      files: {
        expand : true,
        src:["pub/_assets/css/main.css"]
      }
    },
    sync: {
      target: {
        files: [
          { expand: true, cwd:"src/", src: ["*.html", "*.ico", "src/_assets/img/**/*"], dest: "pub/", filter: "isFile" }
        ]
      }
    },
    uglify: {
      js: {
        files: {
          "pub/_assets/js/script.js": ["pub/_assets/js/script.js"]
        }
      }
    },
    watch: {
      files: ["src/_assets/js/*","src/index.html","src/_assets/css/*","gruntfile.js"],
      tasks: ["jshint", "sync" ,"concat", "cssnext", "cssmin", "uglify"]
    },
    jshint: {
      files: ["gruntfile.js", "src/_assets/js/main.js"],
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
  grunt.loadNpmTasks("grunt-cssnext");
  grunt.registerTask("default", [ "jshint", "sync" , "cssnext", "cssmin", "uglify"]);
};
