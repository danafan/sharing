<template>
	<div class="box">
		<div class="codeItem">
			<div class="icon">
				<img src="../assets/phone.png">
			</div>
			<div class="inputTxt">
				<input type="number" v-model="phone" placeholder="请输入您的手机号">
			</div>
		</div>
		<div class="codeItem1">
			<div class="icon">
				<img src="../assets/code.png">
			</div>
			<div class="inputTxt">
				<input type="number" v-model="code" placeholder="请输入您收到的验证码">
			</div>
			<div class="but" :class="{'notbut':notBut == false}" @click="getCode">{{codeTxt}}</div>
		</div>
		<div class="sub" :class="{'sub1':subBacks}" @click="submit">{{butTxt}}</div>
	</div>
</template>
<style lang="less" scoped>
.box{
	position: absolute;
	top: 0;
	left: 0;
	width:100%;
	height:100%;
	background: #f4f5f6;
}
.codeItem{
	display: flex;
	align-items: center;
	border-bottom: 1px solid #f4f4f4;
	padding-left: .6rem;
	padding-right: .6rem;
	background:#fff;
	width: 100%;
	height: 1.36rem;
	.icon{
		margin-right: .14rem;
		position:relative;
		width: .5rem;
		height:.52rem;
		img{
			position:absolute;
			width: 100%;
			height:100%;
		}
	}
	.inputTxt{
		display:flex;
		align-items:center;
		flex:1;
		position:relative;
		input{
			border: none;
			outline: none;
			width:100%;
			font-size: .28rem;
		}
		::-webkit-input-placeholder { /* WebKit browsers */ 
			color: #999; 
		} 
		:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
			color: #999; 
		} 
		::-moz-placeholder { /* Mozilla Firefox 19+ */ 
			color: #999; 
		} 
		:-ms-input-placeholder { /* Internet Explorer 10+ */ 
			color: #999; 
		} 
	}
}
.codeItem1{
	position:relative;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #f4f4f4;
	padding-left: .6rem;
	padding-right: .6rem;
	background:#fff;
	width: 100%;
	height: 1.36rem;
	.icon{
		margin-right: .14rem;
		position:relative;
		width: .5rem;
		height:.52rem;
		img{
			position:absolute;
			width: 100%;
			height:100%;
		}
	}
	.inputTxt{
		display:flex;
		align-items:center;
		position:relative;
		input{
			border: none;
			outline: none;
			font-size: .28rem;
		}
		::-webkit-input-placeholder { /* WebKit browsers */ 
			color: #999; 
		} 
		:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
			color: #999; 
		} 
		::-moz-placeholder { /* Mozilla Firefox 19+ */ 
			color: #999; 
		} 
		:-ms-input-placeholder { /* Internet Explorer 10+ */ 
			color: #999; 
		} 
	}
	.but{
		position:absolute;
		right: .6rem;
		border:1px solid #03abff;
		border-radius: .24rem;
		width:2rem;
		text-align: center;
		height:.48rem;
		line-height: .47rem;
		font-size:.28rem;
		color: #03abff;
	}
	.notbut{
		border:1px solid #999;
		border-radius: .24rem;
		color: #999;
	}
}
.sub{
	margin: 1.06rem auto;
	border-radius: .08rem;
	background: #d8d8d8;
	box-shadow: 0 .02rem .2rem #d8d8d8;
	width: 6.54rem;
	text-align: center;
	height: .9rem;
	line-height: .9rem;
	font-size: .26rem;
	color: #ffffff;
}
.sub1{
	background: #03abff;
	box-shadow: 0 .02rem .2rem #03abff;
}
</style>
<script>
import resource from '../api/resource.js'
export default{
	data(){
		return{
			openid: "",					//用户openid
			router: true,				//默认是注册（绑定是false）
			phone: "",					//手机号
			code: "",					//验证码
			codeTxt: "获取验证码",		//获取验证码按钮文字
			butTxt: "下一步",				//提交按钮的文字
			time: "",					//倒计时总时间
			notBut: true,				//默认获取验证码按钮可以点击
			sub: false,					//默认最底部按钮不可点击
		}
	},
	created(){
		this.openid = sessionStorage.getItem("openid");
		let tab = this.$route.query.tab;
		if(tab == "res"){
			this.router = true;
			document.title = "新用户注册";
			this.butTxt = "下一步";
		}else if(tab == "con"){
			this.router = false;
			document.title = "绑定手机号";
			this.butTxt = "立即绑定";
		}
	},
	computed: {
		subBacks: function () {
			if (this.judgmentPhone.test(this.phone) && this.code.match(/^\d{6}$/)) {
				return this.sub = true;
			} else {
				return this.sub = false;
			}
		}
	},
	methods:{
		//点击获取验证码
		getCode(){
			if(this.phone == ""){
				this.$toast("请先输入手机号");
			}else if(!this.judgmentPhone.test(this.phone)){
				this.$toast("手机号格式不正确!");
			}else{
				if(this.notBut == true){
					// 获取验证码
					if(this.router == true){
						//注册验证码
						this.sendsms();
					}else{
						//绑定验证码
						this.bindsendsms();
					}
				}else{
					this.$toast("操作频繁"); 
				}
			}
		},
		// 用户绑定获取验证码
		bindsendsms(){
			let userObj = {
				phone: this.phone
			}
			resource.bindsendsms(userObj).then(res => {
				if(res.data.code == "0"){
					this.$toast("发送成功，请稍后...");
					this.time = res.data.invalid_time;
					// 倒计时
					this.timeDown();
				}else{
					this.$toast(res.data.msg);
				}
			})
		},
		// 用户注册获取验证码
		sendsms(){
			let userObj = {
				openid: this.openid,
				phone: this.phone
			}
			resource.sendsms(userObj).then(res => {
				if(res.data.code == "0"){
					this.$toast("发送成功，请稍后...");
					this.time = res.data.invalid_time;
					// 倒计时
					this.timeDown();
				}else{
					this.$toast(res.data.msg);
				}
			})
		},
		// 倒计时
		timeDown () {
			var _this = this;
			if (_this.time > 0) {
				_this.notBut = false;		//按钮不可点击
				_this.time --;
				_this.codeTxt = "重新发送" + _this.time + "秒";
				setTimeout(_this.timeDown, 1000);
			} else {
				_this.notBut = true;		//按钮可以点击
				_this.time = "3";
				_this.codeTxt = "获取验证码";
			}
		},
		// 点击下一步或立即绑定
		submit(){
			let uid = sessionStorage.getItem("uid");
			if(this.sub == true){
				if(this.router == true){	//注册
					this.virifysms(0);
				}else{						//绑定
					this.virifysms(1);
				}
			}else{
				this.$toast("请填写正确的手机号和验证码");
			}
		},
		//验证短信验证码
		virifysms(type){
			if(this.sub == true){
				let userObj = {
					type: type,
					phone: this.phone,
					code: this.code
				}
				resource.virifysms(userObj).then(res => {
					if(res.data.code == "0"){
						if(type == "0"){//注册
							//跳转到注册页面
							this.$router.push('/registration?phone=' + this.phone);
						}else if(type == "1"){//绑定
							this.$toast("绑定成功");
							//跳转到首页
							this.$router.push('/index');
						}
					}else{
						this.$toast(res.data.msg);
					}
				})
			}else{
				this.$toast("请输入正确的手机号或验证码");
			}
		}

	}



}
</script>



