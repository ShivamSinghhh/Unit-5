
const path = require("path");

module.exports = {
    entry: "./code/index.js",
    output: {
        path: path.join(__dirname, "build"), // folder name,
        filename : "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use : ["style-loader","css-loader"],
            },
            {
                // for image rules
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
};