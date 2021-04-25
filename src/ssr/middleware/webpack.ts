import { RequestHandler } from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../../webpack.config';

const webpackMiddleware = (): RequestHandler[] => {
  const compiler = webpack(webpackConfig);

  return [
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      writeToDisk: true,
      serverSideRender: true,
    }),
    webpackHotMiddleware(compiler),
  ];
};

export { webpackMiddleware };
