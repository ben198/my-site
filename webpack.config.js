const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const clientDir = path.resolve(__dirname, 'src/client');
const serverDir = path.resolve(__dirname, 'src/server/generated');
const distDir = path.resolve(__dirname, 'dist');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const loaders = [
    {
        test: /\js?$/,
        exclude: [nodeModulesDir],
        loader: 'babel',
        query: {
            presets: ['react', 'es2015']
        }
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
    },
    {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
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
];

module.exports = [
    {
        name: 'client',
        target: 'web',
        context: clientDir,
        entry: './main.js',
        output: {
            path: distDir,
            filename: 'bundle.js'
        },
        module: {
            loaders: loaders
        },
        plugins: [
            new ExtractTextPlugin('bundle.css', {allChunks: true})
        ]
    },
    {
        name: 'server',
        target: 'node',
        context: clientDir,
        entry: {
            app: './components/App.js'
        },
        output: {
            path: serverDir,
            filename: '[name].js',
            libraryTarget: 'commonjs2'
        },
        module: {
            loaders: loaders
        },
        plugins: [
            new ExtractTextPlugin('[name].css')
        ]
    }
];
