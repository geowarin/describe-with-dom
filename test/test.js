"use strict";

const describeWithDOM = require('../');
const expect = require('expect');

describe('describeWithDOM', function() {

  describeWithDOM('describeWithDOM - default', function() {
    it('should access to the dom', function() {
      expect(document).toExist();
    })
  });

  describeWithDOM.skip('describeWithDOM - skip', function() {
    it('should not be called', function() {
      expect(false).toBe(true);
    })
  });
});
