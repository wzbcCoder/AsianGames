<template>

    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="paomadeng">
<marquee onMouseOut="this.start()" onMouseOver="this.stop()" scrollamount="5">
                <a target="_block" href="https://www.baidu.com/">写上你想写的字</a>
                </marquee>
            <marquee scrollamount="10">写上你想写的字</marquee>
            <marquee scrollamount="8">写上你想写的字</marquee>
            <marquee scrollamount="13">写上你想写的字</marquee>
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

