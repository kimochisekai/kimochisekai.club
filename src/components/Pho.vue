<template>
  <body>
    <b-container>
      <b-row class="full">
        <b-col class="homeimg">
          <img src="../assets/phoHome.jpg" fluid alt="Home pic"/>
          <div id="parallxWrapper" class="parallax">
            <div class="parallxBackground" data-bind="attr: { style:'-webkit-transform:perspective(1000px) rotateY(' + relativeMouse.x() + 'deg) rotateX(' + relativeMouse.y() + 'deg);transform:perspective(1000px) rotateY(' + relativeMouse.x() + 'deg) rotateX(' + relativeMouse.y() + 'deg)' }">
              <div class="parallxLayerZero">
                <img src="../assets/anime.gif" ></img>
              </div>

              <div class="pcontainer">
                <div class="parallxLayerOne">
                  <span class="text1">気持ち世界</span>
                </div>
                <div class="parallxLayerTwo">
                  <span class="text2">마음 세계의 시작</span>
                </div>
                <div class="parallxLayerThree">
                  <span class="text1">気持ち世界</span>
                </div>
                <audio controls loop>
                  <source src="../assets/ks.mp3" type="audio/mp3">
                </audio>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

    </b-container>
  </body>
</template>

<script>
export default {
  name: 'pho',
  data() {
    return {
      msg: "気持ち せかい",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
}

img {
  width: 100%
}

.pcontainer{
}

.parallax {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%
}

.parallxLayerZero{
  width: 20%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.homeimg {
  position: relative;
  text-align: center;
}

.text1{
  color: black;
  font-size: 600%;
}

.text2{
  color: black;
  font-size: 700%;
}
title {
  text-align: center;
}

a {
  color: #42b983;
}
</style>
