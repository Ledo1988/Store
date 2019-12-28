const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var webpack = require('webpack')

module.exports = {
    mode: 'production',

    entry: {
        main: "./src/js/index.js",
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            },
            {
                test: /\.svg$/,
                loader: 'gulp-svg-sprite'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            "%components%": path.resolve(__dirname, "src/blocks/components"),
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' для webpack 1
        }
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
