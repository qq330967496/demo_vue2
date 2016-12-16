<template>
    <div>
        {{msg}}
        <input type="checkbox" @change="change($event)" v-model="item.status"/>
    </div>
</template>



<script>

    import utils from 'utils';
//    import $ from 'zepto';

    export default{
        data(){
            return{
                msg:'',
                item:{
                    status:'1'
                }
            }
        },
        beforeCreate: function () {
            utils.adaptive();
        },
        mounted: function () {
            var _self = this;
            $.ajax({
                url:'',
                success: function(json){
                    console.log("改变数据-首页");
                    _self.msg='首页';
                },
                error(){
                    alert("加载失败..");
                }
            });
        },
        methods: {
            change:function(event){
                console.log(event.target.checked);
            }
        }
    }
</script>