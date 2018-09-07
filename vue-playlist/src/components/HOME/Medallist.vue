<template>

    <div class="bg">
        <div class="row">
            <div class="col-md-6 col-sm-6">
                <strong><h3 class="text-info">奖牌 Top7</h3></strong>
            </div>
            <div class="col-md-6 col-sm-6 ">
                <div style="position:absolute;right:20px;bottom:3px;">
                    <router-link :to="{name:'MedalRankings'}"><button  type="button" class="btn btn-success">>>查看更多>></button></router-link>
                </div>
            </div>
        </div>

        <table class="table">
            <thead class="thead-default">
                <tr class="bg-warning">
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


          

            <tbody >
                <tr class="table-active">
                    <td class="press">中国</td>
                    <td class="glob">132</td>
                    <td class="silver">92</td>
                    <td class="bronze">65</td>
                    <td class="red">289</td>
                </tr>
                <tr class="table-primary">
                    <td class="press">日本</td>
                    <td class="glob">75</td>
                    <td class="silver">56</td>
                    <td class="bronze">74</td>
                    <td class="red">205</td>
                </tr>
                <tr class="table-secondary">
                    <td class="press">韩国</td>
                    <td class="glob">49</td>
                    <td class="silver">58</td>
                    <td class="bronze">70</td>
                    <td class="red">177</td>
                </tr>
                <tr class="table-success">
                    <td class="press">印尼</td>
                    <td class="glob">31</td>
                    <td class="silver">24</td>
                    <td class="bronze">43</td>
                    <td class="red">98 </td>
                </tr>
                <tr class="table-danger">
                    <td class="press">乌兹别克斯坦</td>
                    <td class="glob">21</td>
                    <td class="silver">24</td>
                    <td class="bronze">25</td>
                    <td class="red">70</td>
                </tr>
                <tr class="table-warning">
                    <td class="press">伊朗</td>
                    <td class="glob">20</td>
                    <td class="silver">20</td>
                    <td class="bronze">22</td>
                    <td class="red">62</td>
                </tr>
                <tr class="table-info">
                    <td class="press">中国台北</td>
                    <td class="glob">17</td>
                    <td class="silver">19</td>
                    <td class="bronze">31</td>
                    <td class="red">67</td>
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
            (this.huojiang = res.data)
        });
    }
};
</script>


<style>
.bg {


}

.glob {
    color: black;
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


