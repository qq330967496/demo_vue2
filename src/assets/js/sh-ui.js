/**
 * 水sh-ui
 */

import Dialog from '../../components/sh-dialog.vue';
import Flow from '../../components/sh-flow.vue';
import Flow_item from '../../components/sh-flow-item.vue';
import List from '../../components/sh-list.vue';
import List_item from '../../components/sh-list-item.vue';
import Step from '../../components/sh-step.vue';
import Step_item from '../../components/sh-step-item.vue';
import Operlist from '../../components/sh-operlist.vue';
import Btn from '../../components/sh-btn.vue';
import Scroll from '../../components/sh-scroll.vue';
import Toasts from '../../components/sh-toasts';
import Dialogs from '../../components/sh-dialogs';
import Header from '../../components/sh-header.vue';

var install = function (Vue, config = {}) {
  console.log("水UI - by Severho");
  if (install.installed) return;
  Vue.component(Dialog.name, Dialog);
  Vue.component(Flow.name, Flow);
  Vue.component(Flow_item.name, Flow_item);
  Vue.component(List.name, List);
  Vue.component(List_item.name, List_item);
  Vue.component(Step.name, Step);
  Vue.component(Step_item.name, Step_item);
  Vue.component(Operlist.name, Operlist);
  Vue.component(Btn.name, Btn);
  Vue.component(Scroll.name, Scroll);
  Vue.prototype.$dialog = {
    alert: Dialogs.Alert,
    confirm: Dialogs.Confirm
  };
  Vue.prototype.$toast = {
    show: Toasts.Show,
    success: Toasts.Success,
    fail: Toasts.Fail,
    loading: Toasts.Loading,
    close: Toasts.Close,
  };
  Vue.component(Header.name, Header);
};

// 移动端ios:active伪类失效的兼容解决：
document.body.addEventListener("touchstart", function () {
}); //空函数
// 利用Vue.user进行安装
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Dialog,
  Flow,
  Flow_item,
  List,
  List_item,
  Step,
  Step_item,
  Operlist,
  Btn,
  Scroll,
  Header
}
