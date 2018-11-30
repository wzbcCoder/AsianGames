<template>
    <div class="Moment1">

        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div>
                        <div id="demo" class="carousel slide" data-ride="carousel">

                            <!-- 指示符 -->
                            <ul class="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" class="active"></li>
                                

                            </ul>

                            <!-- 轮播图片 -->
                            <div class="carousel-inner">
                                <div class="carousel-item active">

                                    <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4090024397,1619253419&fm=173&app=25&f=JPEG?w=640&h=320&s=F9824B9556D033C04E245D0403006093">
                                    <div class="carousel-caption">
                                        <!-- <h3>第一张图片描述标题</h3>
        <p>描述文字!</p> -->
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

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="barbar">
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">亚运现代五项女子个人赛张明煜登顶 中国夺三连冠</h5>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536308425707&di=d00c665280560c8706d1c4f2a06c6e38&imgtype=0&src=http%3A%2F%2Fimg8.iqilu.com%2Fksdimgs%2F2018%2F09%2F01%2Fa1566874124f1270f704a70f19632370.jpg" alt="Card image cap">
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;腾讯体育讯 北京时间8月31日，2018年雅加达亚运会现代五项结束女子个人赛争夺，年仅16岁的中国小将张明煜以总成绩1375分夺得冠军，中国队实现该项目三连冠，边雨霏以1228分获得第六名，韩国选手分获二、三名。</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现代五项从2002年釜山亚运会开始成为正式项目，首届比赛，两位中国选手发挥欠佳，分获银牌和铜牌，金牌被哈萨克斯坦选手拉达夺走。多哈亚运会，该项目被取消，直到广州亚运会才重新回归，那届比赛，名不见经传的苗禕骅夺得个人项目金牌，这是中国队历史上首枚亚运现代五项金牌，团体金牌同样落到中国女队手中。</p>
                            </div>

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
.Moment1 .carousel-item img {
    width: 100%;
    height: 550px;
}
</style>

