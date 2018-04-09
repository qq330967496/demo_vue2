<template>
  <div>
  <transition :name="transitionName">
    <router-view class="child-view"></router-view>
  </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        console.log(to,from);
        console.log(toDepth,fromDepth);
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/common";

  .child-view {
    position: absolute;
    width:100%;
    transition: all .3s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(pxToRem(750), 0);
    transform: translate(pxToRem(750), 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(pxToRem(-750), 0);
    transform: translate(pxToRem(-750), 0);
  }
</style>
