const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        devtoolModuleFilenameTemplate: '[resource-path]',
        path: path.resolve(__dirname, 'dist/'),
    },
    module: {
        rules: [
            { test: /\.js$/, use: { loader: 'babel-loader', query: { presets: ['@babel/preset-env'] } } },
        ]
    },
};