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
            results = _tpl( fx.erb.obj, fx.values );
        } );
        it( 'should interpolate variables in values', function(){
            expect( results.baz ).to.equal( fx.values.qux.mofo );
            expect( results.major.badass ).to.equal( fx.values.badass );
        } );
        it( 'should interpolate variables in keys', function(){
            expect( results ).to.contain.key( fx.values.foo );
        } );
    } );
    describe( 'called on ERB templated strings', function(){
        var results;
        beforeEach( function(){
            results = _tpl( fx.erb.str, fx.values );
        } );
        it( 'should interpolate variables in values', function(){
            console.log( results );
            expect( results ).to.equal( fx.values.qux.mofo );
        } );
    } );
    describe( 'called on ERB templated arrays', function(){
        var results;
        beforeEach( function(){
            results = _tpl( fx.erb.arr, fx.values );
        } );
        it( 'should interpolate variables in values', function(){
            expect( results ).to.have.members( [fx.values.qux.mofo, fx.values.foo, fx.values.badass] );
        } );
    } );
    describe( 'called on HBS templated objects', function(){
        var results;
        beforeEach( function(){
            results = _tpl( fx.hbs.obj, fx.values, { handlebars : true } );
        } );
        it( 'should interpolate variables in values', function(){
            expect( results.baz ).to.equal( fx.values.qux.mofo );
            expect( results.major.badass ).to.equal( fx.values.badass );
        } );
        it( 'should interpolate variables in keys', function(){
            expect( results ).to.contain.key( fx.values.foo );
        } );
    } );
    describe( 'called on hbs templated strings', function(){
        var results;
        beforeEach( function(){
            results = _tpl( fx.hbs.str, fx.values, { handlebars : true } );
        } );
        it( 'should interpolate variables in values', function(){
            console.log( results );
            expect( results ).to.equal( fx.values.qux.mofo );
        } );
    } );
    describe( 'called on HBS templated arrays', function(){
        var results;
        beforeEach( function(){
            results = _tpl( fx.hbs.arr, fx.values, { handlebars : true } );
        } );
        it( 'should interpolate variables in values', function(){
            expect( results ).to.have.members( [fx.values.qux.mofo, fx.values.foo, fx.values.badass] );
        } );
    } );
} );