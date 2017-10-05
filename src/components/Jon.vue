<template>
  <div class="jon">
    <h1>{{ msg }}</h1>
    <h2>Welcome to Jon's page</h2>
    <img src="../assets/robotchild.jpg" alt="Robot Child">
  </div>
</template>

<script>
export default {
  name: 'jon',
  data() {
    return {
      msg: 'Memes',
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
</style>
