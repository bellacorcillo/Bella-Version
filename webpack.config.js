const path = require('path');

module.exports = {
  // ... other webpack configuration options ...

  resolve: {
    fallback: {
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
      crypto: require.resolve('crypto-browserify'),
      fs: false,
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
    },
  },
};


  