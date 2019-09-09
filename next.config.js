/* eslint-disable */
require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/assets/variables.less'), 'utf8')
);

const nextConfig = {
  dir: './src',
  distDir: 'build',
  env: {
    'GITHUB_PERSONAL_ACCESS_TOKEN': process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  }
};


module.exports = withPlugins([
  [
    withLess, {
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    }
  ],
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[path]___[local]___[hash:base64:5]',
      },
    },
  ],
], nextConfig);
