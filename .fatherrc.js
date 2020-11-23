export default {
  // esm: "rollup",
  esm: {
    type: "rollup",
    // mjs: true,
  },
  cjs: "rollup",
  umd: {
    name: "foo",
    minFile: false,
  },
};
