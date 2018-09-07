<template>

    <div class="bg">
        <div class="row">
            <div class="col-md-6 col-sm-6">
                <h3 class="threed">奖牌 Top7</h3>
            </div>
            <div class="col-md-6 col-sm-6 ">
                <div style="position:absolute;right:20px;bottom:0px;text-color:black;">
                    <router-link :to="{name:'MedalRankings'}">查看更多>></router-link>
                </div>
            </div>
        </div>

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
                    <th class="zongshu">总数</th>
                </tr>
            </thead>
            <tbody v-for="(item,index) in huojiang" v-if="index<=6" :key="item.index">
                <tr>
                    <td class="press">{{item.name}}
                        <!-- <img :src="item.logo"> -->
                    </td>
                    <td class="glob">{{item.glob}}</td>
                    <td class="silver">{{item.silver}}</td>
                    <td class="bronze">{{item.bronze}}</td>
                    <td class="red">{{item.total}}</td>
                </tr>

            </tbody>
        </table>
    </div>

</template>

<script>
export default {
    data() {
        return {
            huojiang: []
        };
    },
    created() {
        this.$http.get("medalranks").then(res => {
            (this.huojiang = res.data), console.log(this.huojiang);
        });
    }
};
</script>


<style>
.bg {
    /* background-color: #FEE140;
background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%); */
    /* background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%); */
    /* background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%); */
    /* background-color: #FFFFFF;
background-image: linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%); */
    /* background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%); */
    /* background-color: #FFE53B;
background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%); */
    /* background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%); */
    /* background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%); */
    /* background-color: #52ACFF;
background-image: linear-gradient(180deg, #52ACFF 12%, #FFE32C 50%, #f50707 100%); */
/* background-color: #FFE53B;
background-image: linear-gradient(90deg, #FFE53B 57%, #78ff25 84%); */
background-color: #FFE53B;
/* background-image: linear-gradient(90deg, #FFE53B 18%, #2589ff 63%, #ffffff 99%, #ffffff 100%); */


}
.threed {
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
    text-shadow: 0px 1px 0px rgb(243, 158, 155), 0px 2px 0px rgb(241, 137, 137),
        0px 3px 0px rgb(240, 95, 95), 0px 4px 0px rgb(245, 57, 57),
        0px 5px 0px rgb(228, 231, 25), 0px 6px 0px rgb(61, 189, 72),
        0px 7px 0px rgb(31, 180, 143), 0px 8px 7px #5e0dbb;
}
.glob {
    color: gold;
}
.silver {
    color: silver;
}
.bronze {
    color: #da6b4c;
}
.red {
    color: red;
}
.press {
    color: black;
}
.press img {
    height: 10%;
    width: 10%;
}
.zongshu {
    font-size: 15px;
}

</style>


