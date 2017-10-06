<template>
  <div class="container">
    <weather></weather>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import Weather from '@/components/Weather'
export default {
  name: 'sean',
  data() {
    return {
      msg: 'Fkn Lit!!',
    };
  },
  components:{
    'weather': Weather
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.container{
  text-align: center;
}

</style>