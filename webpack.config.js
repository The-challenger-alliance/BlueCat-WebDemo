const path = require('path');
const webpack=require("webpack");

var config={
    devtool: '#eval-source-map',
    context:path.join(__dirname,"app"),
    entry:{
        homeView:"./views/HomeView.js"
    },
    output :{
        path:path.join(__dirname,"compress/js-compress"),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader", // Do not use "use" here
                options: {
                    presets: ['es2015']
                },
                exclude: [/node_modules|plugin/]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './app'),  // New
    },
};

module.exports=config;