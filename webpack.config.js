const Webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProd = process.env.NODE_ENV === 'production';
const isSsr = process.env.MODE === 'ssr';

const mode = isProd ? 'production' : 'development';
const target = isSsr ? 'node' : 'web';
const filename = isSsr ? 'index.js' : 'bundle.js';
const alias = !isProd ? { 'react-dom': '@hot-loader/react-dom' } : undefined;

let entry;

if (isSsr) {
  if (isProd) {
    entry = './src/ssr/index.prod.ts';
  } else {
    entry = './src/ssr/index.dev.ts';
  }
} else if (isProd) {
  entry = './src/client/index.web.tsx';
} else {
  entry = [
    `webpack-hot-middleware/client?name=${target}&reload=true/`,
    './src/client/index.web.tsx',
  ];
}

module.exports = {
  name: target,
  mode,
  target,
  devtool: false,
  watchOptions: {
    ignored: isSsr
      ? path.resolve(__dirname, 'src/client')
      : path.resolve(__dirname, 'src/ssr'),
  },
  entry,
  output: {
    path: path.resolve(`dist/${process.env.MODE}`),
    publicPath: '/',
    filename,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(jpg||png)$/,
        loader: 'file-loader',
        options: {
          publicPath: '/',
          outputPath: '../client',
        },
      },
    ],
  },
  externals: isSsr ? [nodeExternals()] : undefined,
  plugins: [
    new LoadablePlugin(),
    !isProd && new Webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin(),
  ].filter(Boolean),
};
