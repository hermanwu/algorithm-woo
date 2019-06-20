var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'faker',
  'lodash',
  'react',
  'react-dom',
  'react-input-range',
  'react-redux',
  'react-router',
  'redux',
  'redux-form',
  'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    // make vendor files become its own file to increase speed
    new webpack.optimize.CommonsChunkPlugin({
      // Ill try and explain why this file is needed based on the webpack docs:
      // After adding the [chunkhash] in our file names, we know that the content of the file is hashed, which is then appended to the file name. Essentially, if the content of the file is the same every time we build, our file name will not change.
      // The issue remains that our vendor filename keeps on changing as well, even though we have not made any changes to the content of the vendor file.
      // Why does this happen ? Because Webpack actually generates and inserts some webpack code at runtime into these files.
      // If we had a single combined / bundled js file (like we did before introducing code splitting), thats where this run time code would be. But now, we have two output files, so webpack takes this runtime code and puts it into the the common file, which is vendor.js.
      // Therefore, anytime you make a change to your application code and then run webpack, webpack generates run time code and inserts it into vendor.js.
      // Now the content of vendor.js have changed, and the file name will be changed as well.
      // This is where the Manifest file comes in, we take the run time code and insert it into the Manifest file, and leave our vendor file unchanged.
      // Apologies for the long post, but hope that helps!
      // this line of code avoid vendor file gets changed
      names: ['vendor', 'manifest']
    }),
    // generate javascript links in index.html
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
