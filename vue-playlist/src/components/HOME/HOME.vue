<template>
<div class="container">

    <div class="card">
        <div class="card-body">
            <broadcast></broadcast>
        </div>
    </div>
    
    <div class="card">
                <div class="card-body">
                    <div class="row">
                
                            <div class="col-lg-8 col-md-12">
                                <app-video></app-video>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <medallist></medallist>
                            </div>
                    </div>
                </div>
        </div>
   
    <div class="barbar">
    </div>
    
    <div class="card">
        <div class="card-body">
             <div class="row">
            <div class="col-md-2 col-sm-2 abc">
                <img src="../../assets/zhongguoshike.png">
            </div>
            <div class="col-md-10 col-sm-10">
                <div class="progress jindu">
                    
                    <div class="bg-danger progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 33.33%"></div>
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 33.33%"></div>
                    <div class="bg-warning progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 33.33%"></div>

                </div>
            </div>
        </div>
    <sportEvent></sportEvent>
        </div>
    </div>

   <div class="card">
        <div class="card-body">
            <hero></hero>
        </div>
    </div>

    
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
.zhongguoshike{
    background: url(../../assets/zhongguoshike.jpg);
    background-size: 100%;
}
</style>

