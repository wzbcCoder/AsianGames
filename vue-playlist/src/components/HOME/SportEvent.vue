<template>
    <ul class="intro-cont">

        <!-- <li>
            <a href="#" target="_blank">
                <img src="http://img1.gtimg.com/sports/pics/hv1/166/102/2287/148738351.png">
            </a>1
        </li>
        <li>
            <a href="#" target="_blank">
                <img src="http://img1.gtimg.com/sports/pics/hv1/165/102/2287/148738350.png">

            </a>2
        </li>
        <li>
            <a href="#" target="_blank">
                <img src="http://img1.gtimg.com/olympic/pics/hv1/63/82/2289/148863198.png">

            </a>3
        </li>
        <li>
            <a href="#" target="_blank">
                <img src="http://img1.gtimg.com/sports/pics/hv1/154/102/2287/148738339.png">

            </a>4
        </li>
        <li>
            <a href="#" target="_blank">
            <img src="http://img1.gtimg.com/sports/pics/hv1/128/102/2287/148738313.png">

            </a>5
        </li>
        <li>
            <a href="#" target="_blank">
                <img src="http://img1.gtimg.com/sports/pics/hv1/157/102/2287/148738342.png">

            </a>6
        </li>
        <li>
            <a href="#" target="_blank">
                <img src="http://img1.gtimg.com/sports/pics/hv1/125/102/2287/148738310.png">

            </a>7
        </li>
        <li>
            <a href="#" target="_blank">
                <img src="http://img1.gtimg.com/sports/pics/hv1/129/102/2287/148738314.png">

            </a>8
        </li>
        <li>
            <a href="#" target="_blank">
                <img src="http://img1.gtimg.com/sports/pics/hv1/133/102/2287/148738318.png">

            </a>
        </li>
        <li>
            <a href="#" target="_blank">
                <img src="http://img1.gtimg.com/sports/pics/hv1/121/102/2287/148738306.png">

            </a>
        </li> -->
        <li v-for="(img,index) in imgs" :key="img.index" @mouseenter="enter(index)" @mouseleave="leave()">
            <a href="#" target="_blank" v-bind:class="index" >
                <img v-bind:src="img">

            </a>
        </li>
    </ul>
</template>
<script>
export default {
    name:"SportEvent",
    data(){
        return{
            imgs:[
                "http://img1.gtimg.com/sports/pics/hv1/166/102/2287/148738351.png",
                "http://img1.gtimg.com/sports/pics/hv1/165/102/2287/148738350.png",
                "http://img1.gtimg.com/olympic/pics/hv1/63/82/2289/148863198.png",
                "http://img1.gtimg.com/sports/pics/hv1/154/102/2287/148738339.png",
                "http://img1.gtimg.com/sports/pics/hv1/128/102/2287/148738313.png",
                "http://img1.gtimg.com/sports/pics/hv1/157/102/2287/148738342.png",
                "http://img1.gtimg.com/sports/pics/hv1/125/102/2287/148738310.png",
                "http://img1.gtimg.com/sports/pics/hv1/129/102/2287/148738314.png",
                "http://img1.gtimg.com/sports/pics/hv1/133/102/2287/148738318.png",
                "http://img1.gtimg.com/sports/pics/hv1/121/102/2287/148738306.png",
            ]
                
            
        }
    },
     methods:{
      enter(index){
          console.log(index)
        this.seen = false;
        
      },
      leave(){
        this.seen = false;
        this.current = null;
      }
    }


};
</script>
<style scoped>
ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
li {
    flex: 1 100px;
    list-style-type: none;
}
</style>
