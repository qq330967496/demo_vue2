<template>
    <div class="sh-list" :class="{sub:type=='sub'}">
        <div class="sh-list-title" v-if="title">
            {{title}}
        </div>
        <div class="sh-list-items">
            <slot></slot>
        </div>
    </div>
</template>
<style>
    .sh-list {
        background: #fff;
    }
    .sh-list.sub{
        border-top:1px solid #ebebeb;
        margin-left: 1rem;
    }

    .sh-list-title {
        border-bottom: 1px solid #ebebeb;
        padding: 1rem;
    }

    .sh-list-items {
        /*margin-left: 0.75rem;*/
    }
</style>
<script>
    export default {
        name:'sh-list',
        props: {
            title: {
                type: String,//类型：checkbox,arrow
                required: false,
            },
            type:String,
        },
        data() {
            return {
                msg: '',
            }
        },
        beforeMount: function () {

        },
        mounted: function () {
        },
        methods: {

        },
        watch: {},
    };
</script>