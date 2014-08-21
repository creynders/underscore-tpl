module.exports = function(grunt){
	"use strict";

	var pkgConfig = grunt.file.readJSON('package.json');
	// Project configuration.
	grunt.initConfig({
		pkg     : pkgConfig,
		uglify  : {
			options : {
				banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> ' + 'Copyright (c) <%= grunt.template.today("yyyy") %> ' + '<%= pkg.author %>; Licensed <%= pkg.license %> */'
			},
			build   : {
				src  : 'dist/<%= pkg.name %>.js',
				dest : 'dist/<%= pkg.name %>.min.js'
			}
		},
		concat  : {
			source : {
				src  : ['src/**/*.js'],
				dest : 'dist/<%= pkg.name %>.js'
			}
		},
		clean:{
			dist: ['dist']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Default task.
	grunt.registerTask('build', ['clean:dist', 'concat', 'uglify']);
};