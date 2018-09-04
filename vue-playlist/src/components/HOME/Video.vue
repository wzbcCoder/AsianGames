<template>
<div class="vd">
    <video id="my-video" class="video-js" controls preload="auto" width="100%" height="100%"
        poster="../../assets/logo.png" data-setup="{}">
        <source src="../../../static/kebi.mp4" type='video/mp4'>
        <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
        </p>
    </video>
</div>
</template>

<style>
.vd{
    width: 100%;
    height: 100%;
}
.video{
    object-fit: fill;
}
</style>
