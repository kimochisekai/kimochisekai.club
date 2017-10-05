<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/videoseries?list=PLjACkj1PqNlQtLKKQB4njWkUtA3vUQ-7D" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'sean',
  data() {
    return {
      msg: '일하면서 듣자 얘들아',
    };
  },
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