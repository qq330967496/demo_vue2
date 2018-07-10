<template>
  <div>
    <!--is_debug-->
    <sh-scroll @pull_down="bindPullDown" ref="shScroll" :can_pull_down="true">
      <div v-for="item in 1000">
        {{item}}
      </div>
      <!--<sh-list>
          <sh-list-item v-for="item in 30" :scale="[1,null,null]">
              <template slot="left">
                  {{item}}<br/>
              </template>
          </sh-list-item>
      </sh-list>-->
    </sh-scroll>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    beforeMount(){
    },
    mounted(){

    },
    methods:{
      bindPullDown(){
        console.log('绑定下拉');
        let _self = this;
        _self.$toast.loading();
        window.setTimeout(function(){
          console.log('关闭下拉');
          _self.$refs.shScroll.closePullDown();
          _self.$toast.close();
        },2000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";

</style>
