import fs from 'fs';
import path from 'path';
import { ChunkExtractor } from '@loadable/server';
import { isProduction } from '../helpers/environment';

const STATS_FILE = path.resolve('dist/client/loadable-stats.json');

let stats: object;

const getChunkExtractor = (): ChunkExtractor => {
  if (isProduction() && !stats) {
    stats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));
  }

  if (isProduction()) {
    return new ChunkExtractor({
      stats,
      publicPath: '/',
    });
  }

  return new ChunkExtractor({
    statsFile: STATS_FILE,
    publicPath: '/',
  });
};

export { getChunkExtractor };
