<template>

    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="paomadeng">
<marquee onMouseOut="this.start()" onMouseOver="this.stop()" scrollamount="5">
                <strong v-rainbow>亚运会英雄联盟(LOL)国家队夺冠</strong>
                </marquee>
            <marquee scrollamount="10"><strong v-rainbow>亚运会百米飞人诞生！中国国家队  苏炳添</strong></marquee>
            <marquee scrollamount="8"><strong v-rainbow>中国男篮八年之后再次登顶亚洲之巅  中国女篮完成救赎夺冠
</strong></marquee>
            <marquee scrollamount="13"><strong v-rainbow>亚运会武术女子枪术、男子棍术夺冠</strong></marquee>
            </div>
            
            
        </div>
    </div>

</template>
<script>
export default {
   
}
</script>

<style>
#home{
    background: url(../assets/yajiada.jpg);
    /* height: 90vh; 相对于页面大小的高度百分比 */
    background-size: 100%;
    padding: 7%;
    background-repeat:no-repeat;
}
.daomadeng{
    margin-bottom: 20px;
    background-color: black;
}
</style>

