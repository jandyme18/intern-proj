module.exports = {
  module: {
    loaders: [
      {
        test: /\.json5$/i,
        loader: 'json-loader',
        option: {
          esModule: true,
        },
        type: 'javascript/auto',
      },
    ],
  },
};