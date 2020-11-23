(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.foo = factory());
}(this, (function () { 'use strict';

  function bar () {
    return "bar";
  }

  var index = function index() {
    var _bar = bar();

    console.log(_bar + "test :{}");
  };

  return index;

})));
