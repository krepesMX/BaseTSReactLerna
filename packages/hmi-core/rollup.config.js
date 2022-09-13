import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postCSS from 'rollup-plugin-postcss';

import pkg from './package.json';

const plugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env']
  }),
  typescript({
    declaration: true,
    declarationDir: 'lib',
  }),
  postCSS({
    plugins: [],
  }),
];

export default [
  {
    input: [
      'src/components/core/index.ts'
    ],
    output: {
      dir: 'lib',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins
  }
];
