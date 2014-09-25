/*global describe,it*/
'use strict';
var assert = require('assert'),
  oniyiExpressMustacheRenderer = require('../lib/oniyi-express-mustache-renderer.js');

describe('oniyi-express-mustache-renderer node module.', function() {
  it('must be awesome', function() {
    assert( oniyiExpressMustacheRenderer.awesome(), 'awesome');
  });
});
