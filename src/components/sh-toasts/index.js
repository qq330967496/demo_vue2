import sh_toast from './sh-toast.vue';
import Vue from 'vue'

var ToastConstructor = Vue.extend(sh_toast);
var instance = new ToastConstructor({
    el: document.createElement("div")
});

var Show = function (text, time, callback) {
    instance.this_type = '';
    instance.this_content = text;
    instance.this_time = time || 800;
    if (instance.this_time < 0) instance.this_time = 0;
    instance.toShow();
    instance.setTimer();
};

var Success = function (text, time, callback) {
    Show(text || '成功',time,callback);
    instance.this_type = 'success';
};

var Fail = function (text, time, callback) {
    Show(text || '失败',time,callback);
    instance.this_type = 'fail';
};
var Loading = function (text, callback) {
    instance.this_type = 'loading';
    instance.this_content = text || '加载中';
    instance.toShow();
};
var Close = instance.close;


export default {Show, Success, Fail, Loading, Close}
