<template>
        <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #f5f5f5;">
  <a class="py-2" href="#" style="">
                <img src="../assets/yajiadalogo.png" width="30" height="30" class="d-inline-block align-top" alt="">
               
                <span style="color:#f29200">Jakarta</span> 
            <span style="color:#94c23c">Asian</span> 
            <span style="color:#db3a99">Games</span> 
            <span style="color:#f3114c">China moment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <button class="myBtnhome">
          <router-link to="/" class="nav-link" @click="gank()"><strong>首页</strong></router-link>
        </button>
        
      </li>

  
      <li class="nav-item">
        <button class="myBtnlist">
        <router-link to="/MedalRankings" class="nav-link" @click="gank2()"><strong>奖牌榜</strong></router-link>
            
        </button>
      </li>

       <li class="nav-item">
         <button class="myBtnnews">
<router-link to="/News" class="nav-link" @click="gank2()"><strong>时讯</strong></router-link>
         </button>
        
      </li>

       <li class="nav-item">
         <button class="myBtnpic">
           <router-link to="/waterfall" class="nav-link" @click="gank2()" ><strong>照片墙</strong></router-link>
         </button>
       
      </li>

      <li class="nav-item"  v-show="IsShow">
         <button class="myGao">
          
           <a  href="#sport" class="nav-link" ><strong>高光</strong></a>
         </button>
      </li>

      <li class="nav-item"  v-show="IsShow">
         <button class="myHero">
           <a  href="#chinahero" class="nav-link" ><strong>英雄</strong></a>
         </button>
      </li>

    </ul>
    <span class="navbar-text">
      
        <span style="color:red"><strong>中国</strong></span>的<span style="color:gold"><strong>力量</strong></span>
      
    </span>
  </div>
</nav>
</template>

<style scoped>
.navbar-brand{
    font-family: "Times New Roman", Times, serif;
}
a:hover{
text-decoration:none;
}
/* .navbar-light .navbar-toggler-icon {
    background-image: url(../assets/china.jpg);
    margin: 0 0;
} */
.navbar-light .navbar-toggler {
    color: rgba(255, 0, 0, 0.5);
    border-color: rgba(255, 0, 0, 0.1);
}
.navbar-toggler {
    padding: 0rem 0rem;
    font-size: 2rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
}
.myBtnhome{
            width: 80px;
            height: 35px;
            background-color:#f52e59;
            color: white;
            border: none;
            cursor: pointer;
            /*渐变效果,可以删掉这句话试试*/
            transition:all 0.8s;
        }
        .myBtnhome:hover{            
            /*鼠标悬浮效果*/
            /*阴影*/
            box-shadow: 5px 5px 5px grey;
            /*发光*/
            background-color: #f54d71;
        }
.myBtnlist{
            width: 80px;
            height: 35px;
            background-color:#0091eb;
            color: white;
            border: none;
            cursor: pointer;
            /*渐变效果,可以删掉这句话试试*/
            transition:all 0.8s;
        }
        .myBtnlist:hover{            
            /*鼠标悬浮效果*/
            /*阴影*/
            box-shadow: 5px 5px 5px grey;
            /*发光*/
            background-color: #3aa6e9;
        }
.myBtnnews{
            width: 80px;
            height: 35px;
            background-color:#ffd600;
            color: white;
            border: none;
            cursor: pointer;
            /*渐变效果,可以删掉这句话试试*/
            transition:all 0.8s;
        }
        .myBtnnews:hover{            
            /*鼠标悬浮效果*/
            /*阴影*/
            box-shadow: 5px 5px 5px grey;
            /*发光*/
            background-color: #fbe055;
        }
.myBtnpic{
            width: 80px;
            height: 35px;
            background-color:#871996;
            color: white;
            border: none;
            cursor: pointer;
            /*渐变效果,可以删掉这句话试试*/
            transition:all 0.8s;
        }
        .myBtnpic:hover{            
            /*鼠标悬浮效果*/
            /*阴影*/
            box-shadow: 5px 5px 5px grey;
            /*发光*/
            background-color: #894293;
        }

.myGao{
            width: 80px;
            height: 35px;
            background-color:#94c23d;
            color: white;
            border: none;
            cursor: pointer;
            /*渐变效果,可以删掉这句话试试*/
            transition:all 0.8s;
        }
        .myGao:hover{            
            /*鼠标悬浮效果*/
            /*阴影*/
            box-shadow: 5px 5px 5px grey;
            /*发光*/
            background-color: #a0c065;
        }
.myHero{
            width: 80px;
            height: 35px;
            background-color:#f29100;
            color: white;
            border: none;
            cursor: pointer;
            /*渐变效果,可以删掉这句话试试*/
            transition:all 0.8s;
        }
        .myHero:hover{            
            /*鼠标悬浮效果*/
            /*阴影*/
            box-shadow: 5px 5px 5px grey;
            /*发光*/
            background-color: #f0a93e;
        }

</style>

<script>
export default {
    data() {
        return {
            IsShow:false
        };
    },
  methods:{
        
        gank:function(){
                   this.IsShow=true; 
        },
        gank2:function(){
                   this.IsShow=false; 
                   console.log("aaa")
        }
  },
   created: function () {
        console.log(window.location.href)
        if(window.location.href==='http://localhost:8080/')
        {
            this.IsShow=true;
        }
     }
}
       



</script>

