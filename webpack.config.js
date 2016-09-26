const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'dist');

const settings = {
    development: {
        publicPath: '/assets/',
        jsQueryPresets: ['react', 'es2015', 'react-hmre']
    },
    production: {
        publicPath: '/',
        jsQueryPresets: ['react', 'es2015']
    }
};

const isProduction = process.env.NODE_ENV === 'production';
console.log(isProduction)
const settingsToUse = isProduction ? settings.production : settings.development;

module.exports = {
    entry: './src/main.js',
    output: {
        path: buildPath,
        publicPath: settingsToUse.publicPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\js?$/,
                exclude: [nodeModulesPath],
                loader: 'babel',
                query: {
                    presets: settingsToUse.jsQueryPresets
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            }
        ]
    }
}