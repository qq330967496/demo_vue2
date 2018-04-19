<template>
    <div class="sh-step-item" :class="{active:this_active}">
        <div class="sh-step-item-icon">
            <img :src="icon" alt="" v-if="!this_active"/>
            <img :src="active_icon" alt="" v-if="this_active"/>
        </div>
        <div class="sh-step-item-text">
            {{text}}
        </div>
    </div>
</template>
<style>
    .sh-step-item {
        flex: 1;
        text-align: center;
    }
    .sh-step-item.active .sh-step-item-text{
        color: #d27e00;
    }

    .sh-step-item-icon {
        height: 1.775rem;
        position: relative;
    }

    .sh-step-item-icon:before {
        content: '';
        height: 2px;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        background: #cbcbcb;
        right:50%;
    }
    .sh-step-item:first-child .sh-step-item-icon:before{
        width:0;
        height:0;
        display: none;
    }
    .sh-step-item.active .sh-step-item-icon:before{
        background: #eabf50;
    }

    .sh-step-item-icon > img {
        position: absolute;
        z-index:1;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        width: 1.775rem;
    }

    .sh-step-item-text {
        color: #333;
        margin-top: 0.5rem;
    }
</style>
<script>
    export default {
        name:'sh-step-item',
        props: {
            icon: String,
            active_icon: String,
//            active:String,
            text: String,
        },
        data() {
            return {
                this_active:false,
            }
        },
        beforeMount: function () {

        },
        mounted: function () {
//            this.this_active = (this.active=="true");
        },
        methods: {
        },
        watch: {},
    };
</script>