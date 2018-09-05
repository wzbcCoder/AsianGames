<template>
    <div class="NewsArticle">
        <div class="title">
            <h2>{{New.title}}</h2>
        </div>
        <carousel v-show="isShow" v-bind:imgsall="array"></carousel>
        <ul>
            <li v-for="gra in New.content"  :key="gra.index">
                <p>	&nbsp;	&nbsp;	&nbsp;	&nbsp;{{ gra }}</p>
            </li>
        </ul>
        
        <div>
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
      isShow:false,
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
        if(this.array[0]){
        this.isShow=true;
    }
        
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
  text-align: center;
}
</style>
