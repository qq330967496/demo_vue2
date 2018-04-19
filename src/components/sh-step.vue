<template>
    <div class="sh-step">
        <slot></slot>
    </div>
</template>
<style>
    .sh-step {
        display: flex;
    }
</style>
<script>
    export default {
        name:'sh-step',
        props: {
            active: String,
        },
        data() {
            return {
                this_active: 0,
            }
        },
        beforeMount: function () {

        },
        mounted: function () {
            this.this_active = parseInt(this.active) || 0;
            this.init();
        },
        methods: {
            init:function(){
                var _self = this;
                if (_self.this_active && this.children && _self.children.length > 0) {
                    _self.children.forEach(function (item, index) {
                        if (index < _self.this_active) {
                            item.this_active = "true";
                        }
                    });
                }
            }
        },
        computed:{
            children: function () {
                return this.$children.filter(function (child) {
                    return child.$options.name === 'sh-step-item';
                });
            }
        },
        watch: {},
    };
</script>