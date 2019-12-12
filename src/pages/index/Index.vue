<template>
  <div class="indexContainer">  
    <!-- <div class="userinfo" @click="handleGetUserInfo">
    <img v-if="isShow" :src="userInfo.avatarUrl" alt=""/>
    <button v-else class="btn" open-type="getUserInfo">獲取用戶信息</button>
    <p class="name">{{userInfo.nickName}}</p> -->
    <div class="userImg">
    <open-data type="userAvatarUrl"></open-data>
    </div>
    <open-data type="userNickName"></open-data>
    <button @tap="toHomePage">mpvue小程序</button>
  </div>
  </div>
</template>

<script>
export default {
  name:"Index",
  data(){
    return{
    //userInfo:{},
    //isShow:false
  }
  },
  beforeMount() {
    // this.handleGetUserInfo();
    // this.isShow=true;
  },
  methods:{
    toHomePage(){
      let url='/pages/home/main'
      // wx.navigateTo({url})
      wx.switchTab({url})
      console.log(url)
    }

  }

}
</script>

<style>
.indexContainer{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:10rpx;
}
.userImg{
  overflow: hidden;
  display: block;
  width: 300rpx;
  height: 300rpx;
  border-radius: 50%;
}
.btn{
  width: 300rpx;
  height: 300rpx;
  border-radius: 150rpx;
  line-height: 100rpx;
  text-align: center;
}

</style>