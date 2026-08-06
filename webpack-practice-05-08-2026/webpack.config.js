const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    mode: "development",

 entry: "./src/index.js",

output: {path: path.resolve(__dirname, "dist"),
 filename: "bundle.js"
},



module:{

rules:[

{

test:/\.css$/,

use:[

"style-loader",

"css-loader"

]

},

{

test:/\.(png|jpg|jpeg|gif|svg)$/i,

type:"asset/resource"

}

]

}
};