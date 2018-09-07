<template>
    <div class="Moment9">

        <div class="container">
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
                            <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2931361240,1677280544&fm=173&app=25&f=JPEG?w=640&h=432&s=9AA24483844307454C14E1B00300C001">
                            <div class="carousel-caption">
                                <h3></h3>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3475729050,2140346660&fm=173&app=25&f=JPEG?w=640&h=432&s=DB9008C44417D5D64884B5B803001001">
                            <div class="carousel-caption">
                                <h3></h3>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4102002890,363729179&fm=173&app=25&f=JPEG?w=640&h=445&s=D6A20CE48472F1D60A8DD3B80300C002">
                            <div class="carousel-caption">
                                <h3></h3>

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
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">张心妍拿下亚运会中国射箭女子第一金</h5>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4102002890,363729179&fm=173&app=25&f=JPEG?w=640&h=445&s=D6A20CE48472F1D60A8DD3B80300C002" alt="Card image cap">
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card">
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <strong>8月28日</strong>报道，世界排名第113位的中国选手张心妍，进入射箭女子个人反曲弓决赛与东道主选手蒂安纳达争夺冠军。 最终张心妍发挥出色以7-3获胜，赢得中国射箭本届亚运会的第一枚金牌。张心妍由此成为自1978年射箭成为亚运会正式比赛项目以来，第一位夺得女子个人赛的金牌的中国选手。
                                </p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;据澎湃新闻报道，对于这一成绩，前奥运冠军、上海市射击射箭运动中心副主任陶璐娜表示，“虽然就像我们的国球一样，韩国是将射箭作为举国性的、招牌性的项目。但现在成绩证明，我们中国也不差。”。</p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "Momen9",
    created() {
        this.menu();
    },
    methods: {
        menu() {
            window.scrollTo(0, 0);
        }
    }
};
</script>
<style coped>
.card {
    width: 100%;
}
.Moment9 .carousel-item img {
    width: 100%;
    height: 550px;
}
</style>

