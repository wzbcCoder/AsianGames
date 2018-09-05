<template>
    <ul class="intro-cont">

        
        <li v-for="(img,index) in imgs" @mouseenter="enter($event)" @mouseleave="leave($event)">
            <a href="#" target="_blank" >
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
      enter($event){
          $event.currentTarget.className="com_marginBtm10"
          
        // this.seen = false;
        
      },
      leave($event){
        $event.currentTarget.className=""
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
.com_marginBtm10 {
    transform:rotate(10deg);
}
</style>
