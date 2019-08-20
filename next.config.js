const withPlugins = require('next-compose-plugins');

const otherConfig = {
    dir: './src',
    distDir: 'build',
};

module.exports = withPlugins([
    otherConfig,
]);;