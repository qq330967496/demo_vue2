import sh_dialog from '../sh-dialog.vue';
import Vue from 'vue'

var DialogConstructor = Vue.extend(sh_dialog);
var instance = new DialogConstructor({
    el: document.createElement("div")
});

var Alert = function (obj, callback) {
    instance.this_type = 'alert';
    if (typeof obj == "string") {
        instance.this_content = obj;
    } else {
        instance.this_title = obj.title;
        instance.this_content = obj.content;
        instance.this_ok_text = obj.okTxt;
    }
    instance.ok = callback;
    instance.toShow();
};

var Confirm = function (obj, callback) {
    instance.this_type = 'confirm';
    if (typeof obj == "string") {
        instance.this_content = obj;
    } else {
        instance.this_title = obj.title;
        instance.this_content = obj.content;
        instance.this_ok_text = obj.okTxt;
        instance.this_cancel_text = obj.cancelTxt;
    }
    instance.ok = callback;
    instance.cancel = callback;
    instance.toShow();
};

export default {Alert, Confirm}
