import React from 'react';
import express, { Express, RequestHandler } from 'express';
import compression from 'compression';
import path from 'path';
import { ServerStyleSheet } from 'styled-components';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouterContext } from 'react-router';
import { getChunkExtractor } from './services/chunkExtractor';
import { NodeApp } from '../client/index.node';
import { header, footer } from './html';
import { createGlobalStyles } from './css/createGlobalStyles';
import { theme } from '../client/theme';

const globalStyles = createGlobalStyles(theme);

const defaultMiddleware = [
  compression(),
  express.static(path.resolve('dist/client')),
];

const setup = (additionalMiddleware: RequestHandler[] = []): Express => {
  const app = express();

  [defaultMiddleware, ...additionalMiddleware].forEach((middleware) => {
    app.use(middleware);
  });

  app.get('/robots.txt', (_req, res) => {
    res.type('text/plain');
    res.send('');
  });

  app.get('/*', async (req, res) => {
    try {
      const sheet = new ServerStyleSheet();
      const routerContext: StaticRouterContext = {};
      const chunkExtractor = getChunkExtractor();

      const stream = sheet.interleaveWithNodeStream(
        renderToNodeStream(
          chunkExtractor.collectChunks(
            sheet.collectStyles(
              <NodeApp
                url={req.url}
                routerContext={routerContext}
                theme={theme}
              />
            )
          )
        )
      );

      res.set('content-type', 'text/html');
      res.write(header(chunkExtractor.getLinkTags(), globalStyles));

      stream.pipe(res, { end: false });
      stream.on('end', () => res.end(footer(chunkExtractor.getScriptTags())));
    } catch (error) {
      res.send(error.message);
    }
  });

  return app;
};

const serve = (app: Express, port: number): void => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`\n🚀 Server listening on port ${port}\n`);
  });
};

export { setup, serve };
