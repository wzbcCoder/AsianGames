<template>
    <div class="NewsArticle">
        <div class="title">
            <h2>{{New.title}}</h2>
        </div>
        <carousel v-bind:imgsall="array"></carousel>
        <ul>
            <li v-for="gra in New.content">
                <p>	&nbsp;	&nbsp;	&nbsp;	&nbsp;{{ gra }}</p>
            </li>
        </ul>
        
        <div class="time">
            {{New.pubtime}}
        </div>

        
    </div>
 

</template>
<script>
import Carousel from '../NewsArticle/Carousel'
export default {
  name: "NewsArticle",
  data() {
    return {
      New: "",
      array :[
              
            ]
    };
  },
  
components: {
    
    carousel:Carousel
  
  },
  methods: {
    fetchMedal(title) {
      this.$http.get("/News?title=" + title).then(res => {
        this.New = res.data[0];
        var array = new Array;
        this.New.imgs.forEach(element => {
            array.push(element)
        });
        console.log(array)
        this.array = array
        
      });
    }
  },
  created() {
    
    this.fetchMedal(this.$route.query.title);

  }
};
</script>

<style scoped>
.title {
  width: 60%;
  height: 20%;
  text-align: center;
}
li{
list-style-type: none
}
a{
  pointer-events: initial
}
.time{
  position: relative;
  left: 80%;
}
@media (max-width:  1000px) {
  .new_img{
      position: relative;
      top: 100px;
      left: 22%;
  }
  .time{
    position: relative;
    bottom: 0px;
    right:250px;
}
}

@media (max-width:  500px) {
  .new_img{
      position: relative;
      top: 100px;
      left: 22%;
  }
  .time{
    position: relative;
    bottom: 0px;
    right:300px;
}
}
</style>
