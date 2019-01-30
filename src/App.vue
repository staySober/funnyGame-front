<template>
  <div id="App">
   <Header></Header>
   <Center></Center>
   <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header' 
import Footer from './components/Footer' 
import Center from './components/Center' 

export default {
  name: 'App',
  components : {
    'Header': Header,
    'Footer': Footer,
    'Center': Center,
  }
}
</script>

<style scoped>
#App {
   height: 100%;
}
</style>
