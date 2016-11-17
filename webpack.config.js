module.exports = {
    entry: ['core-js/shim', 'angular', './src/index.js'],
    // entry: './src/index.js',
    output: {
        path: 'tmp',
        filename: 'index.bundle.js'
    },
    module: {
        loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.css$/, loader: 'style-loader!css-loader' },
  			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
  			{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
  			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
  			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }]
    },
    cache: true,
    devtool: 'cheap-module-source-map',
    devServer: {
        filename: "index.bundle.js",
        contentBase: "./src",
        port: 3000,
        open: true,
        watch: true,
        publicPath: "/",
        historyApiFallback: true,
        stats: {
            colors: true,
            chunks: false
        },
    }
};
