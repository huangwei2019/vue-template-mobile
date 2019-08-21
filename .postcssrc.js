// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 75, //根元素尺寸
      propList: ['*'], //需要转换的属性，*表示全部属性都转换
      unitPrecision: 5, //px转rem后保留小数的位数
      selectorBlackList: [ 'van-' ], //选择器黑名单，排除转换列表中的选择器
      replace: true,
      mediaQuery: false, //false表示媒体查询的尺寸px不转换为rem
      minPixelValue: 0 //设置最小的转换尺寸，此尺寸以下的值不转换
    }
  }
}
