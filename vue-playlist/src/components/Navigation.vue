<template>
        <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #f5f5f5;">
  <a class="py-2" href="#" style="">
                <img src="../assets/yajiadalogo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                <span style="color:#f29200">Jakarta</span> 
            <span style="color:#94c23c">Asian</span> 
            <span style="color:#db3a99">Games</span> 
            <span style="color:#f3114c">China moment</span>
            </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>

      <li class="nav-item">
         <router-link to="/IntroductionToAthletes" class="nav-link">IntroductionToAthletes</router-link>
      </li>

      <li class="nav-item">
        <router-link to="/MedalRankings" class="nav-link">MedalRankings</router-link>
      </li>

       <li class="nav-item">
        <router-link to="/News" class="nav-link">News</router-link>
      </li>

       <li class="nav-item">
       <router-link to="/waterfall" >waterfall</router-link>
      </li>

    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
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
.navbar-light .navbar-toggler-icon {
    background-image: url(../assets/china.jpg);
    margin: 0 0;
}
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
</style>

<script>
export default {
  methods:{
        gotoPhoto:function(){
            // window.location.href("./PhotoPage/照片墙.html"),
            alert("aaa")
        }
  }
}
       



</script>

