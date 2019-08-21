<template>
  <div class="index">
    <!-- 测试px 转化 rem -->
    <p class="test"></p>
    <!-- 测试iconfont图标 -->
    <i class="customer-test"></i>
    <!-- 测试路由跳转动画效果 -->
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
    <!-- vant tabbar 组件 -->
    <van-tabbar  v-model="active">
      <van-tabbar-item
        icon="home-o"
        to="/Index/Home">首页</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        to="/Index/Search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { mapGetters } from 'vuex'
Vue.use(Tabbar).use(TabbarItem)
export default {
  name: 'Index',
  data () {
    return {
      active: 0
    }
  },
  computed: {
    ...mapGetters(['transitionName'])
  }
}
</script>
<style>
.index {
  width: 100%;
  overflow-x: hidden;
}
p.test {
  width: 350px;
  height: 100px;
  background-color: #42b983;
}
</style>
