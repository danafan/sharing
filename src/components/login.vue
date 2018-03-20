<template>
  <div>
    <!-- 返回按钮 -->
    <back></back>
    <div class="title">关联已有共享客账号</div>
    <div class="infoItem">
      <div class="icon"><img src="../assets/username.png"></div>
      <div class="txtInput"><input type="text" placeholder="请输入用户名" v-model="username"></div>
    </div>
    <div class="infoItem">
      <div class="icon"><img src="../assets/password.png"></div>
      <div class="txtInput"><input type="password" placeholder="请输入密码" v-model="password"></div>
    </div>
    <div class="toast">关联后，您的微信账号和共享客账号都可以登录</div>
    <div class="login" @click="login">登录</div>
  </div>
</template>

<style lang="less" scoped>
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
    flex:1;
    input{
      width: 100%;
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
import back from '../common/back.vue'
export default{
  data(){
    return{
      openid: "",         //openid
      headimgurl: "",     //微信头像
      nickname: "",       //微信昵称
      username: "",       //用户名
      password: "",       //密码
    }
  },
  created(){
    //获取openid
    this.openid = sessionStorage.getItem("openid");
    this.headimgurl = sessionStorage.getItem("wxIcon");
    this.nickname = sessionStorage.getItem("wxname");
  },
  methods:{
      //点击登录
      login(){
        if(this.username == ""){
          this.$toast("用户名不能为空!");
        }else if(this.password == ""){
          this.$toast("密码不能为空!");
        }else{
          let userInfo = {
            openid: this.openid,        //openid
            headimgurl: this.headimgurl,//微信头像
            nickname: this.nickname,    //微信昵称
            username: this.username,    //用户名
            password: this.password     //密码
          }
          //用户关联
          this.connection(userInfo);
        }
      },
      //用户关联
      connection(userInfo){
        resource.connection(userInfo).then(res => {
          if(res.data.code == '0'){ //关联成功
            //获取用户ID和身份
            let uid = res.data.data.id;
            let status = res.data.data.identity;
            let usercode = res.data.data.code;
            sessionStorage.setItem("uid",uid);
            sessionStorage.setItem("status",status);
            sessionStorage.setItem("usercode",usercode);
            this.$toast("关联成功！");
            this.$router.replace('/navbar');
          }else if(res.data.code == '4'){//正在审核
            let msg = res.data.message;
            let username = res.data.username;
            this.$router.push('/verification?mess=' + msg + '&username=' + username);
          }else{
            this.$toast(res.data.message);
          }
        });
      }

    },
    components:{
      back
    }
  }
  </script>
