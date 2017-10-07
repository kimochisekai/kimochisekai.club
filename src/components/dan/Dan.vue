<template>
  <div class="dan">
		<img src="../../assets/kawaii.gif" id="logo_img"/>
		<h2>{{message}}</h2>
		<japScroll></japScroll>
		<div style="margin-top:40px;">
			<iframe width="50%" height="200" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/357876454&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
		</div>
	</div>
</template>

<script>
import japScroll from './japScroll'

const store = {
	state: {
		message: 'Feelings By Dan',
	}
};

export default {
  name: 'dan',
	components: {
		japScroll,
	},
  data() {
    return {
			message: store.state.message,
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dan {
	text-align: center;
	height: 100vh;
  background: 'red'; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left, rgba(252, 53, 76, 1) , rgba(10, 191, 188, 1)); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, rgba(252, 53, 76, 1), rgba(10, 191, 188, 1)); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, rgba(252, 53, 76, 1), rgba(10, 191, 188, 1)); /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right, rgba(252, 53, 76, 1) , rgba(10, 191, 188, 1)); /* Standard syntax */
}

#logo_img {
	margin: 40px;
}

h2 {
	color: white;
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
