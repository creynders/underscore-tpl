/* jshint -W024, expr:true */
/*global beforeEach, afterEach, describe, it*/
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
    describe( 'called', function(){
        describe( 'on objects', function(){
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
            it( 'should respect numbers', function(){
                expect(results.aNumber ).to.be.a('number');
            });
            it( 'should respect booleans', function(){
                expect(results.aTrue ).to.equal(true);
                expect(results.aFalse ).to.equal(false);
            });
            it( 'should respect nulls', function(){
                expect(results.aNull ).to.equal(null);
            });
        } );
        describe( 'on strings', function(){
            var results;
            beforeEach( function(){
                results = _tpl( fx.erb.str, fx.values );
            } );
            it( 'should interpolate variables in values', function(){
                expect( results ).to.equal( fx.values.qux.mofo );
            } );
        } );
        describe( 'on arrays', function(){
            var results;
            beforeEach( function(){
                results = _tpl( fx.erb.arr, fx.values );
            } );
            it( 'should interpolate variables in values', function(){
                expect( results ).to.have.members( [fx.values.qux.mofo, fx.values.foo, fx.values.badass] );
            } );
        } );
        describe( 'with settings', function(){
            describe( 'ignoreKeys is true', function(){
                it( 'should not interpolate keys', function(){
                    var results = _tpl( fx.erb.obj, fx.values, {
                        ignoreKeys : true
                    } );
                    expect( results ).to.contain.key('<%= foo %>');
                } );
            } );
            describe( 'interpolate regex', function(){
                var results;
                beforeEach(function(){
                    results = _tpl(fx.custom.obj, fx.values, {
                        interpolate : /\|(.+?)\|/g
                    });
                });
                it( 'should interpolate variables in values', function(){
                    expect( results.baz ).to.equal( fx.values.qux.mofo );
                    expect( results.major.badass ).to.equal( fx.values.badass );
                } );
                it( 'should interpolate variables in keys', function(){
                    expect( results ).to.contain.key( fx.values.foo );
                } );
            });
        } );
        describe('when templateSettings was set', function(){
            beforeEach(function(){
                _tpl.templateSettings.ignoreKeys = true;
            });
            afterEach(function(){
                _tpl.templateSettings.ignoreKeys = false;
            });
            it('should use them', function(){
                var results = _tpl( fx.erb.obj, fx.values);
                expect( results ).to.contain.key('<%= foo %>');
            });
        });
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
} );