<template>
<div class="zhiding">
  <div>
    <div class="title">
      <h1>UZI简自豪</h1>
    </div>
    <div class="personaldiv">
      <img src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=8ff1ef1a52df8db1a8237436684ab631/241f95cad1c8a7861a86a48c6b09c93d71cf5080.jpg" alt="">
      <div class="personal">
        <!-- <md-step id="second" md-label="早年经历"> -->
        <p> </p>
        <p> &nbsp; &nbsp; &nbsp; &nbsp; 2012年初因为家庭原因的简自豪搬家到了新的城市惠州，由于新搬家过来的学籍和转学的问题让他有了在家玩游戏的机会。 天天在家玩游戏的他，在接触到了英雄联盟这个游戏的时候。他以惊人的适应能力迅速驰骋了这个游戏，在当时的四区战无不胜，迅速冲到了1700分。后来被陈芳辉(虎妞)发现并介绍到皇族战队，开始自己的职业生涯
        </p>
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

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2014-11-29</td>
                  <td>TGA SOLO精英挑战赛冠军 </td>

                </tr>
                <tr>
                  <td>2014-12-13 </td>
                  <td>最佳年度MVP</td>

                </tr>
                <tr>
                  <td>2014-12-13</td>
                  <td>最佳ADC</td>

                </tr>
                <tr>
                  <td>2015-12-2</td>
                  <td>英雄联盟全明星</td>

                </tr>
                <tr>
                  <td>2016-11-14</td>
                  <td>最受欢迎选手</td>
                </tr>
                <tr>
                  <td>2016-12-12</td>
                  <td>获得全明星SOLO冠军</td>
                </tr>
                <tr>
                  <td>2017-11-26</td>
                  <td>获得年度最佳ADC</td>
                </tr>
                <tr>
                  <td>2017-11-26</td>
                  <td>获得全明星赛SOLO冠军</td>
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
          <p>2012年uzi加入皇族后随队出征TGA冬季大奖赛获得亚军，在2012年TGA冬季总决赛，五杀维鲁斯让中国英雄联盟玩家知道了他的存在。</p>
        </md-tab>

        <md-tab md-label="崭露头角">
          <p>2017年1月16日，《2017中国运动员影响指数排行榜》发布，Uzi排名二十，是唯一上榜的电子竞技运动员。2017年LPL春季赛，Uzi所在战队RNG以小组第一进入季后赛，在半决赛以3：1战胜EDG战队晋级总决赛，在总决赛上以0：3败于WE战队取得亚军。随后在LPL夏季赛上，RNG战队以小组第一晋级季后赛，在决赛上以2:3败于EDG战队取得亚军，同时以全年积分最高的队伍，获得参加全球总决赛的资格。在英雄联盟全球总决赛上，RNG战队以小组第一的身份进入淘汰赛，在淘汰赛首轮战胜FNC战队晋级半决赛，在半决赛上以2:3败于SKT战队止步四强。 12月11日，LOL全明星赛最后一个比赛日中，Uzi在1v1单挑赛面对Bjergsen时，卡莉丝塔两度建功，成功蝉联“Solo”王。而在此后LPL梦之队与LMS梦之队的决战中，双方在五局鏖战中交替领先，最终LPL梦之队成功加冕全明星赛冠军。  </p>
        </md-tab>

        <md-tab md-label="称霸亚洲">
          <p>系列赛亚洲对抗赛决赛中，LPL队伍和LCK队伍鏖战五场，最终Uzi所在战队RNG击败AFs帮助LPL赛区赢得了2018亚洲对抗赛的冠军。8月29日，雅加达亚运会电竞表演项目《英雄联盟》总决赛，由苏汉伟、田野、史森明、严君泽、刘世宇、简自豪组成的中国团队3-1战胜劲敌韩国团队，拿下亚运会历史上首个英雄联盟项目金牌</p>
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
