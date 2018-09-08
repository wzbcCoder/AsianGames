<template>
  <div id="app">
    <app-header></app-header>
      <div class="container">
        <app-Navigation></app-Navigation>
        <router-view></router-view>
        
      </div>  
      <app-footer></app-footer>
    
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'


export default {
  name: 'App',
  components: {
    "app-header":Header,
    "app-footer":Footer,
    "app-Navigation":Navigation
  
  },
   mounted () {
     function checkIE(){
      return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style
    }
    if (checkIE) {
      window.addEventListener('hashchange', () => {
        let currentPath = window.location.hash.slice(1)
        console.log(currentPath)
        if (this.$route.path !== currentPath) {
          this.$router.push(currentPath)
        }
      }, false)
    }
  }

}
</script>

<style>
body{
  background-color:#f5f5f5;
}

</style>
