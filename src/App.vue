<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['transitionName'])
  },
  watch: {
    $route: function (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (to.path === '/Index/Home') {
        this.$store.commit('transitionName', 'slide-right')
      } else if (from.path === '/Index/Home') {
        this.$store.commit('transitionName', 'slide-left')
      } else {
        toDepth < fromDepth ? this.$store.commit('transitionName', 'slide-right') : this.$store.commit('transitionName', 'slide-left')
      }
    }
  }
}
</script>

<style>
@import './assets/fonts/iconfont/iconfont.css';
@import './assets/css/reset.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.Router {
  position: absolute;
  width: 100%;
  transition: all 0.3s ease;
  top: 0px;
}

.slide-left-enter,
.slide-right-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}

</style>
