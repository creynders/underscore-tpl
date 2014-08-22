/**
 * @author <a href="http://www.creynders.be">Camille Reynders</a>
 */
(function( root,
           factory ){
    /*
     AMD/CommonJS compatibility largely stolen from https://github.com/kriskowal/q/blob/master/q.js
     */
    // Turn off strict mode for this function so we can assign to global.dijon
    /*jshint strict: false, -W117*/

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the dijon API and when
    // executed as a simple <script>, it creates a dijon global instead.

    // CommonJS
    if( typeof exports === "object" ){
        module.exports = factory( require( 'lodash' ) );

        // RequireJS
    }else if( typeof define === "function" && define.amd ){
        define( ['lodash'], factory );

        // <script>
    }else{
        root._tpl = factory( _ );
    }
})( this, function( _ ){
    "use strict";

    var hbs = /\{\{(.+?)\}\}/g

    return function _tpl( subject,
                          data,
                          settings ){
        var result = { };
        if( settings && (
            settings.mustache ||
            settings.handlebars ||
            'mustache' === settings.style ||
            'handlebars' === settings.style)
        ){
            settings.interpolate = hbs;
        }
        if( _.isString(subject)){
            return _.template(subject, data, settings);
        }
        _.each( subject, function( element,
                                   key ){
            var item = element;
            key = _.template( key, data, settings );
            if( _.isFunction( item ) ){
                item = item( data );
            }
            if( _.isObject( item ) ){
                result[key] = _tpl( item, data, settings );
            }else if( _.isString( item ) ){
                result[key] = _.template( item, data, settings );
            }
        } );
        return result;
    };

} );