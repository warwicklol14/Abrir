const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = [
  {
    mode: 'development',
    entry: './src/electron.ts',
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }]
    },
    output: {
      path: __dirname + '/dist',
      filename: 'index.js'
    }
  },
  {
    mode: 'development',
    entry: './src/react.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }]
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          include: /src/,
          use: [{loader: 'file-loader'}]
        },
      ], 
    },
    output: {
      path: __dirname + '/dist',
      filename: 'react.js'
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ] 
    },
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
          result.request = result.request.replace(/typeorm/, "typeorm/browser");
      }),
      new webpack.ProvidePlugin({
        'window.SQL': 'sql.js/js/sql.js'
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new FilterWarningsPlugin({
        exclude: [/mongodb/, /mssql/, /mysql/, /mysql2/, /oracledb/, /redis/, /react-native-sqlite-storage/]
      })
    ]
  }
];