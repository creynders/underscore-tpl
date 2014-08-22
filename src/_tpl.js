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

    var hbs = /\{\{(.+?)\}\}/g;
    var defaults = {
        interpolateKeys : true
    };

    return function _tpl( subject,
                          data,
                          settings ){
        var result;
        var opts = _.defaults( _.clone(defaults), settings);
        if( opts.mustache ||
            opts.handlebars ||
            'mustache' === opts.style ||
            'handlebars' === opts.style  ){
            opts.interpolate = hbs;
        }
        if( _.isString(subject)){
            return _.template(subject, data, opts);
        }else if( _.isArray(subject)){
            result = [];
            opts.interpolateKeys = false;
        }else{
            result = {};
        }

        _.each( subject, function( element,
                                   key ){
            var item = element;
            if(opts.interpolateKeys){
                key = _.template( key, data, opts );
            }
            if( _.isFunction( item ) ){
                item = item( data );
            }
            if( _.isObject( item ) ){
                result[key] = _tpl( item, data, opts );
            }else if( _.isString( item ) ){
                result[key] = _.template( item, data, opts );
            }
        } );
        return result;
    };

} );