const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const otherConfig = {
  dir: './src',
  distDir: 'build',
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];
      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }
    return config;
  },
};

module.exports = withPlugins([
  [withCss],
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[path]___[local]___[hash:base64:5]',
      },
    },
  ],
  otherConfig,
]);
