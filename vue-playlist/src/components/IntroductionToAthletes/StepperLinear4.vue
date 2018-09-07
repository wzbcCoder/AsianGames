<template>
<div class="zhiding">
  <div>
    <div class="title">
      <h1>女排队长朱婷</h1>
    </div>
    <div class="personaldiv">
<img src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=57389ba53187e9504617f46e2038531b/91ef76c6a7efce1b7c2e5caca451f3deb48f654b.jpg" alt="">
    <div class="personal">
      <!-- <md-step id="second" md-label="早年经历"> -->
      <p>    </p><p>	&nbsp;	&nbsp;	&nbsp;	&nbsp;  朱婷，女，中国女排队长，中国著名女子排球运动员，1994年11月29日出生于河南省周口市郸城县，毕业于郑州大学体育学院，身高198cm，体重75kg ，司职主攻。</p>
      <!-- </md-step> -->
    </div>
    <!-- <span class="md-title">Headline</span> -->
    
    </div>
    <div class="content">
      <md-steppers>
        <md-step id="first" md-label="个人最佳">
          <div class="table">
            <table class="table">
              <thead>
                <tr>
                  <th>年份/年.月.日</th>
                  <th>成绩</th>
    
                  <th>创造地</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2015年女排世界杯</td>
                  <td>10胜1负的战绩获得冠军</td>
                  
                  <td>日本名古屋市</td>
                </tr>
                <tr>
                  <td>2016年里约奥运会</td>
                  <td>四分之一决赛、半决赛、决赛分别贡献28分、33分、25分</td>
                  
                  <td>巴西里约热内卢</td>
                </tr>
                <tr>
                  <td>2017年女排大冠军杯赛</td>
                  <td>总得分100分排名第一</td>
                  
                  <td>日本名古屋</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </md-step>
        <md-step id="third" md-label="运动经历"  @click="showDialog = true">
            
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Preferences</md-dialog-title>
      
      <md-tabs md-dynamic-height  >
        <md-tab md-label="初出茅庐">
          <p>2010年，朱婷进入中国女子排球少年队（国少队），主教练为沈芒。2011年朱婷开始进入人们的视野，在当年的世界女排少年锦标赛（世少赛）中发挥出色，帮助中国队获得亚军，进攻得分位列全部积分榜第七名。 </p>
        </md-tab>

        <md-tab md-label="崭露头角">
          <p>2013年瑞士女排精英赛，郎平统领的中国队未参加，改由中国青年队出战。面对球员平均年龄比自己大两到三岁的巴西、俄罗斯、日本等队，中青队的小将以3:0先后胜了瑞士、德国，在八队中位居第六，特别是18岁的朱婷，不仅身高已经达到1.95m，而且进攻火力、发挥的稳定性都上了一个新台阶。中国队的五场比赛，她场场得分列全队第一。最后一场碰更加成熟的日本队，中国队以1:3失利，朱婷却拿下30分，高居全场第一。最终以105分的得分，荣膺2013年瑞士精英赛最佳得分奖。  </p>
        </md-tab>

        <md-tab md-label="最佳主攻">
          <p>2018年8月6日，朱婷入选第十八届亚运会中国体育代表团名单。 [41]  9月1日，2018年雅加达亚运会女排决赛，朱婷狂砍26分  ，中国女排3-0完胜泰国，三局比分分别为25-19、25-17、25-13，中国队8战全胜时隔8年再夺冠，这也是中国女排史上第8次亚运登顶。</p>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      
      </md-dialog-actions>
    </md-dialog>
          
        </md-step>
      </md-steppers>
    </div>
    
  </div>
</div>
</template>

<script>
// $(".content2").scrollspy({ target: ".scrollspy-example" });
export default {data: () => ({
      showDialog: false
    }),

  components:{

  }};
</script>




<style scoped>
content2 {
    position: relative;
    /* overflow-y: scroll; */
}
.content2 {
    height: 200px;
    overflow: auto;
}
.live {
    height: 200px;
}
img {
    position: relative;
    /* left: 40px; */
    width: 477px;
    height: 300px;
}
.row {
    position: relative;
    top: -15px;
}
.title {
    text-align: center;
    position: relative;
}
.personal {
    position: relative;
    top: -300px;
    left: 50%;
    width: 40%;
}
.personaldiv {
    height: 600px;
}
.content {
    position: relative;
    top: -250px;
}
.table {
    width: 100%;
    height: 400px;
    /* background-color: aquamarine */
}
</style>