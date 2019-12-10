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
    <p>mpvue小程序</p>
  </div>
  </div>
</template>

<script>
export default {
  name:"Index",
  data(){
    return{
    userInfo:{},
    isShow:false
  }
  },
  beforeMount() {
    // this.handleGetUserInfo();
    // this.isShow=true;
  },
  methods:{
    // handleGetUserInfo(){
    //   wx.getUserInfo({//wx.getUserInfo 接口直接弹出授权框的开发方式将逐步不再支持
    //     success:(data)=>{
    //       console.log(data)
    //       this.userInfo = data.userInfo
    //     },
    //     fail:(err)=>{
    //       console.log(err)
    //     }
    //   })
    // },
    // getUserInfo(data){
    //   if(data.mp.detail.rawData){
    //     handleGetUserInfo()
    //   }
    // }
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