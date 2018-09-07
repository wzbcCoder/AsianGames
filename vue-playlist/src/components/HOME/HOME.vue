<template>
<div class="container">

    <broadcast></broadcast>
    <div class="row">
        <div class="col-lg-8 col-md-12">
            <app-video></app-video>
        </div>
        <div class="col-lg-4 col-md-12">
            <medallist></medallist>
        </div>
    </div>
    <div class="barbar">
    </div>
    <!-- <div class="bar2">
    </div>  -->
    <sportEvent></sportEvent>
    <hero></hero>
   <div class="barbar">
    </div>
    
</div>
</template>
<script>

import Broadcast from './Broadcast'
import Video from './Video'
import Medallist from './Medallist'
import Hero from './HERO/Hero'
import SportEvent from './SportEvent'

export default {
    components:{
        
        broadcast:Broadcast,
        "app-video":Video,
        medallist:Medallist,
        hero:Hero,
        sportEvent:SportEvent
    }
}
</script>
<style scope>
.barbar{
  background: url(../../assets/tiao.png);
  margin: 10px auto;
  height: 20px;
  padding: 3px;
}
/* .bar2{
    background: url(../../assets/bar2.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    height: 75px;
} */
</style>

