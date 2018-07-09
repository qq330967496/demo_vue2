<template>
  <div>
    <sh-list>
      <sh-list-item type="arrow" @click="showDialog('alert')">
        <template slot="left">
          警告框
        </template>
      </sh-list-item>
      <sh-list-item type="arrow" @click="showDialog('confirm')">
        <template slot="left">
          确认框
        </template>
      </sh-list-item>
      <sh-list-item type="arrow" @click="showDialog('common')">
        <template slot="left">
          自定义对话框
        </template>
      </sh-list-item>
    </sh-list>

    <sh-dialog :show.sync="show_common" @close="closeCommon">
      <div style="background:#fff;">
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
        自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义自定义
      </div>
    </sh-dialog>
    <!--
        <sh-dialog type="alert"
                   :show.sync="show_alert"
                   @ok="bindOk"
                   title="警告"
                   alert_ok="好的">
            <template slot="content">
                这是一个警告框
            </template>
        </sh-dialog>

        <sh-dialog type="confirm"
                   :show.sync="show_confirm"
                   @ok="bindOk"
                   @cancel="bindCancel"
                   title="确认框"
                   confirm_cancel="不了"
                   confirm_ok="好的">
            <template slot="content">
                这是一个确认框
            </template>
        </sh-dialog>-->
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        show_common: false,
      }
    },
    beforeMount() {
    },
    mounted() {

    },
    methods: {
      showDialog(type) {
        var _self = this;
        if (type == 'alert') {
          /*this.$dialog.alert('这是一个警告框！',function(){
              console.log('警告框回调');
          });*/
          _self.$dialog.alert({
            title: '警告',
            content: '这是一个警告框！',
          }, function () {
            console.log('警告框回调');
            _self.$toast.show('点击确认');
          });
        } else if (type == 'confirm') {
          _self.$dialog.confirm('这是一个确认框？', function (flag) {
            if (flag) {
              console.log('确认框-确认');
              _self.$toast.success('确认');
            } else {
              console.log('确认框-取消');
              _self.$toast.fail('取消');
            }
          });
        } else if (type == 'common') {
          _self.show_common = !_self.show_common;
        }
      },
      bindOk() {
        console.log('确定回调');
      },
      bindCancel() {
        console.log('取消回调');
      },
      closeCommon() {
        console.log('通用窗口关闭回调');
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";

</style>
