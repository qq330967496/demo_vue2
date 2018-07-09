<template>
  <div>
    <div class="tab_mod">
      <div class="tab" :class="{actived:selected_tab==item}" v-for="item in tabs" @click="changeTab(item)">
        {{item}}
      </div>
    </div>
    <div class="item_mod" v-if="selected_tab == 'tab1'">
      C1
    </div>
    <div class="item_mod" v-if="selected_tab == 'tab2'">
      C2
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        tabs:['tab1','tab2'],
        selected_tab:'tab1'
      }
    },
    mounted(){

    },
    methods:{
      changeTab(item){
        this.selected_tab = item;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .tab_mod{
    .tab{
      display: inline-block;
      &.actived{
        background: #f00;
      }
    }
  }
</style>

