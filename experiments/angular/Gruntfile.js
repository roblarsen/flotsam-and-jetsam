module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
			'bower_components/angular/angular.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-bootstrap3/ui-bootstrap-tpls.js',
			'bower_components/angular-resource/angular-resource.js',
			'bower_components/angular-route/angular-route.js',		
			'js/**/*.js'
		],
        dest: 'dist/js/app.js'
      }
    },  
	uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/app.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },	
	less: {	 
	  development: {
		options: {
		  paths: [""]
		},
		files: {
		  "dist/css/app.css": "less/bootstrap.less"
		}
	  },
	  production: {
	    options: {
		  paths: [""],
		  cleancss: true,
		},
		files: {
		  "dist/css/app.css": "less/bootstrap.less"
		}
	  }
	},	
	jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
		  angular: true,
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
	copy: {
      images: {
        expand: true,
        src: ["img/*"],
        dest: 'dist/'
      },
	  partials: {
        expand: true,
        src: ["partials/*"],
        dest: 'dist/'
      }
    },
    watch: {
      javascript: {
		files: ['js/**/*.js'],
		tasks: ['concat']
	  },
	  less: {
		files: ['less/**/*.less'],
		tasks: ['less']
	  }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');  
  
  grunt.registerTask('default', ['concat', 'less:development']);
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['concat', 'uglify', 'less:production', 'copy']);
};