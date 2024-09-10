const path = require('path');

module.exports = {
  entry: './src/index.js',  // Убедись, что путь правильный
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
  },
};