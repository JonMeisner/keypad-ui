const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(
            // "C:/FXServer/server-data/resources/pma-joblisting/dist/"
            "C:/Users/SaxyN/Desktop/React Things/keypad-ui/build"
            // C:\Users\SaxyN\Desktop\React Things\keypad-ui
        ),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: "url-loader?limit=100000",
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: "public/index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/assets",
                    to: path.resolve(
                        // "C:/FXServer/server-data/resources/pma-joblisting/dist/assets"
                        "C:/Users/SaxyN/Desktop/React Things/keypad-ui/build/assets"
                    ),
                },
            ],
        }),
    ],
    devtool: "eval-source-map",
    devServer: {
        compress: true,
        open: {
            app: ["chrome", "--other-flag"],
        },
    },
};
