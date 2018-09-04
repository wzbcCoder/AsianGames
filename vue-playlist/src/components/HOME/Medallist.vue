<template>
    <div class="bg">
        <h3 class="threed">奖牌 Top10</h3>
        <table class="table">
            <thead class="thead-default">
                <tr>
                    <th>国家/地区</th>
                    <th>
                        <img src="../../assets/jinpai.png" alt="">
                    </th>
                    <th>
                        <img src="../../assets/yinpai.png" alt="">
                    </th>
                    <th>
                        <img src="../../assets/tongpai.png" alt="">
                    </th>
                    <th>总数</th>
                </tr>
            </thead>
            <tbody v-for="item in huojiang" :key="item.index">
                <tr>
                    <td>{{item.name}}</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>6</td>
                </tr>
                
                
                
                
                
                
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            huojiang:[]
        }
    },
    created(){
        this.$http.get("medalranks")
            .then(res => {
                this.huojiang = res.data,
                console.log(this.huojiang)
                })
            
    }
}
</script>


<style>
.h4{
    padding: 20px;
}
.bg{
    /* background-color: #FEE140;
background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%); */
/* background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%); */
/* background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%); */
/* background-color: #FFFFFF;
background-image: linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%); */
background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);


}
.threed{
color: #ffffff;
letter-spacing: 0;
/* text-shadow: 0px 1px 0px #999, 
0px 2px 0px #888, 
0px 3px 0px #777, 
0px 4px 0px #666, 
0px 5px 0px #555, 
0px 6px 0px #444, 
0px 7px 0px #333, 
0px 8px 7px #001135  */
text-shadow: 0px 1px 0px rgb(243, 158, 155), 
0px 2px 0px rgb(241, 137, 137), 
0px 3px 0px rgb(240, 95, 95), 
0px 4px 0px rgb(245, 57, 57), 
0px 5px 0px rgb(228, 231, 25), 
0px 6px 0px rgb(61, 189, 72), 
0px 7px 0px rgb(31, 180, 143), 
0px 8px 7px #5e0dbb
}
</style>


