module.exports = {
  devServer: {
    contentBase: './cardmanager/frontend/static/frontend',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  entry: './cardmanager/frontend/src/index.js',
  output: {
    publicPath: 'http://127.0.0.1:8080/',
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
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
