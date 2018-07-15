<template>
  <div id="app">
    <smart-header></smart-header>

    <router-view></router-view>
  </div>
</template>

<script>
import SmartHeader from '@/components/SmartHeader'

export default {
  name: 'App',

  components: {
    SmartHeader
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  background-image: url(/static/images/bg_1.jpg);
  background-size: 100%;
  background-color: transparent;
}

</style>
