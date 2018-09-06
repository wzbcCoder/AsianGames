<template>

  <div>
    <div class="title">
      <h1>天才泳将孙杨</h1>
    </div>
    <div class="personaldiv">
<img src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=a7458cac4090f60310bd9415587bd87e/0dd7912397dda14480f36c2fb8b7d0a20df486b0.jpg" alt="">
    <div class="personal">
      <!-- <md-step id="second" md-label="早年经历"> -->
      <p>    </p><p>	&nbsp;	&nbsp;	&nbsp;	&nbsp;  孙杨，1991年12月1日生于浙江杭州，中国国家游泳队队长，男子1500米自由泳世界纪录保持者，男子400米自由泳奥运会纪录保持者。  2012年伦敦奥运会男子400米自由泳、男子1500米自由泳冠军； 2016年里约奥运会男子200米自由泳冠军。孙杨是世界泳坛历史上唯一一位男子200米自由泳、男子400米自由泳、男子1500米自由泳的奥运会世锦赛大满贯冠军得主，史上唯一一位男子800米自由泳世锦赛三连冠，男子自由泳个人单项金牌数居世界第一。 </p>
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
                  <th>成绩/秒</th>
    
                  <th>创造地</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2018年8月20日</td>
                  <td>亚运会男子800米自由泳夺冠</td>
                  
                  <td>雅加达</td>
                </tr>
                <tr>
                  <td>2018年8月24日</td>
                  <td>男子1500米自由泳 14分58秒53夺冠</td>
                  
                  <td>雅加达</td>
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
          <p>2003年，孙杨进入浙江省游泳队，被教练朱志根挑中。
2006年以“代训”身份进入国家队。不满15岁的孙杨在浙江省运会上独揽男子400米混合泳、男子200米自由泳、男子1500米自由泳三枚金牌。
2007年1月孙杨正式进入国家游泳队，每天训练量14-20公里。
2007年墨尔本世界游泳锦标赛，孙杨参加男子400米自由泳和男子800米自由泳两个项目，预赛遭到淘汰，这是孙杨首次参加世界大赛。
2008年北京奥运会，孙杨参加男子400米自由泳和男子1500米自由泳两个个人项目，并和队友参加男子4x200米自由泳接力比赛。孙杨在男子1500米自由泳中闯入决赛，以15分05秒12的成绩获得第八名。这是孙杨首次参加奥运会，也是他首次在世界大赛中闯入决赛。 
2009年罗马世界游泳锦标赛，孙杨在男子400米自由泳预赛中遭到淘汰，但随后在男子1500米自由泳决赛中以14分46秒84的成绩摘得铜牌，这是孙杨在世界大赛中获得的第一枚奖牌。  </p>
        </md-tab>

        <md-tab md-label="崭露头角">
          <p>2010年广州亚运会，孙杨先后在男子200米自由泳和男子400米自由泳比赛中摘得两块银牌。在男子4x200米自由泳接力决赛中，孙杨与队友合作夺得冠军，获得个人第一枚亚运金牌，同时帮助中国队打破了日本对该项目长达56年的垄断，首次在亚运会上摘得男子游泳接力金牌。在男子1500米自由泳决赛中，孙杨以14分35秒43的成绩夺冠，并打破亚洲纪录，将原有亚洲纪录提高了十秒之多，同时距离世界纪录只差不到一秒。</p>
        </md-tab>

        <md-tab md-label="称霸亚洲">
          <p>2016年里约奥运会，孙杨在男子400米自由泳决赛中以3分41秒68的成绩获得银牌，  在男子200米自由泳决赛中他以1分44秒65的成绩成功夺冠，成为亚洲第一位男子200米自由泳奥运冠军。 而在男子1500米自由泳预赛中，带病参赛的孙杨发挥不佳，无缘决赛。 </p>
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