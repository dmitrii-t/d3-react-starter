import * as path from 'path';
// @ts-ignore
import webpack from 'webpack';
// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import nodeExternals from 'webpack-node-externals';

const paths = {
  nodeModules: path.resolve(__dirname, 'node_modules'),
  dist: path.resolve(__dirname, 'dist')
};

const isDev = process.env.NODE_ENV !== 'production';

const app: webpack.Configuration = {
  optimization: {
    minimize: false
  },
  mode: isDev ? 'development' : 'production',
  target: 'web',
  entry: ['@babel/polyfill', './src/index'],
  output: {
    path: paths.dist,
    filename: 'index.js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader'],
        exclude: [paths.nodeModules],
      },
    ],
  },
  devtool: isDev ? 'inline-source-map' : false,
  plugins: [
    // new WebpackManifestPlugin(),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
};

export default [
  app
];
