const path = require('path');
const glob = require('glob');
const nodeExternals = require('webpack-node-externals');
// Get the default SWC configuration from Nest CLI
const {
  swcDefaultsFactory,
} = require('@nestjs/cli/lib/compiler/defaults/swc-defaults');

const defaultSwcConfig = swcDefaultsFactory();
defaultSwcConfig.cliOptions.stripLeadingPaths = false;
defaultSwcConfig.cliOptions.outDir = './dist';

const entries = glob.sync('./**/*.ts').reduce((acc, filePath) => {
  // Compute a relative entry name without the .ts extension.
  const entryName = path.relative('./src', filePath).replace(/\.ts$/, '');
  // Resolve to an absolute path.
  acc[entryName] = path.resolve(__dirname, filePath);
  return acc;
}, {});

module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  entry: entries,
  output: {
    // Output will mirror the folder structure from your source,
    // for example, if entryName is "folder/file", the output will be "dist/folder/file.js".
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()], // Exclude node_modules from bundling
  resolve: {
    extensions: ['.ts', '.js'],
    // You can also add any alias mappings here if needed
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
        use: {
          loader: 'swc-loader',
          options: defaultSwcConfig.swcOptions, // Use the Nest CLI default SWC options with our overrides
        },
      },
    ],
  },
};
