<template>
  <div id="Center">
    <!--ready-->
    <div style="padding-top: 20px; margin-top: 20px;" v-show = '!isStart'>
    <img id="ready" src="../assets/ready.jpg"> 
    <v-layout align-center>
        <v-flex xs12 sm4 text-xs-center>
            <v-btn color="primary" v-on:click='startGame()'>Go</v-btn>
        </v-flex>
    </v-layout>
    </div>

    <!--GO-->
     <transition name="fade">
      <div style="padding-top: 20px; margin-top: 20px; width: 100%; hight:100%" v-show = 'isStart'>
      <Loding v-bind:isStart='isStart' v-on:showGame='showMsgFromChild'></Loding>
      <div v-show='this.showGame' id="gameCenter">
        <img src="../assets/plane.jpg" id="plane">
      </div>
      </div>
    </transition>
  </div>
</template>

<script>
// 局部引用组建
import Loding from './Loding'

export default {
  name: 'center',
  props: ['isShow'],
  data(){
     return {
      isStart: false,
      showGame: false,
      positionPoint: 0,
     }
  },

  methods: {
    startGame: function(event) {
      this.isStart = true
    },
    showMsgFromChild: function(data) {
      console.log(data);
      this.showGame = data;
    },
  },

created(){
  var _self = this;
  // 初始化时 全局监听键盘事件
  document.onkeydown = function(e){
      var key = window.event.keyCode;
      if(key == 38 ){
         console.log('up')
         var plane = document.getElementById('plane');
         plane.style.top=(plane.offsetTop+20)+'px';
      }
      if(key == 40 ){
         console.log('down')
         var plane = document.getElementById('plane');
         plane.style.down=(plane.offsetDown-20)+'px';
      }
  }
},

  components: {
    'Loding': Loding
  }
}
</script>

<style scoped>
#Center {
  height: 84%; 
  width: 100%;
  background-image: url('../assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  background-position: center 0;
  -o-background-size: cover;
}

#ready {
  width: 200px;
  height: 180px;
  text-align: center;
  margin-left: 45%;
  margin-top: 2%;
}

#plane{
  width: 100px;
  height: 100px;
  float: left;
  margin-left: 10px;
  position:absolute；
}

#gameCenter {
  width: 80%;
  height:360px;
  border: solid 1px;
  text-align: center;
  margin-left: 10%;
  padding-bottom:10px;
  padding-top:10px;
}

.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: #ef7e7e;
}

.layout{
  margin-left: 40.5%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
