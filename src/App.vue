<template>
  <div id="app">
    <site-header></site-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'app',
  components:{
    'site-header': Header
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

*{
  margin:0;
  padding:0;
}
</style>
