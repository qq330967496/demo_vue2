<template>
  <div>
    <div class="padding-mod">
      <sh-btn @click="toShow" type="primary">
        打开列表
      </sh-btn>
    </div>

    <sh-operlist title="请选择" @ok="bindOk" :show.sync="show_oper">
      <sh-list>
        <sh-list-item type="checkbox" v-model="checkbox_val[0]" label="1">
          <template slot="left">
            123123
          </template>
        </sh-list-item>
        <sh-list-item type="checkbox" v-model="checkbox_val[1]" label="2">
          <template slot="left">
            123123
          </template>
        </sh-list-item>
        <sh-list-item :col="3" :scale="[0,1,0]">
          <template slot="mid">
            123123
          </template>
        </sh-list-item>
      </sh-list>
    </sh-operlist>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkbox_val:[],
        show_oper:false,
      }
    },
    beforeMount(){
    },
    mounted(){

    },
    methods:{
      toShow(){
        this.show_oper = !this.show_oper;
      },
      bindOk(){
        console.log('点击确定');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";

</style>
