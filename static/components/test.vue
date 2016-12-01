<template>
    <div id="test_comp">
        {{msg}}
    </div>
</template>



<script>

    import utils from 'utils';
//    import $ from 'zepto';




    export default{
        data(){
            return {
                msg:''
            };
        },
        mounted: function () {
            var _this = this;
            $.ajax({
                url:'http://localhost:8888/todoList/getData',
                dataType:'jsonp',
                success: function(json){
                    console.log(json);
                    console.log("改变数据-测试");
                    _this.msg='测试';
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










