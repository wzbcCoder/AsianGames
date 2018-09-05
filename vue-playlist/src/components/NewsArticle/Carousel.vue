<template>
    <div class="carousel">
        <transition-group tag='ul' class="clearfix slide" name='image'>
            <li v-for='(image,index) in imgsall' :key='index' v-show='index===mark'>
                <a><img :src="image"></a>
            </li>

        </transition-group>
        <div class="bullet">
            <span v-for='(item,index) in imgsall.length' :class="{'active':index===mark}" @click='change(index)' :key="index"></span>
        </div>


        
    <div>
        

    </div>

    </div>
    
</template>
<script>    
export default {
    name: 'carousel',
    props: {
            imgsall: {
                type: Array,
                required: true
            }
            }
            ,
    data(){
        return{
            timer: null,
            mark:0,
           
           
        }    
    },
    created(){
        console.log(this.imgsall)
            this.img = this.imgsall
            this.play()
            
        },
    methods:{
        
        
        play() {
            
            setInterval(this.autoPlay, 3000)
        },
        change(i){
            this.mark = i
            // this.play()
        },

        autoPlay() {
            this.mark++
                if (this.mark === this.imgsall.length) {
                    this.mark = 0
                    return
                }
        },
        
    }

}
</script>

<style scoped>
* {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        .clearfix {
            content: '';
            clear: both;
            display: block;
        }
        
        .carousel {
            width: 80%;
            height: 60%;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
        }
        
        .slide {
            width: 1000px;
            height: 600px;
        }
        
        li {
            position: absolute;
            
        }
        
        img {
            width: 1000px;
            height: 600px;
        }
        
        .bullet {
            width: 100%;
            position: absolute;
            bottom: 10px;
            margin: 0 auto;
            text-align: center;
            z-index: 10;
        }
        
        span {
            width: 20px;
            height: 5px;
            border: 1px solid;
            background: white;
            display: inline-block;
            margin-right: 10px;
        }
        
        .active {
            background: red;
        }
        
        .image-enter-active {
            transform: translateX(0);
            transition: all 1s ease;
        }
        
        .image-leave-active {
            transform: translateX(-100%);
            transition: all 1s ease;
        }
        
        .image-enter {
            transform: translateX(100%)
        }
        
        .image-leave {
            transform: translateX(0)
        }
        li {
            
            }
</style>

