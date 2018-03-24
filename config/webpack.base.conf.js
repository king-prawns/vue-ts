// const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
      test    : /\.html$/,
      loader  : 'html-loader',
      options : { minimize: true }
    },
    {
      enforce : 'pre',
      test    : /\.ts$/,
      exclude : [/node_modules/],
      loader  : 'tslint-loader'
    },
    {
      test    : /\.tsx?$/,
      exclude : [/node_modules/],
      loader  : 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          ts: 'ts-loader!tslint-loader',
          // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
          // the "scss" and "sass" values for the lang attribute to the right configs here.
          // other preprocessors should work out of the box, no loader config like this necessary.
          'scss': 'vue-style-loader!css-loader!sass-loader',
          'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
        }
      }
    },
    {
      test    : /\.(woff(2)?|eot|ttf|otf|png|jpe?g|gif|svg)$/,
      loader  : 'url-loader',
      options : {
        limit: 10000
      }
    }]
  }
  // plugins: [
  //   new StyleLintPlugin()
  // ]
};
