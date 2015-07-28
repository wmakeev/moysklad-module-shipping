/*global _, mockery */
/*eslint no-var: 0 */

// require('babel/register')({
//   stage: 1
// });

require('babel/polyfill');

// require('source-map-support').install({
//    handleUncaughtExceptions: false
// });

// https://github.com/evanw/node-source-map-support/issues/34
// var prepareStackTrace = Error.prepareStackTrace;
// Object.defineProperty(Error, 'prepareStackTrace', {
//   enumerable: true,
//   get: function () {
//     return prepareStackTrace;
//   },
//   set: function () {
//     var trace = console && (console.trace || console.log)
//     if (!trace) return
//     trace.call(console, 'an attempt to overwrite Error.prepareStackTrace has been prevented by source-map-support')
//   }
// });

global._         = require('lodash');
global.Promise   = require('es6-promise').Promise;
global.isPromise = require('is-promise');
global.sinon     = require('sinon');
global.chai      = require('chai');
global.expect    = global.chai.expect;
global.assert    = global.chai.assert;
global.mockery   = require('mockery');

global.chai.should();
global.chai.use(require('sinon-chai'));

var resolve = require('resolve');
global.requireWithMocks = function requireWithMocks(name, dirname, options) {
  var modulePath = resolve.sync(name, { basedir: dirname });
  mockery.enable({ useCleanCache: true });
  mockery.registerAllowable(modulePath);
  if (options.allowables) {
    mockery.registerAllowables(options.allowables);
  }

  if (options.mocks) {
    _.forOwn(options.mocks, function(mock, mockName) {
      mockery.registerMock(mockName, mock);
    });
  }
  else {
    throw new Error('requireWithMocks: "mocks" not specified in options');
  }

  var requiedModule = require(modulePath);
  mockery.deregisterAll();
  mockery.disable();
  return requiedModule;
};
