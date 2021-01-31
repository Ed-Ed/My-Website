/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChunkExtractor } from "@loadable/server";
import fs from "fs";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";
const statsFile = path.resolve("dist/client/loadable-stats.json");
let stats: any;

const getChunkExtractor = (): ChunkExtractor => {
  if (isProduction && !stats) {
    stats = JSON.parse(fs.readFileSync(statsFile, "utf8"));
  }

  if (isProduction) {
    return new ChunkExtractor({
      stats,
      publicPath: "/"
    });
  }

  return new ChunkExtractor({
    statsFile,
    publicPath: "/"
  });
};

export default getChunkExtractor;
