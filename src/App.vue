<template>
  <div id="app">
    <sh-header ref="header" title="ETC车宝"></sh-header>
    <div id="main">
      <transition>
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    /*watch: {
      '$route' (to, from) {
        console.log('路由监听',to,from);
        // 如果isBack为true时，证明是用户点击了回退，执行slide-right动画
        let isBack = this.$router.isBack;
        if (isBack) {
          this.transitionName = 'slide-right';
        } else {
          this.transitionName = 'slide-left';
        }
        // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
        this.$router.isBack = false;
      }
    }*/
  }
</script>

<style lang="scss">
  @import "./assets/css/common";

  html, body {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: 'Microsoft Yahei', '宋体', Arial;
    /*background: #ccc;*/
  }

  html, body, #app {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    max-width: 750px;
    margin: 0 auto;
    font-size: pxToRem(32);
  }

  #app {
    display: flex;
    flex-direction: column;
    /*background: #ebebeb;*/
    * {

    }
  }

  #main {
    flex: 1;
    overflow-y: auto;
  }
</style>
