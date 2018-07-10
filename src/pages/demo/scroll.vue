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
      return {}
    },
    beforeMount() {
    },
    mounted() {

    },
    methods: {
      bindPullDown() {
        let self = this;
        console.log('绑定下拉');
        this.$toast.loading();
        window.setTimeout(() => {
          console.log('关闭下拉');
          self.$toast.close();
          self.$refs.shScroll?self.$refs.shScroll.closePullDown():'';
        }, 2000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";

</style>
