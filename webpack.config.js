module.exports = {
    entry: {
        helloworld: './develop/assets/jsx/helloworld.jsx'
    },
    output: {
        filename: '[name].js'
    },
    devtool: '#source-map',
    module: {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
            cacheDirectory: true,
            presets: ['react', 'es2015']
        }
    }

}
