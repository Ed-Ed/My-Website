import { setup, serve } from "./server";
import webpack from "./middleware/webpack";

serve(setup(webpack()), 8081);
