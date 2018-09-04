<template>
    <div class="News">
      
    <div>
        <md-field >
        <label>search KEY</label>
        <md-input required v-model="search"></md-input>
        </md-field>
    </div>    

            <div v-for="(New,index) in filteredNews" :key="index" class="all">
                    <div  v-if="index >= (curPage-1)*pageSize && index < curPage*pageSize">
                        <div class="title">
                            
                                <router-link   v-rainbow :to="{path:'/NewsArticle/', query:{title:New.title} }">{{ New.title }}</router-link>
                            
                        </div>
                        <div class="content">
                         <p >{{New.content[0]| snippet }}</p>
                         
                         </div>
                    <div class="new_img" > 
                            <img :src="New.imgurl" />  
                        </div>
                        <div class="time">
                            <p>{{New.pubtime}}</p>
                            
                        </div>
                    </div>
            </div>
        
        
        <nav>
            <ul class="pagination">
                <li v-if="curPage === 1" class="disabled page-item"><a href="#" class="page-link">上一页</a></li>
                <li v-else @click="prePage()" class="page-item"><a href="#" class="page-link">上一页</a></li>
                <div v-for="(page,index) in pageCount" :key="index" >
                    <li  v-if="page===curPage" class="active page-item" @click="numPage(page, $event)">
                        <a href="#" class="page-link">{{page}}</a>
                    </li>
                    <li  v-else @click="numPage(page, $event)"  class=" page-item">
                        <a href="#" class="page-link">{{page}}</a>
                    </li>
                </div>
                <li v-if="curPage === pageCount" class="page-item disabled"><a href="#" class="page-link">下一页</a></li>
                <li v-else @click="nextPage()" class="page-item"><a href="#"  class="page-link">下一页</a></li>
            </ul>
        </nav>

    
        <!-- <ul>
            <li v-for="New in filteredNews " :key="New.index">
                <p>标题</p>
                <p><router-link   v-rainbow :to="{path:'/NewsArticle/', query:{title:New.title} }">{{New.title }}</router-link><p>
                正文<p>{{New.content[0]| snippet }}</p>
                <img :src="New.imgurl" />   
                <p>出版时间</p>{{New.pubtime}}
            </li>
        </ul>
    </div> -->
    </div>

</template>

<script>



export default {
  name: 'News',
  components: {
        
  },
  data(){
         return{
                News:[],
                search:"",
                pageSize: 4,
                 curPage: 1,
                 pageCount:0
      }
     
  },
    methods:{
        fetchMedal(){
            this.$http.get("/News")
            .then(res => {
                this.News = res.data
                 this.pageCount = Math.ceil(this.News.length / this.pageSize);
                })
        },
        prePage: function() {
                if (this.curPage > 1) {
                    this.curPage = this.curPage - 1;
                }
            },
            nextPage: function(event) {
                if (this.curPage < this.pageCount) {
                    this.curPage = this.curPage + 1;
                }
            },
            numPage: function(num, event) {
                if (this.curpage == num) { return; }
                this.curPage = num;
            },
      
    },
    created(){
        this.fetchMedal()

    },
    computed:{
        filteredNews:function(){
            return this.News.filter((New) =>{
                // console.log(New.title)
                return New.title.match(this.search);
                
            })
        }

    }
}
</script>

<style scoped>
.new_img{
    position: relative;
    width: 150px;
    height: 120px;
}

.title{
    position: relative;
    left: 22%;
    top: 90px;
}

.content{
    position: relative;
    left: 22%;
    top: 100px
}

.all{
    width:75%;
}
.time{
    position: relative;
    bottom: 0px;
    left: 22%;
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
    left:250px;
}

}
</style>
