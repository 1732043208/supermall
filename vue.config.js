module.exports = {
  configureWebpack: {
    // devServer: {
    //   host: '192.168.100.30',
    //   port: 8080
    // },
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
