'use strict';

module.exports.tasks = {
    clean  : {
        dist : ['dist']
    },
    concat : {
        source : {
            src  : ['<%= paths.src %>/**/*.js'],
            dest : '<%= paths.dist %>/<%= pkg.name %>.js'
        }
    },
    uglify : {
        options : {
            banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> ' + 'Copyright (c) <%= grunt.template.today("yyyy") %> ' + '<%= pkg.author %>; Licensed <%= pkg.license %> */'
        },
        build   : {
            src  : '<%= paths.dist %>/<%= pkg.name %>.js',
            dest : '<%= paths.dist %>/<%= pkg.name %>.min.js'
        }
    }
};