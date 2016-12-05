/**
 * Created by Sever on 2016/9/27.
 */
// var $ = require('zepto');
var utils = require('utils');
// var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);

//固定组件
var CompHeader = require('../components/header.vue');
var CompFooter = require('../components/footer.vue');

//路由组件
var Home = require('../components/home.vue');
var About = require('../components/about.vue');
var Test = require('../components/test.vue');

utils.adaptive();

//组件
Vue.component('comp-header',CompHeader);
Vue.component('comp-footer',CompFooter);

const router = new VueRouter({
    base:__dirname,
    routes:[
        {path:'/', component: Home},
        {path:'/home', component: Home},
        {path:'/about',component: About},
        {path:'/test', component: Test},
    ]
});

const app = new Vue({
    //路由
    router: router,
    //要挂载的dom元素
    el:'#app',
    //模板
    template:'',
    //数据
    data:{

    },
    beforeCreate: function () {
        utils.adaptive();
        console.log("生命周期-创建event实例前");
    },
    created: function () {
        console.log("生命周期-创建event实例后");
    },
    beforeMount: function () {
        console.log("生命周期-挂载到#app前");
    },
    mounted: function () {
        var _this = this;
        console.log("生命周期-挂载到#app后");
    },
    beforeUpdate:function(){
        console.log("生命周期-数据更新前");
    },
    updated:function(){
        console.log("生命周期-数据更新后");
    },
    actived:function(){
        console.log("生命周期-组件被激活");
    },
    deactived:function(){
        console.log("生命周期-组件被移除");
    },
    beforeDestroy:function(){
        console.log("生命周期-销毁前");
    },
    destroyed:function(){
        console.log("生命周期-销毁后");
    },
    //各种方法
    methods: {

    }
});
