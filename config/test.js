'use strict';

module.exports.tasks = {
    jshint    : {
        options     : {
          reporter : require( 'jshint-stylish' ),
          jshintrc : true
        },
        testFiles : ['<%= paths.specs %>/**/*.js']
    },
    mochaTest : {
        test : {
            options : {
                reporter : 'spec'
            },
            src     : ['<%= paths.specs %>/*.spec.js']
        }
    }
};
