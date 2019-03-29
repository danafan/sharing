<template>
  <div class="box">
    <!-- 返回按钮 -->
    <back></back>
    <div class="tabs">
      <div class="tab" v-for="(item,index) in tabList" :class="{'seltab':index == tabId}" @click="tabId = index">{{item}}</div>
    </div>
    <div v-if="tabId == 0">
      <div class="infoItem">
        <div class="icon"><img src="../assets/username.png"></div>
        <div class="txtInput"><input type="text" placeholder="请输入用户名" v-model="username"></div>
      </div>
      <div class="infoItem">
        <div class="icon"><img src="../assets/password.png"></div>
        <div class="txtInput"><input type="password" placeholder="请输入密码" v-model="password"></div>
      </div>
    </div>
    <div v-if="tabId == 1">
      <div class="infoItem">
        <div class="icon icon1"><img src="../assets/shoujihao.png"></div>
        <div class="txtInput"><input type="text" placeholder="请输入手机号" v-model="phone"></div>
      </div>
      <div class="infoItem">
        <div class="codeBox">
          <div class="icon"><img src="../assets/code1.png"></div>
          <div class="txtInput"><input type="number" placeholder="请输入验证码" v-model="code"></div>
        </div>
        <div class="butCode" @click="getCode" :class="{'selbutCode':notBut == false}">{{codebutTxt}}</div>
      </div>
    </div>
    
    <div class="login" @click="login">立即登录</div>
  </div>
</template>

<style lang="less" scoped>
.box{
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  background:#f3f4f5;
}
.tabs{
  padding: .32rem 1.3rem;
  background: #fff;
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size: .32rem;
  color: #999;
  .tab{
    padding:0 .1rem .1rem;
    border-bottom: .04rem solid #fff;
  }
  .seltab{
    padding:0 .1rem .1rem;
    border-bottom: .04rem solid #03abff;
    color: #03abff;
  }
}
.infoItem{
  background:#fff;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items:center;
  padding: .3rem .58rem .3rem .58rem;
  display:flex;
  justify-content:space-between;
  .codeBox{
    display:flex;
  }
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
  .icon1{
    margin-right: .12rem;
    position: relative;
    width: .3rem;
    height: .42rem;
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
  .butCode{
    border: 1px solid #03abff;
    border-radius: 2rem;
    padding-left: .15rem;
    padding-right: .15rem;
    font-size: .28rem;
    height: .5rem;
    line-height:.5rem;
    color: #03abff;
  }
  .selbutCode{
    border: 1px solid #999;
    color: #999;
  }
}
.login{
  border-radius: .08rem;
  background: #03abff;
  box-shadow: 0 .02rem .2rem #03abff;
  margin: .64rem auto 0;
  width: 6.54rem;
  text-align: center;
  height: .9rem;
  line-height: .9rem;
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
      tabList:["账号登录","手机号登录"], //导航列表
      tabId: 0,                       //默认选中的是第一个导航
      openid: "",                     //openid
      headimgurl: "",                 //微信头像
      nickname: "",                   //微信昵称
      username: "",                   //用户名
      password: "",                   //密码
      phone:"",                       //手机号
      code:"",                        //验证码
      notBut: true,                   //默认获取验证码按钮可点击
      codebutTxt: "获取验证码",        //按钮文字
      time:90,                        //默认倒数90秒
      isLogin: false,                 //默认不可请求接口
    }
  },
  created(){
    document.title = "登录";
    //获取openid
    this.openid = sessionStorage.getItem("openid");
    this.headimgurl = sessionStorage.getItem("wxIcon");
    this.nickname = sessionStorage.getItem("wxname");
  },
  methods:{
      //点击登录
      login(){
        if(this.tabId == 0){
          if(this.username == ""){
            this.$toast("用户名不能为空!");
          }else if(this.password == ""){
            this.$toast("密码不能为空!");
          }else{
            this.isLogin = true;    //获取过验证码，可点击登录
            //用户关联
            this.phoneLogin(1);
          }
        }else{
          if(!this.judgmentPhone.test(this.phone)){
            this.$toast("手机号格式不正确!");
          }else if(this.code == ""){
            this.$toast("验证码不能为空!");
          }else{
          //手机号登录
          this.phoneLogin(2);
        }
      }

    },
    //点击获取验证码
    getCode(){
      if(!this.judgmentPhone.test(this.phone)){
        this.$toast("请输入正确的手机号");
      }else{
        if(this.notBut == true){//如果按钮可以点击
          let userInfo = {
            phone: this.phone
          }
          resource.new_send_sms(userInfo).then(res => {
            if(res.data.code == 1){ //发送成功
              this.$toast("发送成功...");
              this.isLogin = true;    //获取过验证码，可点击登录
              this.timeDown();
            }else{
              this.$toast(res.data.msg);
            }
          });
          // let userInfo = {
          //   openid: this.openid,
          //   phone: this.phone
          // }
          // resource.sendcode(userInfo).then(res => {
          //   if(res.data.code == '0'){ //发送成功
          //     this.isLogin = true;    //获取过验证码，可点击登录
          //     this.timeDown();
          //   }else{
          //     this.$toast(res.data.msg);
          //   }
          // });
        }else{
          this.$toast("操作频繁");
        }
      }
    },
    // 倒计时
    timeDown () {
      var _this = this;
      if (_this.time > 0) {
        _this.notBut = false;   //按钮不可点击
        _this.time --;
        _this.codebutTxt = "重新发送" + _this.time + "秒";
        setTimeout(_this.timeDown, 1000);
      } else {
        _this.notBut = true;    //按钮可以点击
        _this.time = "90";
        _this.codebutTxt = "获取验证码";
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
    },
    //手机号登录
    phoneLogin(type){
        if(this.isLogin == true){ // 如果获取过验证码请求登录接口
          // let userInfo = {
          //   openid: this.openid,          //openid
          //   headimgurl: this.headimgurl,  //微信头像
          //   nickname: this.nickname,      //微信昵称
          //   phone: this.phone,            //手机号
          //   code: this.code               //密码
          // }
          // resource.phonejoin(userInfo).then(res => {
          //   if(res.data.code == '0'){ //关联成功
          //       //获取用户ID和身份
          //       let uid = res.data.data.id;
          //       let status = res.data.data.identity;
          //       let usercode = res.data.data.code;
          //       sessionStorage.setItem("uid",uid);
          //       sessionStorage.setItem("status",status);
          //       sessionStorage.setItem("usercode",usercode);
          //       this.$toast("关联成功！");
          //       this.$router.replace('/navbar');
          //   }else if(res.data.code == '4'){//正在审核
          //     let msg = res.data.msg;
          //     let username = res.data.username;
          //     this.$router.push('/verification?mess=' + msg + '&username=' + username);
          //   }else{
          //     this.$toast(res.data.msg);
          //   }
          // });
          if(type == 1){
            var userInfo = {
              login_method:1,
              username: this.username,    //用户名
              password: this.password     //密码
            }
          }else if(type == 2){
            var userInfo = {
              login_method:2,
              phone: this.phone,            //手机号
              code: this.code               //密码
            }
          }
          
          resource.new_login(userInfo).then(res => {
            if(res.data.code == 1){ //关联成功
                //获取用户ID和身份
                let uid = res.data.user_info.id;
                let status = res.data.user_info.identity;
                let usercode = res.data.user_info.code;
                sessionStorage.setItem("uid",uid);
                sessionStorage.setItem("status",status);
                sessionStorage.setItem("usercode",usercode);
                this.$toast("登录成功");
                this.$router.replace('/navbar');
            }else if(res.data.code == '4'){//正在审核
              let msg = res.data.msg;
              let username = res.data.user_info.username;
              this.$router.push('/verification?mess=' + msg + '&username=' + username);
            }else{
              this.$toast(res.data.msg);
            }
          });
        }
      }

    },
    components:{
      back
    }
  }
</script>
