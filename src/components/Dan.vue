<template>
  <div class="dan">
    <h1>{{ msg }}</h1>
		<h2>{{message}}</h2>
    <marquee behavior="scroll" direction="left">
    あの交差点で
    みんながもしスキップをして
    もしあの街の真ん中で
    手をつないで空を見上げたら
    もしもあの街のどこかで
    チャンスがつかみたいのなら
    まだ泣くのには早いよね
    ただ前に進むしかないわいやいや
     出して しまえばいいの
    ぜんぜん しないの
    つまらないでしょ
    ヘッドフォンかけて
    リズムに乗せて
    WAYWAY 空けて あたしの道を
     進む 色々なこと
    どんどん キテる? あなたのキモチ
    POIPOI 捨てる悪い子はだれ?
    そうそう いいコ ああ
    You Make Me Happy
    Every Day 
    Every Time is 
    メリーゴーランド 乗りたいの
    Every Day 
    Every Time is 
    たぶん そんなんじゃ ダメでしょ
     出して しまえばいいの
    ぜんぜん しないの
    つまらないでしょ
    ヘッドフォンかけて
    リズムに乗せて
    WAYWAY 空けて あたしの道を
    うぇいうぇいうぇい
    うぇいうぇい
    うぇいうぇい
    うぇいうぇいうぇい
    うぇいうぇい
    うぇいうぇいうぇい
    うぇいうぇい
    うぇいうぇい
    うぇいうぇいうぇい
    うぇいうぇい
    </marquee>
    <iframe width="50%" height="200" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344283958&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
    <iframe width="50%" height="200" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345220153&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
		<iframe width="50%" height="200" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345030803&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
	</div>
</template>

<script>
export default {
  name: 'dan',
  data() {
    return {
      title: 'Dans page',
			message: 'What\'s Dan listening to?',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dan {
	text-align: center;
}

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
