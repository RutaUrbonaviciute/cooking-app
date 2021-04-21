const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: path.join(__dirname, "src", "index.jsx"),
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
      // kai subundlina visus js failus ir kazkuriam yra error ar warning tai klaida targetina i bundle, bet source maps sumapina compiled code back to my orgiinal source code
    devtool: 'inline-source-map',
      // paleidzia localHost:8080 serveri ir subundlina failus is ourput.path. Tu failu neiraso o laiko juos atmintyje ty neiskepa nauja failiuko dist folderyje.
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};