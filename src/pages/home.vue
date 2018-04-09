<template>
  <div>
    <div>
      {{msg}}
    </div>
    <div @click="toPage('demo')">
      跳转到demo
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: '首页',
        show : false
      }
    },
    mounted(){

    },
    methods:{
      toPage(url){
        this.$router.push("/page/"+url);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/common";
  div {
  }
  .background {
    background: #000;
    width: 100px;
    height: 100px;
  }
</style>

