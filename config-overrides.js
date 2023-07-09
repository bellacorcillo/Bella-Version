const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    util: require.resolve('util/'),
    os: require.resolve('os-browserify/browser'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert/'),
    crypto: require.resolve('crypto-browserify'),
    buffer: require.resolve('buffer/'),
    path: require.resolve('path-browserify'),
    zlib: require.resolve('browserify-zlib'),
    querystring: require.resolve('querystring-es3'),
    fs: false,
    tls: false,
    net: false,
    url: false,
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  );

  return config;
};
