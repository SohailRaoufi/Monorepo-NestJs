const path = require('path');
const glob = require('glob');
const nodeExternals = require('webpack-node-externals');
const {
  swcDefaultsFactory,
} = require('@nestjs/cli/lib/compiler/defaults/swc-defaults');

const defaultSwcConfig = swcDefaultsFactory();
defaultSwcConfig.cliOptions.stripLeadingPaths = false;

const entryFiles = glob.sync('./{apps,libs}/**/*.ts', {
  ignore: ['./**/*.spec.ts'],
});

const entries = entryFiles.reduce((acc, filePath) => {
  let relativePath = path.relative('.', filePath);
  relativePath = relativePath.replace(/\/src\//, '/');

  const entryKey = relativePath.replace(/\.ts$/, '');
  acc[entryKey] = path.resolve(__dirname, filePath);
  return acc;
}, {});

module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@app/libs': path.resolve(__dirname, 'libs/libs'),
      '@app/shared': path.resolve(__dirname, 'libs/shared/src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'swc-loader',
        options: defaultSwcConfig.swcOptions,
      },
    ],
  },
};
