<template>
  <div>
      {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'demo',
    data() {
      return {
        msg: 'demo页面',
      }
    },
    methods:{
      toBack(){
        this.$router.goBack();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/common";
  div {
  }
</style>
