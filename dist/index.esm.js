function bar () {
  return "bar";
}

var index = function index() {
  var _bar = bar();

  console.log(_bar + "test :{}");
};

export default index;
