const path = require('path');
const glob = require('glob');
const nodeExternals = require('webpack-node-externals');
const {
  swcDefaultsFactory,
} = require('@nestjs/cli/lib/compiler/defaults/swc-defaults');

// Get Nest’s default SWC options and override if needed.
const defaultSwcConfig = swcDefaultsFactory();
defaultSwcConfig.cliOptions.stripLeadingPaths = false;

// Find all TypeScript files in both "apps" and "libs", ignoring test files if needed.
const entryFiles = glob.sync('./{apps,libs}/**/*.ts', {
  ignore: ['./**/*.spec.ts'], // adjust this pattern as needed
});

// For each file, compute an entry key that removes the "/src/" segment.
// For example, "apps/admin-api/src/main.ts" becomes "apps/admin-api/main"
const entries = entryFiles.reduce((acc, filePath) => {
  // Get the relative path from the monorepo root
  let relativePath = path.relative('.', filePath); // e.g. "apps/admin-api/src/main.ts"
  // Remove the "/src/" part so the output mimics tsc's output
  relativePath = relativePath.replace(/\/src\//, '/');
  // Remove the extension
  const entryKey = relativePath.replace(/\.ts$/, '');
  acc[entryKey] = path.resolve(__dirname, filePath);
  return acc;
}, {});

module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  entry: entries,
  output: {
    // All compiled files will go to "dist" preserving the folder structure.
    // For example, "apps/admin-api/src/main.ts" becomes "dist/apps/admin-api/main.js"
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()], // Keep node_modules external
  resolve: {
    extensions: ['.ts', '.js'],
    // You can add alias mappings if needed (for example, if you use path aliases in tsconfig)
    alias: {
      // Example: if your tsconfig has:
      // "paths": { "@app/libs": ["libs/libs"] }
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
