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
      <div style="padding-top: 20px; margin-top: 20px;" v-show = 'isStart'>
      <Loding v-bind:isStart='isStart'></Loding>
      </div>
    </transition>
  </div>
</template>

<script>
// 局部引用组建
import Loding from './Loding'

export default {
  name: 'center',
  data(){
     return {
      isStart: false
     }
  },

  methods: {
    startGame: function(event) {
      this.isStart = true
    }
  },

  components: {
    'Loding': Loding
  }
}
</script>

<style scoped>
#Center {
  height: 80%; 
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
