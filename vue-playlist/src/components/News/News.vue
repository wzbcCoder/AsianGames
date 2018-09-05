<template>
    <div class="News">
     
      
    <div>
        <md-field >
        <label>search KEY</label>
        <md-input required v-model="search"></md-input>
        </md-field>
    </div>    

            <div v-for="(New,index) in filteredNews" :key="index" >
                    <tr  v-if="index >= (curPage-1)*pageSize && index < curPage*pageSize">
                        <td><p><router-link   v-rainbow :to="{path:'/NewsArticle/', query:{title:New.title} }">{{New.title }}</router-link></p></td>
                        <td> 正文<p>{{New.content[0]| snippet }}</p></td>
                        <td> <img :src="New.imgurl" />  </td>
                        <td><p>出版时间</p>{{New.pubtime}}</td>
                    </tr>
            </div>

        <nav>
            <ul>
                <li v-if="curPage === 1" class="disabled"><a href="#">上一页</a></li>
                <li v-else @click="prePage()"><a href="#">上一页</a></li>
                <div v-for="(page,index) in pageCount" :key="index" >
                    <li  v-if="page===curPage" class="active" @click="numPage(page, $event)">
                        <a href="#">{{page}}</a>
                    </li>
                    <li  v-else @click="numPage(page, $event)">
                        <a href="#">{{page}}</a>
                    </li>
                </div>
                <li v-if="curPage === pageCount" class="disabled"><a href="#">下一页</a></li>
                <li v-else @click="nextPage()"><a href="#">下一页</a></li>
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

<style  lang="scss" scoped>
.md-content {
    width: 200px;
    height: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

</style>
