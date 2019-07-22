<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'app',
  components:{
    Footer
  }
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height 100%
    width 750px
</style>






