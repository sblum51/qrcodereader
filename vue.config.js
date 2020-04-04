const CompressionPlugin = require('compression-webpack-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  chainWebpack(config) {
    //config.plugins.delete('prefetch');
    config.plugin('CompressionPlugin').use(CompressionPlugin);
    config.plugin('VuetifyLoaderPlugin').use(VuetifyLoaderPlugin);
    //config.plugins.delete('preload');
  },
  pluginOptions: {
      webpackBundleAnalyzer: {
        openAnalyzer: true,
         analyzerPort: 4000,
      }
    },
  devServer: { https: true },
  pwa: {
    themeColor: "#1976d2"
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
