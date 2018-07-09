<template>
  <div>
    <sh-step active="2">
      <sh-step-item
        :icon="icon"
        :active_icon="active_icon"
        text="步骤1"></sh-step-item>
      <sh-step-item
        :icon="icon"
        :active_icon="active_icon"
        text="步骤2"></sh-step-item>
      <sh-step-item
        :icon="icon"
        :active_icon="active_icon"
        text="步骤3"></sh-step-item>
    </sh-step>
  </div>
</template>

<script>
  import icon from '@/assets/img/icon_step_30.png'
  import active_icon from '@/assets/img/icon_step_11.png'
  export default {
    data() {
      return {
        icon:icon,
        active_icon:active_icon,
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
