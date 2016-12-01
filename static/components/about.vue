<template>
    <div>
        {{msg}}
    </div>
</template>



<script>

    import utils from 'utils';
//    import $ from 'zepto';

    export default{
        data(){
            return{
                msg:''
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
                    console.log("改变数据-关于");
                    _self.msg='关于';
                },
                error(){
                    alert("加载失败..");
                }
            });
        },
        methods: {

        }
    }
</script>