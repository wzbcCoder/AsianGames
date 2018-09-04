<template>
<div class="home">

    <broadcast></broadcast>
    <div class="row">
        <div class="col-md-8 col-sm-12">
            <app-video></app-video>
        </div>
        <div class="col-md-4 col-sm-12">
            <medallist></medallist>
        </div>
        
    </div>
</div>
</template>
<script>

import Broadcast from './Broadcast'
import Video from './Video'
import Medallist from './Medallist'

export default {
    components:{

        broadcast:Broadcast,
        "app-video":Video,
        medallist:Medallist,
        // "Normal":Normal,
    }
}
</script>
