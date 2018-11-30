<template>
    <div class="Moment5">

        <div class="container">
            <div class="card">
                <div class="card-body">
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

                                    <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4169594029,2925825357&fm=173&app=25&f=JPEG?w=640&h=398&s=65649246CA5615C62FCC42B80300C016">
                                    <div class="carousel-caption">

                                    </div>
                                </div>
                                <div class="carousel-item">

                                    <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1775236650,1872437478&fm=173&app=25&f=JPEG?w=600&h=322&s=BEAB800B48710180042CE9DD0300B0A7">
                                    <div class="carousel-caption">

                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1229646012,997024345&fm=173&app=25&f=JPEG?w=600&h=324&s=61A290575C0332531C1B0BAB0300F00C">
                                    <div class="carousel-caption">

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
                    <h5 class="card-title">亚运会跆拳道冠军绝杀韩国选手</h5>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="http://dingyue.nosdn.127.net/eGkrbR7b1MywBthZyr9AIgiw2qHtqikfAGNqmubFkTjyQ1535001615991.jpg" alt="Card image cap">
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在8月22日进行的亚运会跆拳道女子57公斤级决赛上，中国选手骆宗诗以6:5险胜韩国选手李爱伦，为中国代表团又拿下一枚金牌。但是在赛后接受采访时，骆宗诗却语出惊人，她说：这场比赛的裁判根本就不想让中国队拿金牌，在判罚中过于偏袒韩国队员，如果不是自己咬牙坚持下去，这个金牌很可能就飞走了。</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;骆宗诗的观点也得到了跆拳道奥运会冠军吴静钰的认同，赛后她在自己微博上略带调侃的评论这场比赛：“吓死了，差点就输给一个不会踢腿的对手了。”</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;幸亏骆宗诗的技术扎实，心态没有受到裁判不公正判罚的影响，稳扎稳打，惊险拿下这场比赛。骆宗诗也算是用自己优异的表现“打脸”裁判。</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

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
.Moment5 .carousel-item img {
    width: 100%;
    height: 550px;
}
</style>

