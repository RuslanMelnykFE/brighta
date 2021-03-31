const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/brighta/'
    : '/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@mixins': path.resolve(__dirname, 'src/mixins'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@scss': path.resolve(__dirname, 'src/assets/scss'),
        '@images': path.resolve(__dirname, 'src/assets/images'),
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
