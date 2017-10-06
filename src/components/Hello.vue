<template>
  <div class="hello">
    <div id="kimochi_sekai_text"><h1>{{ msg }}</h1></div>
		<audio controls loop id="audio_player">
			<source src="../assets/ks.mp3" type="audio/mp3">
		</audio>
    <p>track: Lil Yagobo - Kimochi Sekai</p>
		<img src="../assets/craig.png">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: "キモシ セカイ",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	text-align: center;
}

#audio_player {
	margin-top: 20px;
	margin-bottom: 20px;
}

h1, h2 {
	font-size: 44px;
  font-weight: normal;
	color: white;
}

#kimochi_sekai_text {
	background-color: black;
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
