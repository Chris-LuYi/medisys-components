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
    globals: {
      react: "React",
    },
  },
  doc: {
    // themeConfig: { mode: "dark" },
    base: "/medisys-components",
  },
};
