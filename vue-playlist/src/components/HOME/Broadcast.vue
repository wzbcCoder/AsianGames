<template>
  <div class="shouyelunbo">
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
          <img src="../../assets/shouyelunbo.jpg">
          <div class="carousel-caption">
            <h3>亚运会LOL国家队夺冠</h3>
            <h5>8月29日，雅加达-巨港亚运会电子竞技表演项目英雄联盟决赛，中国队3:1击败韩国队，Uzi用三个MVP在亚洲最高赛场上证明自己，中国团队也用实力再一次证明我们今年是最棒的赛区。</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/moment/wushuhuangjunhua.jpg">
          <div class="carousel-caption">
            <h3>武术选手黄俊华摘得亚运会首金</h3>
            <h5>在21日举行的2018年雅加达亚运会武术男子南拳南棍全能比赛中，黄俊华以19.43分的总成绩夺冠，摘得本届亚运会中国澳门代表团的首枚金牌。这也是中国澳门在本届亚运会上获得的首枚奖牌。</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/moment/pingpanglunbo1.jpg">
          <div class="carousel-caption">
            <h3>国乒包揽五项冠军</h3>
            <h5>随着雅加达亚运会乒乓球男女单打决赛1日在国乒“内战”中结束，中国队将本届亚运会男女单打、男女团体和混双全部5个项目的金牌收入囊中。主管女队的教练李隼赛后在接受采访时表示，国乒这个成绩是整个国乒团队的胜利。</h5>
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
</template>


<style scoped>
.shouyelunbo .carousel-item img {
    width: 100%;
    height: 500px;
}
.konfu{
  color: burlywood
}
</style>
