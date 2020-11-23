'use strict';

function bar () {
  return "bar";
}

var index = function index() {
  var _bar = bar();

  console.log(_bar + "test :{}");
};

module.exports = index;
