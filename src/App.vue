<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
@import "./assets/css/common";
html,body,#app{
  width: 100%;
  height: 100%;
  /*overflow-x: hidden;*/
  max-width: 750px;
  margin: 0 auto;
  font-size: pxToRem(32);
}
</style>
