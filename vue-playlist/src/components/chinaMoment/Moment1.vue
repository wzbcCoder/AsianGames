<template>
    <div class="Moment1">
       
        <div class="container">
             <div>
	<div id="demo" class="carousel slide" data-ride="carousel">
 
  <!-- 指示符 -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
 
  <!-- 轮播图片 -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="http://static.runoob.com/images/mix/img_fjords_wide.jpg">
      <div class="carousel-caption">
        <h3>第一张图片描述标题</h3>
        <p>描述文字!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="http://static.runoob.com/images/mix/img_nature_wide.jpg">
      <div class="carousel-caption">
        <h3>第二张图片描述标题</h3>
        <p>描述文字!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="http://static.runoob.com/images/mix/img_mountains_wide.jpg">
      <div class="carousel-caption">
        <h3>第三张图片描述标题</h3>
        <p>描述文字!</p>
      </div>
    </div>
  </div>
 
  <!-- 左右切换按钮 -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
	</div>
  <div class="barbar">
    
  </div>
</div>
            <div class="card" >
                <div class="card-body" >
                    <h5 class="card-title">Card title</h5>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=a7458cac4090f60310bd9415587bd87e/0dd7912397dda14480f36c2fb8b7d0a20df486b0.jpg" alt="Card image cap">
                            </div>
                        </div>
                         <div class="col-md-8">
                             <div class="card" >aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
  
                         </div>
                    </div>
                    
                </div>
         </div>


         <div class="card" >
                <div class="card-body" >
                    <h5 class="card-title">Card title</h5>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=a7458cac4090f60310bd9415587bd87e/0dd7912397dda14480f36c2fb8b7d0a20df486b0.jpg" alt="Card image cap">
                            </div>
                        </div>
                         <div class="col-md-8">
                             <div class="card" >aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
  
                         </div>
                    </div>
                    
                </div>
         </div>


         <div class="card" >
                <div class="card-body" >
                    <h5 class="card-title">Card title</h5>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=a7458cac4090f60310bd9415587bd87e/0dd7912397dda14480f36c2fb8b7d0a20df486b0.jpg" alt="Card image cap">
                            </div>
                        </div>
                         <div class="col-md-8">
                             <div class="card" >aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
  
                         </div>
                    </div>
                    
                </div>
         </div>

         
        </div>
    
    </div>
</template>

<script>
import Broadcast from "../HOME/Broadcast";
export default {
  components: {
    Broadcast: Broadcast
  },
  name: "Moment1"
};
</script>
<style scoped>
.card {
  width: 100%;
}
.carousel-item img{
  width: 100%;
  
}
</style>

