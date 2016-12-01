
<template>
    <header>
        {{text}}
        <router-link class="list-group-item" :to="{ path: '/home'}">Home</router-link>
        <router-link class="list-group-item" :to="{ path: '/about'}">About</router-link>
        <router-link class="list-group-item" :to="{ path: '/test'}">Test</router-link>
    </header>
</template>

<script>
    export default{
        data(){
            return{
                text:'头部'
            }
        }
    }
</script>
