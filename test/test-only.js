"use strict";

const describeWithDOM = require('../');
const expect = require('expect');

describe('describeWithDOM - only', function() {

  describeWithDOM.only('only', function() {
    it('This should run', function() {
      expect(true).toBe(true);
    });
  });

  describe('only', function() {
    it('This should run', function() {
      expect(false).toBe(true);
    });
  });

});
