module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视窗的宽度，对应的是我们设计稿的宽度，
      viewportHeight: 667, //视窗的高度，对应的是我们设计稿的高度
      unitPrecision: 5, //制定‘px’转换为视窗单位制的小数位数
      viewportUnit: 'vw', //制定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],//制定不需要转换的类，后面再讲
      minPixelValue: 1, //小于或等于1px不转换为视窗单位
      mediaQuery: false, //允许在媒体查询中转换px
      exclude:[/TabBar/]
    }
  }
}
//1.在js中使用正则:/正则相关规则/
//2.exclude中存放的元素必须是正则表达式
//3.按照排除的文件写对应的正则:
//正则的规则:
//1> ^abc:表示匹配的内容，必须以什么内容开头(以abc开头)
//2.> abc$:表示匹配的内容，必须以什么内容结尾(以abc结尾)