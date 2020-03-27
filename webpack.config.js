module.exports = {
  devServer: {
    contentBase: './ankrmanager/frontend/static/frontend',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  entry: './ankrmanager/frontend/src/index.js',
  output: {
    publicPath: 'http://127.0.0.1:8080/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
