<template>
  <div>
    <div class="padding-mod">
      <sh-btn type="default">
        默认default
      </sh-btn>
    </div>
    <div class="padding-mod">
      <sh-btn type="primary">
        主要primary
      </sh-btn>
    </div>
    <div class="padding-mod">
      <sh-btn type="danger">
        危险danger
      </sh-btn>
    </div>
    <div class="padding-mod">
      <sh-btn type="disabled">
        不可用disabled
      </sh-btn>
    </div>
    <div class="padding-mod">
      <sh-btn class="myBtn">
        自定义按钮
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
