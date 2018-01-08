<template>
  <div>
    <!-- 返回按钮 -->
    <div class="back" @click="$router.go(-1)">
      <img src="../assets/hover button.png">
    </div>
    <div class="title">关联已有共享客账号</div>
    <div class="infoItem">
      <div class="icon"><img src="../assets/username.png"></div>
      <div class="txtInput"><input type="number" placeholder="请输入用户名" v-model="username"></div>
    </div>
    <div class="infoItem">
      <div class="icon"><img src="../assets/passpord.png" height="200" width="200"></div>
      <div class="txtInput"><input type="number" placeholder="请输入密码" v-model="password"></div>
    </div>
    <div class="toast">关联后，您的微信账号和共享客账号都可以登录</div>
    <div class="login">登录</div>
  </div>
</template>

<style lang="less" scoped>
.back{
  position: fixed;
  top: 50%;
  transform:translate(-50%);
  right: -.4rem;
  width: .84rem;
  height: .84rem;
  img{
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
.title{
  margin-top: .24rem;
  padding:.12rem 0 .12rem .58rem;
  font-size: .26rem;
  color:#999999;
}
.infoItem{
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items:center;
  padding: .3rem .58rem .3rem .58rem;
  .icon{
    margin-right: .12rem;
    position: relative;
    width: .32rem;
    height: .32rem;
    img{
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .txtInput{
    display: flex;
    align-items:center;
    input{
      font-size: .28rem;
      border: none;
      outline: none;
    }
  }
}
.toast{
  margin-top: .14rem;
  padding-left: .58rem;
  font-size: .24rem;
  color: #ff5858;
}
.login{
  border-radius: .08rem;
  background: #03abff;
  margin: .64rem auto 0;
  width: 5.86rem;
  text-align: center;
  height: .82rem;
  line-height: .82rem;
  font-size: .26rem;
  color: #ffffff;
}
</style>

<script>
import resource from '../api/resource.js'
export default{
  data(){
    return{
      username: "",       //用户名
      password: "",       //密码
    }
  },
  created(){
    // resource.homeList({id:3153}).then(res => {
    //   if (res.data.code == 0) {
    //     console.log(res);
    //   }else{
    //     console.log(res.data.msg);
    //   }
    // })
  },
  methods:{
    
  }
}
</script>
