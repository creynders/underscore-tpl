/* jshint -W024, expr:true */
/*global beforeEach, describe, it*/
'use strict';

var expect = require( 'chai' ).expect;
var _tpl = require( '../src/_tpl' );
var util = require( 'util' );
var _ = require( 'lodash' );
var fx = require( './fixtures' );

describe( '_tpl', function(){
    describe( 'spec', function(){
        it( 'should run', function(){
            expect( true ).to.equal( true );
        } );
    } );
    describe( 'module', function(){
        it( 'should expose a function', function(){
            expect( _tpl ).to.be.a( 'function' );
        } );
    } );
    describe( 'called on ERB templated objects', function(){
        var results;
        beforeEach( function(){
            results = _tpl( fx.erb, fx.values );
        } );
        it( 'should interpolate variables in values', function(){
            expect( results.baz ).to.equal( fx.values.qux.mofo );
            expect( results.major.badass ).to.equal( fx.values.badass );
        } );
        it( 'should interpolate variables in keys', function(){
            expect( results ).to.contain.key( fx.values.foo );
        } );
    } );
} );