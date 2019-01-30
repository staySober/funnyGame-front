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
    <div style="padding-top: 20px; margin-top: 20px;" v-show = 'isStart'>
    start ...................
    </div>
  </div>
</template>

<script>
export default {
  name: 'center',
  data(){
     return {
      isStart: false
     }
  },
  methods : {
    startGame: function(event) {
      this.isStart = true
    }
  },
}
</script>

<style scoped>
div {
  height: 80%; 
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
</style>
