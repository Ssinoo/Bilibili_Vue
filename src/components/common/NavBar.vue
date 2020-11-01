<template>
  <div class="navtop">
    <div class="left">
      <img src="../../assets/bilibili.png">
    </div>
    <div>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div class="right">
      <img src="../../assets/header.png" >
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less">
.navtop{
  height: 42px;
  width: 100%;
  padding: 8px 0px;
  display: flex;
  .left{
    img{
      height: 29.003px;
      width: 62.002px;
      padding: 10px 10px;
    }
  }
  .right{
    img{
      height: 24px;
      width: 24px;
      padding: 15px 5.003px;
    }
  }
}

</style>
