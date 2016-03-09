var jsdom = require('jsdom-global');

function describeWithDOM(a, b) {
  describe('(uses jsdom)', () => {
    var cleanup;
    before(() => cleanup = jsdom());
    describe(a, b);
    after(() => cleanup());
  });
}

function only(a, b) {
  describe('(uses jsdom)', () => {
    var cleanup;
    before(() => cleanup = jsdom());
    describe.only(a, b);
    after(() => cleanup());
  });
}

function skip(a, b) {
  var cleanup;
  before(() => cleanup = jsdom());
  describe.skip(a, b);
  after(() => cleanup());
}

module.exports = describeWithDOM;
describeWithDOM.only = only;
describeWithDOM.skip = skip;
