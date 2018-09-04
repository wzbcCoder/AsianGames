<template>
<div class="home">

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
    <div class="bar2">
    </div>
    <router-view></router-view>
   <div class="barbar">
    </div>
    
</div>
</template>
<script>

import Broadcast from './Broadcast'
import Video from './Video'
import Medallist from './Medallist'
import Hero from './HERO/Hero'

export default {
    components:{
        
        broadcast:Broadcast,
        "app-video":Video,
        medallist:Medallist,
        hero:Hero
    }
}
</script>
<style>
.barbar{
  background: url(../../assets/tiao.png);
  margin: 10px auto;
  height: 4px;
  padding: 2px;
}
.bar2{
    background: url(../../assets/bar2.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    height: 75px;
}
</style>

