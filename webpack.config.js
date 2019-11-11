const webpack = require("webpack");

module.exports = {
  mode: "development",
  // mode: "production",
  entry: {
    cssist: './src/entry.js',
  },
  output: {
    path: __dirname,
    filename: "./[name].js"
  },
  module:  {
    rules: [
      {test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, use: [ { loader: 'file-loader', options: { name:'./dist/fonts/[name].[ext]' } } ] },
      {test: /\.(png|jpe?g|gif)$/i, use: [ { loader: 'file-loader', options: { name:'./dist/images/[name].[ext]' } } ] },
      {test: /jquery\.js$/, loader : 'expose-loader?$' },
      {test: /jquery\.js$/, loader : 'expose-loader?jQuery' },
      {test: /\.js$/, loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      externals: { jquery: 'jQuery' }
    })
  ]
};
