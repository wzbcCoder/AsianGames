<template>
    <div class="IntroductionToAthletes">
        运动员介绍
        <Normal></Normal>
        <router-view></router-view>
    
    </div>

</template>

<script>

import Normal from './Normal'


export default {
  name: 'IntroductionToAthletes',
  components: {
   "Normal":Normal,
   

  }
}
</script>

<style scoped>


</style>
