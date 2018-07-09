<!--
1.0.1 使用line-height处理居中，不支持多行按钮
-->
<template>
    <div class="sh-btn"
         @click="bindClick"
         :class="{
                    default:type==='default',
                    primary:type==='primary',
                    danger:type==='danger',
                    disabled:type==='disabled',
                }">
        <slot></slot>
    </div>
</template>
<style>
    .sh-btn {
        text-align: center;
        /*padding: 0.75rem 0;*/
        height: 2.25rem;
        line-height: 2.25rem;
        box-sizing: border-box;
        background: transparent;
        color: #d27e00;
        border: 1px solid #eabf4f;

        -webkit-border-radius: 0.25rem;
        -moz-border-radius: 0.25rem;
        border-radius: 0.25rem;
    }

    .sh-btn:active {
        -webkit-filter: brightness(0.9);
        filter: brightness(0.9);
    }

    .sh-btn.default:active {
        -webkit-filter: brightness(1);
        filter: brightness(1);
        background-color: #e1e1e1;
    }

    .sh-btn.primary {
        color: #8e4d00;
        background-color: #eabf4f;
        border-color: #eabf4f;
    }

    .sh-btn.danger {
        color: #fff;
        background-color: #e64340;
        border-color: #e64340;
    }

    .sh-btn.disabled {
        color: #fff;
        background-color: #999;
        border-color: #999;
    }

</style>
<script>
    export default {
        name: 'sh-btn',
        props: {
            type: {
                validator(value) {
                    return ['default', 'primary', 'danger', 'disabled'].indexOf(value) > -1;
                },
                require: false,
            },
            textColor: {
                require: false,
            },
            bgColor: {
                require: false,
            },
        },
        data() {
            return {}
        },
        beforeMount: function () {

        },
        mounted: function () {
        },
        methods: {
            bindClick() {
                this.$emit('click');
            }
        },
        watch: {},
        computed: {}
    };
</script>
