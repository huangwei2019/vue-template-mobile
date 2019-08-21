# Instructions

```
1.纯净版开箱即用移动端vue单页项目模板，基于vue-cli 2.9.6 构建
2.采用rem适配方案，利用postcss-pxtorem,amfe-flexible自动转化px
3.引入iconfont字体库
4.引入vuex状态管理
5.添加路由切换动画
6.引入vant UI库
7.接入ESlint代码检测
8.引入babel-plugin-import插件,将 import 的写法自动转换为按需引入的方式
9.解决build后文件引用路径报错问题

```

## Use Component and Plugin

```
UI:
Vant

Fonts:
Iconfont

```

Library:
[vuex](https://vuex.vuejs.org/zh/guide/)

Plugin:
[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
[postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
[amfe-flexible](https://github.com/amfe/lib-flexible)

## Modify Config

```
1.开启自动打开浏览器 ==> package.json ==> 修改 scripts/dev 新增 --open选项
2.iconfont 自定义类名设置 ==> icontfont官网选择icon ==> 添加入库 ==> 添加至项目 ==> 我的项目 ==> 更多操作 ==> 编辑项目 ==> 修改FontClass/Symbol前缀(customer-) ==> 下载至本地 ==> 解压至项目==> iconfont.css ==> 修改 类名选择器(.iconfont ==> [class*='customer-'],class^='customer-'])

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
