<template>
  <div class="pho">
		<h1>{{msg}}</h1>
    <video width="320" height="400" controls>
       <source src="../assets/dan.mp4" type="video/mp4">
       Your browser does not support the video tag.
     </video>
  </div>
</template>

<script>
export default {
  name: 'pho',
  data() {
    return {
      msg: "Pho's new page",
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
