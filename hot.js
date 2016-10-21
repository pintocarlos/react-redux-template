import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import config from "./webpack.config.babel";

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
}).listen(8080, "localhost", err => {
    if (err) {
        console.log(err);
    }

    console.log("Listening at localhost:8080");
});
