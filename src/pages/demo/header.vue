<template>
  <div>
    <sh-header :title="title"
               :left_text="left_text"
               :right_text="right_text"
               :bar_style="bar_style"
               :is_transparent="is_transparent"
               :stop_event="stop_event"
               @left="bindLeft"
               @right="bindRight"
    ></sh-header>
    <sh-list title="参数">
      <sh-list-item>
        <template slot="left">
          标题title
        </template>
        <template slot="right">
          <input v-model="title">
        </template>
      </sh-list-item>
      <sh-list-item>
        <template slot="left">
          左侧文案left_text
        </template>
        <template slot="right">
          <input v-model="left_text">
        </template>
      </sh-list-item>
      <sh-list-item>
        <template slot="left">
          右侧文案right_text
        </template>
        <template slot="right">
          <input v-model="right_text">
        </template>
      </sh-list-item>
      <sh-list-item type="checkbox" v-model="bar_style" label="white">
        <template slot="left">
          颜色bar_style - 白
        </template>
        <template slot="right">
        </template>
      </sh-list-item>
      <sh-list-item type="checkbox" v-model="is_transparent" :label="true">
        <template slot="left">
          是否透明is_transparent
        </template>
        <template slot="right">
        </template>
      </sh-list-item>
      <sh-list-item type="checkbox" :scale="[3,1]" v-model="stop_event" label="left">
        <template slot="left">
          阻止默认事件stop_event - 左
        </template>
        <template slot="right">
          {{stop_event}}
        </template>
      </sh-list-item>
      <sh-list-item type="checkbox" :scale="[3,1]" v-model="stop_event" label="right">
        <template slot="left">
          阻止默认事件stop_event - 右
        </template>
        <template slot="right">
          {{stop_event}}
        </template>
      </sh-list-item>
      <sh-list-item type="checkbox" :scale="[3,1]" v-model="stop_event" label="all">
        <template slot="left">
          阻止默认事件stop_event - 全部
        </template>
        <template slot="right">
          {{stop_event}}
        </template>
      </sh-list-item>
    </sh-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title:'水UI - 头部组件',
        left_text:null,
        right_text:null,
        stop_event:'',
        bar_style:'',
        is_transparent:false,
      }
    },
    beforeMount(){
    },
    mounted(){

    },
    methods:{
      bindLeft(){
        if(this.stop_event == 'left' || this.stop_event == 'all'){
          this.$toast.show('左侧点击事件');
        }
      },
      bindRight(){
        if(this.stop_event == 'right' || this.stop_event == 'all'){
          this.$toast.show('右侧点击事件');
        }
      }
    },
    watch:{
      left_text(val){
        if(!val){
          this.left_text = null;
        }
      },
      right_text(val){
        if(!val){
          this.right_text = null;
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";

</style>
