import React from "react";
import express, { Express } from "express";
import compression from "compression";
import path from "path";
import { ServerStyleSheet } from "styled-components";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouterContext } from "react-router";
import { createTheme } from "@edwardandrewb/elements";

import getChunkExtractor from "./services/chunkExtractor";
import NodeApp from "../client/index.node";
import { header, footer } from "./html";
import createGlobalStyles from "./css/createGlobalStyles";

const theme = createTheme();
const globalStyles = createGlobalStyles(theme);

const defaultMiddleware = [
  compression(),
  express.static(path.resolve("dist/client"))
];

const setup = (additionalMiddleware = []): Express => {
  const app = express();

  [defaultMiddleware, ...additionalMiddleware].forEach(middleware => {
    app.use(middleware);
  });

  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send("");
  });

  app.get("/*", async (req, res) => {
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

      res.set("content-type", "text/html");
      res.write(header(chunkExtractor.getLinkTags(), globalStyles));

      stream.pipe(res, { end: false });
      stream.on("end", () => res.end(footer(chunkExtractor.getScriptTags())));
    } catch (e) {
      res.send(JSON.stringify(e));
    }
  });

  return app;
};

const serve = (app: Express, port: number): void => {
  app.listen(port, () =>
    console.log(`\n🚀 Server listening on port ${port}\n`)
  );
};

export { setup, serve };