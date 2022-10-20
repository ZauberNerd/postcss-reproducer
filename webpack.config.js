const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: [/\.css$/],
      use: [{
        loader: require.resolve('style-loader'),
        options: {
          esModule: false,
        },
      }, {
        loader: require.resolve('css-loader'),
        options: {
          modules: false,
          importLoaders: 1,
        },
      }, {
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            ident: 'postcss',
            config: false,
            plugins: [
              require('postcss-preset-env')({
                stage: 2,
                features: {
                  'nesting-rules': true,
                  'custom-media-queries': true,
                  'custom-properties': {
                    preserve: false,
                  },
                },
              }),
            ],
          },
        },
      }],
    }]
  },
};
