<template>
    <div class="sh-flow-item" :class="{active:is_active}">
        <div class="sh-flow-left">

        </div>
        <div class="sh-flow-right">
            <div class="sh-flow-title">
                <slot name="title"></slot>
            </div>
            <div class="sh-flow-subtitle">
                <slot name="subtitle"></slot>
            </div>
        </div>
    </div>
</template>
<style>
    .sh-flow-item {
        /*padding: 1rem;
        padding-bottom: 0.75rem;
        padding-left: 0;
        position: relative;*/
        display: flex;
        display: -webkit-flex;
    }

    .sh-flow-item:before {
        content: '';
        display: inline-block;
        position: absolute;
        height: 100%;
        width: 0.05rem;
        left: -1.125rem;
        top: 1.5rem;
        background: #e2e2e2;
    }

    .sh-flow-item:last-child {
        border-bottom: 0;
    }

    .sh-flow-item:last-child:before {
        height: 0;
        display: none;
    }

    .sh-flow-left {
        width: 2.25rem;
        position: relative;
    }

    .sh-flow-left:before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 1.35rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 2px;
        height: 100%;
        background: #cccccc;
    }

    .sh-flow-item:last-child .sh-flow-left:before {
        height: 0;
        display: none;
    }

    .sh-flow-left:after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 1.35rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 0.5rem;
        height: 0.5rem;
        background: #cccccc;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .sh-flow-item.active .sh-flow-left:after {
        background: #28bc93;
        z-index: 1;
        -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 188, 147, 0.5);
        -moz-box-shadow: 0 0 0 0.2rem rgba(40, 188, 147, 0.5);
        box-shadow: 0 0 0 0.2rem rgba(40, 188, 147, 0.5);
    }

    .sh-flow-right {
        flex: 1;
        border-bottom: 1px solid #ccc;
    }

    .sh-flow-item:last-child .sh-flow-right {
        border-bottom: 0;
    }

    .sh-flow-title {
        padding-top: 1rem;
        padding-right: 0.5rem;
        margin-bottom: 0.25rem;
        font-size: 0.8rem;
        position: relative;
    }

    .sh-flow-item.active .sh-flow-title {
        color: #28bc93;
    }

    .sh-flow-subtitle {
        padding-right: 0.5rem;
        color: #999999;
        margin-bottom: 0.75rem;
    }
</style>
<script>
    export default {
        name:'sh-flow-item',
        props: {
            active: String
        },
        data() {
            return {
                is_active: false,
            }
        },
        beforeMount: function () {

        },
        mounted: function () {
            this.is_active = (this.active == "true");
        },
        methods: {},
        watch: {},
    };
</script>