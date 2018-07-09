<template>
  <div>
    <sh-step active="2">
      <sh-step-item
        icon="/images/icon_step_30.png"
        active_icon="/images/icon_step_11.png"
        text="步骤1"></sh-step-item>
      <sh-step-item
        icon="/images/icon_step_30.png"
        active_icon="/images/icon_step_11.png"
        text="步骤2"></sh-step-item>
      <sh-step-item
        icon="/images/icon_step_30.png"
        active_icon="/images/icon_step_11.png"
        text="步骤3"></sh-step-item>
    </sh-step>
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
