import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import multiEntry from "rollup-plugin-multi-entry";
import url from "rollup-plugin-url";

import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: pkg.main,
        format: "cjs",
      },
      {
        file: pkg.module,
        format: "es",
      },
    ],
    plugins: [
      external(),
      url(),
      babel({
        exclude: "node_modules/**",
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "src/*.css",
    output: {
      file: "dist/styles.css",
      format: "es",
    },
    plugins: [
      multiEntry(),
      postcss({
        extract: true,
      }),
    ],
  },
];
