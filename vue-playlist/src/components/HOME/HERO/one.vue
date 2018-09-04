<template>
<div>
<button @click="gotoMenu" class="btn btn-success">返回上一页</button>
    <h1>1</h1>
    </div>
</template>

<script>
export default {
    methods:{
        gotoMenu:function(){
            // 跳转到上一次浏览的页面
            this.$router.go(-1)
        },
    }
}
</script>
