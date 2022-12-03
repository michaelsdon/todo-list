
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  entry: {
    index: './src/index.js',
    project: './src/module/project.js',
    // storage: './src/module/storage.js',
    task: './src/module/task.js',
    todolist: './src/module/todolist.js',
    // ui: './src/ui.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List',
      template: './src/index.ejs',
    }),
  ],
};