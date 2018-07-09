<template>
  <div>
    <sh-flow>
      <sh-flow-item active="true">
        <template slot="title">
          系统退款完成
        </template>
        <template slot="subtitle">
          退款金额：￥100.00
        </template>
        <template slot="time">
          2016-01-02 16:00:00
        </template>
      </sh-flow-item>
      <sh-flow-item>
        <template slot="title">
          ETC车宝同意退款申请
        </template>
        <template slot="subtitle">
          正在为您办理退款
        </template>
        <template slot="time">
          2016-01-02 16:00:00
        </template>
      </sh-flow-item>
      <sh-flow-item>
        <template slot="title">
          用户发起退款申请
        </template>
        <template slot="subtitle">
          <p>退款原因：质量问题</p>
          <p>退款说明：无</p>
        </template>
        <template slot="time">
          2016-01-02 16:00:00
        </template>
      </sh-flow-item>
    </sh-flow>
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";

</style>
