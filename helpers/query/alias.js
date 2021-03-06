/**
 * Query Type: Alias
 *
 * NOTE: This reuqired some special behavior inside of the 
 *       main query-builder. If you're aliasing an expression
 *       then the alias should become the __defaultTable on
 *       the current query.
 */

if (typeof module === 'object' && typeof define !== 'function') {
  var define = function(factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require, exports, module){
  var helpers = require('../../lib/query-helpers');
  var actions = require('../../lib/action-helpers');
  var utils = require('../../lib/utils');

  helpers.register('alias', function(alias, values, query){
    query.__defaultTable = query.alias;
    return '"' + alias + '"';
  });

  return module.exports;
});