<template>
  <div>
    <div class="padding-mod">
      <sh-btn type="default" @click="show">
        默认
      </sh-btn>
    </div>
    <div class="padding-mod">
      <sh-btn type="primary" @click="success">
        成功
      </sh-btn>
    </div>
    <div class="padding-mod">
      <sh-btn type="danger" @click="fail">
        失败
      </sh-btn>
    </div>
    <div class="padding-mod">
      <sh-btn type="default" @click="loading">
        加载中
      </sh-btn>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    beforeMount() {
    },
    mounted() {

    },
    methods: {
      show(){
        this.$toast.show('多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字');
      },
      success(){
        this.$toast.success();
      },
      fail(){
        this.$toast.fail();
      },
      loading(){
        let _self = this;
        _self.$toast.loading();
        window.setTimeout(function(){
          _self.$toast.success();
          // _self.$toast.close();
        },1000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";

</style>
