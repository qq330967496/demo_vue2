<template>
  <div>
    <sh-list title="标题">
      <sh-list-item :scale="[1,1]">
        <template slot="left">
          左侧1
        </template>
        <template slot="right">
          右侧1
        </template>
      </sh-list-item>
      <sh-list-item :scale="[1,2]">
        <template slot="left">
          左侧1
        </template>
        <template slot="right">
          右侧2
        </template>
      </sh-list-item>
      <sh-list-item :col="3" :scale="[1,2,1]">
        <template slot="left">
          左侧1
        </template>
        <template slot="mid">
          中间2
        </template>
        <template slot="right">
          右侧1
        </template>
      </sh-list-item>
      <sh-list-item>
        <template slot="left">
          输入框项
        </template>
        <template slot="right">
          <input type="text" placeholder="请输入内容"/>
        </template>
      </sh-list-item>
      <sh-list-item type="arrow">
        <template slot="left">
          箭头项
        </template>
      </sh-list-item>
      <!--<sh-list-item type="arrow" disabled>
          <template slot="left">
              箭头项 - 不可用
          </template>
      </sh-list-item>-->
      <sh-list-item type="more" is_show_sub="true">
        <template slot="left">
          下拉项
        </template>
        <template slot="sh-list-sub">
          <sh-list type="sub">
            <sh-list-item type="arrow">
              <template slot="left">
                箭头项
              </template>
            </sh-list-item>
            <sh-list-item type="arrow">
              <template slot="left">
                箭头项
              </template>
            </sh-list-item>
          </sh-list>
        </template>
      </sh-list-item>
      <sh-list-item type="switch" v-model="switch_val" label="1">
        <template slot="left">
          开关项
        </template>
        <template slot="right">
          {{switch_val}}
        </template>
      </sh-list-item>
      <sh-list-item type="switch" v-model="switch2_val" label="1">
        <template slot="left">
          开关项 - 单选
        </template>
        <template slot="right">
          {{switch2_val}}
        </template>
      </sh-list-item>
      <sh-list-item type="switch" v-model="switch2_val" label="2">
        <template slot="left">
          开关项 - 单选
        </template>
        <template slot="right">
          {{switch2_val}}
        </template>
      </sh-list-item>
      <sh-list-item type="switch" label="1" disabled>
        <template slot="left">
          开关项 - 不可用
        </template>
        <template slot="right">
        </template>
      </sh-list-item>
      <sh-list-item type="checkbox" v-model="checkbox_val" label="1">
        <template slot="left">
          checkbox
        </template>
        <template slot="right">
          {{checkbox_val}}
        </template>
      </sh-list-item>
      <sh-list-item type="checkbox" v-model="checkbox2_val" label="2">
        <template slot="left">
          checkbox
        </template>
        <template slot="right">
          {{checkbox2_val}}
        </template>
      </sh-list-item>
      <sh-list-item type="checkbox" v-model="radio2_val" label="1">
        <template slot="left">
          checkbox - 单选可取消
        </template>
        <template slot="right">
          {{radio2_val}}
        </template>
      </sh-list-item>
      <sh-list-item type="checkbox" v-model="radio2_val" label="2">
        <template slot="left">
          checkbox - 单选可取消
        </template>
        <template slot="right">
          {{radio2_val}}
        </template>
      </sh-list-item>
      <sh-list-item type="checkbox" label="1" disabled>
        <template slot="left">
          checkbox - 不可用
        </template>
        <template slot="right">
        </template>
      </sh-list-item>
      <sh-list-item type="radio" v-model="radio_val" label="1">
        <template slot="left">
          radio - 单选不可取消
        </template>
        <template slot="right">
          {{radio_val}}
        </template>
      </sh-list-item>
      <sh-list-item type="radio" v-model="radio_val" label="2">
        <template slot="left">
          radio - 单选不可取消
        </template>
        <template slot="right">
          {{radio_val}}
        </template>
      </sh-list-item>
      <sh-list-item type="radio" label="1" disabled>
        <template slot="left">
          radio - 不可用
        </template>
        <template slot="right">
        </template>
      </sh-list-item>
    </sh-list>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        checkbox_val:'',
        checkbox2_val:'',
        switch_val:'',
        switch2_val:'',
        radio_val:'',
        radio2_val:'',
        json_data:{
          radio_items:[],
        }
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
  @import "../assets/css/common";

</style>
