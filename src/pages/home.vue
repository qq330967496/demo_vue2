<template>
  <div>
    <div>
      {{msg}}
    </div>
    <div @click="toPage('demo')">
      跳转到demo
    </div>
    <div @click="click">
      {{obj.key}}
    </div>
    <input type="text" v-model="str"/>{{str}}|
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: '首页',
        show : false,
        arr: ['a', 'b', 'c'],
        str:'str',
        obj:{
          key:'val'
        },
      }
    },
    mounted(){

    },
    methods:{
      toPage(url){
        this.$router.push("/"+url);
      },
      click(){
//        this.$set(this.items,0,'d');
        this.$set(this.obj,'key','val2');
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/common";
  div {
  }
  .background {
    background: #000;
    width: 100px;
    height: 100px;
  }
</style>

