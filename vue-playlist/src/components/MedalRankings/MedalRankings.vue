<template>
    <div class="MedalRankings">
        <div class="bar"> 
            <div class="gold">
                <h4 >本届奖牌榜</h4>
            </div>
        </div>
    <div class="rank">
        <p>2018年雅加达亚运会奖牌榜</p>
    </div>
 <div class="table" >
     <table>
         <tbody>
            
            <tr >
                <td>
                    <p>名次</p>
                    

                </td>
                 <td class="contry">
                    <p> 国家/地区</p>
                  
                    
                </td>
                 <td>
                     <img src="../../assets/jinpai.png" alt="">
                    <p>金牌</p>
                 
                    
                </td>
                <td>
                    <img src="../../assets/yinpai.png" alt="">
                    <p>银牌	</p>
                 
                    
                </td>
                <td>
                    <img src="../../assets/tongpai.png" alt="">
                    <p>铜牌	</p>
              
                    
                </td>
            </tr>

            <tr v-for="(Medal) in Medals " class="second_tr" :key="Medal.index">
                    <td>
                    <p id="app">
                        {{Medal.num}}

                    </p>

                </td>
                 <td >
                    
                       <p>{{Medal.name}}</p>  
                   
                    
                </td>
                 <td>
                   <p>{{Medal.glob}}</p> 
                    
                </td>
                <td>
            
                   <p>{{Medal.silver}}</p> 
                    
                </td>
                <td>
                    <p>  {{Medal.bronze}}	</p>
                    
                </td>
            </tr>
            
         </tbody>
     </table>
 </div>
    
    </div>

</template>

<script>



export default {
  name: 'MedalRankings',
  data(){
         return{
                Medals:[]
      }
     
  },
    methods:{
        fetchMedal(){
            this.$http.get("medalranks")
            .then(res => {
                this.Medals = res.data
        
                })
        }
    },
    created(){
        this.fetchMedal();

    }

 
}

</script>




<style scoped>
.bar{
    margin-top: 1%;
    background:cornflowerblue;
    height: 40px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%
}
.gold{
   position: relative;
   left: 1px;
   top:3px;
   width: 80px; 
   height: 40px;
   background:white;
    text-align: center;
    
}

.gold h4{
    font-size: 13px;
    /* position: relative; */
    line-height: 3;
    font-weight: bold;
    color:cornflowerblue;
}

.rank {
    position: relative;
    top: 4px;
    left: 10%;
}
.rank p{
    font-family: fantasy
}
table{
    position: relative;
    width: 80%;
    left: 10%;
    /* background: wheat */
}
tbody td{
    border:1px solid gainsboro  ;
}

tbody tr:first-child{
    background: #83c2ec
}

tbody tr:first-child td  {
    position: relative;
    left: 3%;
    top: 10px;
}
.contry{
    width: 60%
}
img{
    position: absolute;
    left: -4px;
    top:25%
}
.second_tr td:first-child {
    text-align: center
}

.second_tr td:nth-child(2) p {
    position: relative;
   left: 10%;
}

.second_tr td:nth-last-child(3) {
    text-align: center
}
.second_tr td:nth-last-child(2) {
    text-align: center
}
.second_tr td:nth-last-child(1) {
    text-align: center
}
@media (min-width: 801px) {
table tr:nth-child(2) td:nth-child(2){
    background-image: url("../../assets/first.png");
    background-size: 40px;
    background-repeat:no-repeat;
    background-position-x: 10px;
    background-position-y: 10px;
}
table tr:nth-child(3) td:nth-child(2){
    background-image: url("../../assets/second.png");
    background-size: 40px;
    background-repeat:no-repeat;
    background-position-x: 10px;
    background-position-y: 10px;
}
table tr:nth-child(4) td:nth-child(2){
    background-image: url("../../assets/third.png");
    background-size: 40px;
    background-repeat:no-repeat;
    background-position-x: 10px;
    background-position-y: 10px;
    
}
}
table{
    background-image: linear-gradient(to top, #fff1eb 0%, #e5f2fa 100%);
}

table tr td:nth-child(3) p{
   color: #b99d10
    
}
table tr td:nth-child(4) p{
    color: #58767a
}
table tr td:nth-child(5) p{
    color: #cb2e4a
}
</style>
