<template>
    <div class="sh-flow">
        <slot></slot>
    </div>
</template>
<style>
    .sh-flow {
        background: #ffffff;
    }
</style>
<script>
    export default {
        name:'sh-flow',
        props: {

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