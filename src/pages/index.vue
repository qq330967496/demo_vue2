<template>
  <div>
    <sh-list>
      <sh-list-item type="arrow" @click="toDemo('list')">
        <template slot="left">
          列表list
        </template>
      </sh-list-item>
      <sh-list-item type="arrow" @click="toDemo('dialog')">
        <template slot="left">
          对话框dialog
        </template>
      </sh-list-item>
      <sh-list-item type="arrow" @click="toDemo('toast')">
        <template slot="left">
          消息弹框toast
        </template>
      </sh-list-item>
      <sh-list-item type="arrow" @click="toDemo('btn')">
        <template slot="left">
          按钮button(btn)
        </template>
      </sh-list-item>
      <sh-list-item type="arrow" @click="toDemo('step')">
        <template slot="left">
          步骤组件step
        </template>
      </sh-list-item>
      <sh-list-item type="arrow" @click="toDemo('flow')">
        <template slot="left">
          流组件flow
        </template>
      </sh-list-item>
      <sh-list-item type="arrow" @click="toDemo('operlist')">
        <template slot="left">
          操作列表operlist
        </template>
      </sh-list-item>
      <sh-list-item type="arrow" @click="toDemo('scroll')">
        <template slot="left">
          滚动组件scroll
        </template>
      </sh-list-item>
      <sh-list-item type="arrow" @click="toDemo('header')">
        <template slot="left">
          头部组件header
        </template>
      </sh-list-item>
    </sh-list>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {}
    },
    beforeMount() {
//      this.$parent.$parent.$refs.header.$set('title',1);
//      console.log(window.myHeader);
    },
    mounted() {

    },
    methods: {
      toBack() {
        this.$router.goBack();
      },
      toDemo(mod) {
        this.$router.push({
          path: '/demo/' + mod,
          params: {}
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/common";

</style>
