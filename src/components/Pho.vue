<template>
  <div class="pho">
		<h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'pho',
  data() {
    return {
      msg: "キモシ セカイ",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  background-color: black;
  color: white;
}

h1, h2 {
  font-weight: normal;
}

title {
  text-align: center;
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
