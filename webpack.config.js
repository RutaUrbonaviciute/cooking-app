const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { index: path.join(__dirname, 'src', 'index.jsx') },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js',
        // isvalo dist folderi ir kiekviena karta generuojant naujus failus nelieka senu
        clean: true,
    },
    mode: process.env.NODE_ENV || 'development',
    // Configure how modules are resolved.
    resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'] },
    // kai subundlina visus js failus ir kazkuriam yra error ar warning tai klaida targetina i bundle, bet source maps sumapina compiled code back to my orgiinal source code
    devtool: 'inline-source-map',
    // paleidzia localHost:8080 serveri ir subundlina failus is ourput.path. Tu failu neiraso o laiko juos atmintyje ty neiskepa nauja failiuko dist folderyje.
    devServer: { contentBase: path.join(__dirname, 'src') },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css)$/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', "postcss-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
    ],
};
