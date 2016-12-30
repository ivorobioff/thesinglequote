var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './resources/app/main.js'],

    output: {
        path: './public/js',
        filename: 'app.js'
    },

    resolve: {
        root: path.resolve(__dirname),
        alias: {
            'sparrow-ui': 'resources/sparrow-ui'
        }
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};