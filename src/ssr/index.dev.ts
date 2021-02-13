import { setup, serve } from './server';
import { webpackMiddleware } from './middleware/webpack';

serve(setup(webpackMiddleware()), 8081);
