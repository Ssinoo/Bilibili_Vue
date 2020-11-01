<template>
  <div >
    <div class="userdetail">
      <div class="user_header">

     <img src="../../assets/header.png" alt="">
   </div>
  <div class="user_edit">
     <p>
       <span>11</span>
       <span class="user_text">粉丝</span>
     </p>
     <p>
       <span>22</span>
       <span class="user_text">关注</span>
     </p>
     <p>
       <span>33</span>
       <span class="user_text">获赞</span>
     </p>

   </div>

    </div>

   <div>
     <p style="padding: 0px 12px" class="user_name">{{userInfo.name}}
       <img src="../../assets/LV4.png" alt="" style="height:13px">
       <img src="../../assets/male.png" alt="" style="height:13px ">
       <span class="vip">年度大会员</span>
     </p>
     <p style="padding: 0px 12px" class="self_Info">{{userInfo.name}}は良い学生です</p>
   </div>
   <hr>
   <div class="mid">
     <span>动态</span>
     <span>视频</span>
     <span>相册</span>
   </div>
   <hr>
  </div>
</template>

<script>
export default {
  props: ['userInfo']

}
</script>

<style scoped lang="less">
.userdetail{
    display: flex;
  .user_header{

    flex: 1;
    img{
      height: 75px;
      width: 75px;
      padding: 5px 10px;
    }
  }
  .user_edit{
    flex:2;
    display: flex;
    p{
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 13px;
    }
    .user_text{
      color: #999999;
    }
  }
}
.user_name{
  font-size: 18px;
  img{
    margin: 0px 3px;
  }
.vip{
    color: white;
    margin: 0px 7px;
    font-size: 7px;
    border: 0px ;
    border-radius: 5%;
    background-color:#fb7299;
  }

}
.self_Info{
    color:#999999;
    display: flex;
    font-size: 10px;

  }
.mid{
  height: 15px;
  display: flex;
  span{
    flex: 1;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    color: #fb7299;
    padding: 0px 40px;
  }
}

</style>
