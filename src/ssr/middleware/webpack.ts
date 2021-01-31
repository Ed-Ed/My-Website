/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default (): any => {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackConfig = require("../../../webpack.config");

  const compiler = webpack(webpackConfig);

  return [
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      writeToDisk: true
    }),
    webpackHotMiddleware(compiler)
  ];
};
