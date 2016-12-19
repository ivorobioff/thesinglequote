module.exports = {
    entry: './resources/app/main.js',

    output: {
        path: './public/js',
        filename: 'app.js'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};