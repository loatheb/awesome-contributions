const webpack = require('webpack')

module.exports = {
  // externals: {
  //   'echarts': 'echarts',
  // },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
  ],
}