<template>
    <div id="test_comp">
        {{msg}}
        <br>
        <button @click="showAlert">警告框</button>
        <button @click="showPrompt">提示框</button>
        <button @click="showConfirm">确认框</button>
    </div>
</template>



<script>

    import utils from 'utils';

    export default{
        data(){
            return {
                msg:''
            };
        },
        mounted: function () {
            var _this = this;
            /*$.ajax({
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
             });*/
            _this.msg='测试';
        },
        methods: {
            showAlert:function(){
                utils.alert('警告框警告框警告框警告框警告框警告框警告框警告框警告框警告框警告框警告框警告框警告框');
            },
            showPrompt:function(){
                utils.prompt('提示框提示框提示框提示框提示框提示框提示框提示框提示框提示框提示框提示框提示框');
            },
            showConfirm:function(){
                utils.confirm('确认框确认框确认框确认框确认框确认框确认框确认框确认框确认框',function(flag){
                   if(flag){
                       utils.alert('是');
                   } else{
                       utils.alert('否');
                   }
                });
            },
        }
    }
</script>










