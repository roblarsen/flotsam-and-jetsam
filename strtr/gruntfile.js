module.exports = function (grunt) {
  require("jit-grunt")(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
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
          { expand: true, cwd:"src/", src: ["*.html", "*.ico", "_assets/img/**/*"], dest: "pub/", filter: "isFile" }
        ]
      }
    },
    uglify: {
      js: {
        files: {
          "pub/_assets/js/script.js": ["src/_assets/js/vendor/jquery.min.js","src/_assets/js/plugins.js","src/_assets/js/main.js"]
        }
      }
    },
    watch: {
      files: ["src/_assets/js/*","src/*.html","src/_assets/css/*","gruntfile.js"],
      tasks: ["jshint", "sync" ,"cssnext", "cssmin", "uglify"],
      options :{
        livereload:true
      }
    },
    connect: {
      server: {
        options: {
          base: "pub/",
          open:true,
          livereload:true
        }
      }
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

  grunt.registerTask("dev", [ "jshint", "sync" , "cssnext", "cssmin", "uglify","connect","watch"]);
};
