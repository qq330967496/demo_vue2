<template>
    <div class="sh-operlist">
        <div class="sh-operlist-main" :class="{'sh-operlist-main-show':show}">
            <div class="sh-operlist-title" v-if="title">
                {{title}}
            </div>
            <div class="sh-operlist-content">
                <slot></slot>
            </div>
            <div class="sh-operlist-footer">
                <sh-btn type="primary" @click="ok()">
                    确定
                </sh-btn>
            </div>
        </div>
        <div class="sh-mask" @click.stop="close()" :class="{'sh-hide':!show}"></div>
    </div>
</template>
<style>
    .sh-operlist {
        /*position: fixed;*/
        /*top: 0;*/
        /*left: 0;*/
        /*height: 100%;*/
        /*width: 100%;*/
        /*z-index: 10000;*/
    }
    /*TODO 通用*/
    .sh-hide{
        display: none;
    }

    .sh-operlist-main {
        position: absolute;
        width: 100%;
        background: #fff;
        z-index: 10001;
        bottom: -100%;

        display: none;
        animation: slideDown 0.3s;
    }

    .sh-operlist-title {
        text-align: center;
        padding: 0.75rem 0.2rem;
        border-bottom: 1px solid #ccc;
    }

    .sh-operlist-content {
        max-height: 20rem;
        overflow: auto;
    }

    .sh-operlist-footer {
        border-top: 1px solid #ccc;
        padding: 0.5rem;
    }

    .sh-operlist-main-show{
        bottom: 0;
        display:block;

        animation: slideUp 0.3s;
    }

    @keyframes slideUp {
        0% {
            bottom: -100%;
        }
        100% {
            bottom:0;
        }
    }
    @keyframes slideDown {
        0% {
            bottom:0;
        }
        100% {
            bottom: -100%;
        }
    }
    @-webkit-keyframes slideUp {
        0% {
            bottom: -100%;
        }
        100% {
            bottom:0;
        }
    }
    @-webkit-keyframes slideDown {
        0% {
            bottom:0;
        }
        100% {
            bottom: -100%;
        }
    }
</style>
<script>
    export default {
        name: 'sh-operlist',
        props: {
            title: {
                type: String,
                require: false,
            },
            show: {
                require: false,
                default: false,
            },
        },
        data() {
            return {
                this_show: '',
            }
        },
        beforeMount: function () {

        },
        mounted: function () {
        },
        methods: {
            close() {
                this.$emit('update:show',false);
            },
            ok() {
                this.$emit('ok');
            }
        },
        watch: {},
    };
</script>