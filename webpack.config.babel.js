/* global process */
import webpack from "webpack";
import path from "path";
import basscss from "postcss-basscss";
import cssnext from "cssnext";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";

const env = process.env.NODE_ENV;
const isDev = (env === "development");

const publicPath = isDev ? "/" : "static/starter-project";
const devtool = isDev ? "#source-map" : null;

const postcss = () => {
    return [
        basscss({
            raw: true,
        }),
        cssnext({
            compress: true,
            features: {
                rem: false,
                pseudoElements: false,
            },
        }),
    ];
};

const plugins = [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "/app/index.ejs"),
        filename: "index.html",
    }),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
    }),
];

const entry = ["./index.jsx"];
const jsLoaders = ["babel"];

if (!isDev) {
    plugins.unshift(new CleanWebpackPlugin(["build"]));
}

if (isDev) {
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );

    entry.unshift(
        "webpack-dev-server/client?http://0.0.0.0:8080",
        "webpack/hot/only-dev-server",
    );

    jsLoaders.unshift("react-hot");
}

module.exports = {
    context: path.join(__dirname, "/app"),
    entry,
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.[hash].js",
        publicPath,
    },
    resolve: {
        root: [path.join(__dirname, "app")],
        extensions: ["", ".js", ".jsx", ".css"],
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: jsLoaders,
        }, {
            test: /\.json$/,
            loader: "json",
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader",
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"],
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: "url-loader?limit=1000000",
        }, {
            test: /\.(png|jpg)$/,
            loader: "file-loader?name=assets/images/[name].[ext]",
        }],
    },
    postcss,
    devtool,
    plugins,
};
