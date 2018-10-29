var path = require("path"); 

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.jsx\?$/,
                include: SRC_DIR,
                loader: "babel-loader",
                options: {
                    presets: ["env","react", "react-dom", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;

// var path = require('path');

// var config = {
//     entry: './src/app/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [
//             { test: /\.jsx\?$/, loader: 'babel-loader', exclude: /node_modules/, options: {
//                 presets: [ 'react' ]
//             } }
//         ]
//     }
// };

// module.exports = config;
