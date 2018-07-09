<template>
  <div>
      {{msg}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'demo页面',
      }
    },
    beforeMount(){
//      this.$parent.$parent.$refs.header.$set('title',1);
//      console.log(window.myHeader);
    },
    mounted(){

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
</style>
