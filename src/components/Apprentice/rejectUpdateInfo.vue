<template>
	<div class="box">
		<!-- 返回按钮 -->
		<back></back>
		<!-- 用户名 -->
		<div class="item">
			<div class="itemIcon"><img src="../../assets/username.png"></div>
			<div class="itemInput">{{username}}</div>
		</div>
		<!-- 支付宝号 -->
		<div class="item">
			<div class="itemIcon"><img src="../../assets/pay.png"></div>
			<div class="itemInput"><input type="text" v-model="alipay" placeholder="支付宝账号"></div>
		</div>
		<!-- 旺旺号 -->
		<div class="item">
			<div class="itemIcon"><img src="../../assets/wangwang.png"></div>
			<div class="itemInput"><input type="text" v-model="wangCode" placeholder="旺旺号(淘宝会员名)"></div>
		</div>
		<!-- QQ号 -->
		<div class="item">
			<div class="itemIcon"><img src="../../assets/QQ.png"></div>
			<div class="itemInput"><input type="number" v-model="qqCode" placeholder="QQ号"></div>
		</div>
		<!-- 微信号 -->
		<div class="item">
			<div class="itemIcon"><img src="../../assets/weixin.png"></div>
			<div class="itemInput"><input type="text" v-model="wx" placeholder="微信号"></div>
		</div>
		<!-- 姓名 -->
		<div class="item">
			<div class="itemIcon"><img src="../../assets/name.png"></div>
			<div class="itemInput"><input type="text" v-model="name" placeholder="真实姓名"></div>
		</div>
		<!-- 选择师父或徒弟 -->
		<div class="option">
			<div class="select">
				<div><input type="radio" id="status1" v-model="status" value="0"/><label for="status1"></label><span>师父</span></div>
				<div><input type="radio" id="status2" v-model="status" value="1"/><label for="status2"></label><span>徒弟</span> </div>
			</div>
			<div class="item1" v-if="status == '1'">
				<div class="itemIcon"><img src="../../assets/referrer.png"></div>
				<div class="itemInput"><input type="text" v-model="recomcode" placeholder="推荐人代号（G开头加数字）"></div>
			</div>
		</div>
		<!-- 推荐人姓名 -->
		<div class="item" v-if="status == '1'">
			<div class="itemIcon"><img src="../../assets/referrer name.png"></div>
			<div class="itemInput"><input type="text" v-model="recomname" placeholder="推荐人用户名"></div>
		</div>
		<!-- 注册按钮 -->
		<div class="registration" @click="submit">提交</div>
		<!-- 拒绝原因提示框 -->
		<div class="bindBox" v-if="showBind">
			<div class="type1" @click.stop>
				<div class="icon"><img src="../../assets/heiho.png"></div> 
				<div class="wen">
					<div>拒绝原因</div>
					<div class="ti">{{reason}}</div>
				</div>
				<div class="butss">
					<div class="ok" @click="showBind = false">立即修改</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.box{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	background:#f3f4f5;
	height:100%;
}
.item{
	background:#fff;
	border-bottom: 1px solid #eeeeee;
	padding-left: .58rem;
	padding-right: .58rem;
	display: flex;
	align-items:center;
	height: .92rem;
	.itemIcon{
		margin-right: .14rem;
		position: relative;
		width: .33rem;
		height: .33rem;
		img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
	.itemInput{
		flex:1;
		display: flex;
		align-items:center;
		height: .92rem;
		font-size: .28rem;
		color:#999999;
		input{
			border: none;
			outline: none;
			width: 100%;
			font-size: .28rem;
			color:#999999;
		}
	}
}
.option{
	background:#fff;
	border-bottom: 1px solid #eeeeee;
	padding: .3rem .58rem;
	.select{
		display: flex;
		align-items:center;
		font-size: .26rem;
		div{
			margin-right: .2rem;
			position: relative;
			display: flex;
			align-items:center;
			input{
				opacity: 0;
			}
			label {
				position: absolute;
				left: .06rem;
				top: .06rem;
				width: .2rem;
				height: .2rem;
				border-radius: 50%;
				border: 1px solid #999999;
			}
			input:checked+label { 
				background-color: #03abff;
				border: 1px solid #03abff;
			}
			span{
				font-size: .26rem;
				color:#999999;
			}
		}
	}
	.item1{
		margin-top: .3rem;
		display: flex;
		align-items:center;
		.itemIcon{
			margin-right: .14rem;
			position: relative;
			width: .33rem;
			height: .33rem;
			img{
				position: absolute;
				width: 100%;
				height: 100%;
			}
		}
		.itemInput{
			flex:1;
			display: flex;
			align-items:center;
			input{
				border: none;
				outline: none;
				width: 100%;
				font-size: .28rem;
				color:#999999;
			}
		}
	}
}
.registration{
	margin: .5rem auto;
	border-radius: .08rem;
	background: #03abff;
	box-shadow: 0 .02rem .2rem #03abff;
	width: 6.54rem;
	text-align: center;
	height: .9rem;
	line-height: .9rem;
	font-size: .26rem;
	color: #ffffff;
}
// 取消任务弹框
.bindBox{
	background:rgba(0,0,0,.66);
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 999999;
	.type1{
		border-radius: .17rem;
		position: relative;
		margin: 4rem auto 0;
		background-color: #ffffff;
		width: 4.71rem;
		height: 3.2rem;
		.icon{
			position: absolute;
			top: -.88rem;
			left: 50%;
			transform: translate(-50%);
			width: 2rem;
			height: 1.68rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.wen{
			position: absolute;
			top: .9rem;
			width: 100%;
			text-align: center;
			font-size: .3rem;
			color: #03abff;
			.ti{
				font-size:.26rem;
				color: #666;
			}
		}
		.butss{
			position: absolute;
			top: 2.3rem;
			left: 50%;
			transform: translate(-50%);
			display: flex;
			.ok{
				border-radius: .04rem;
				background-color: #03abff;
				width: 1.4rem;
				text-align: center;
				height: .45rem;
				line-height: .45rem;
				font-size: .26rem;
				color:#ffffff;
			}
		}
	}
}
</style>
<script>
	import back from '../../common/back.vue'
	import resource from '../../api/resource.js'
	import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				username: "",			//用户名
				alipay:"",				//支付宝账号
				wangCode: "",			//旺旺号
				qqCode: "",				//QQ号
				wx: "",					//微信号
				name: "",				//真实姓名
				status: "1",			//默认徒弟身份
				recomcode: "",			//推荐人代号
				recomname: "",			//推荐人姓名
				showBind:true,          //默认拒绝原因弹框显示
      			reason:"",              //拒绝原因
      		}
      	},
      	created(){
      		document.title = "修改资料";
			//获取用户信息
			this.getuserinfo();
		},
		methods:{
			//获取用户信息
			getuserinfo(){
				resource.getUserInfo().then(res => {
					if(res.data.code == "0"){
						let userInfo = res.data.data;
						this.username = userInfo.username;
						this.alipay = userInfo.alipay_account;
						this.wangCode = userInfo.wangwang;
						this.qqCode = userInfo.qq;
						this.wx = userInfo.wechat;		
						this.status = userInfo.identity;
						this.name = userInfo.real_name;	
						this.recomcode = userInfo.master_code;	
						this.recomname = userInfo.master_username
						this.reason = userInfo.account_reject_reason;
					}else{
						this.$toast(res.data.message);
					}
				});
			},
			//点击提交
			submit(){
				if(this.alipay == ""){
					this.$toast("请填写支付宝账号!");
				}else if(this.alipay.indexOf(" ") != -1){
					this.$toast("支付宝账号不能包括空格!");
				}else if(this.alipay.indexOf("	") != -1){
					this.$toast("支付宝账号不能包括空格!");
				}else if(this.wangCode == ""){
					this.$toast("请填写旺旺号!");
				}else if(this.wangCode.indexOf(" ") != -1){
					this.$toast("旺旺号不能包括空格!");
				}else if(this.wangCode.indexOf("	") != -1){
					this.$toast("旺旺号不能包括空格!");
				}else if(this.qqCode == ""){
					this.$toast("请填写QQ号!");
				}else if(!this.judgmentqq.test(this.qqCode)){
					this.$toast("QQ号格式不正确!");
				}else if(this.wx == ""){
					this.$toast("微信号不能为空!");
				}else if(!this.judgmentWeixin.test(this.wx)){
					this.$toast("微信号格式不正确!");
				}else if(this.name == ""){
					this.$toast("请填写真实姓名!");
				}else if(this.name.indexOf(" ") != -1){
					this.$toast("真实姓名不能包括空格!");
				}else if(this.status == "1" && this.recomcode == ""){
					this.$toast("请填写推荐人代号!");
				}else if(this.status == "1" && !this.judgmentCode.test(this.recomcode)){
					this.$toast("推荐人代号格式不正确!");
				}else if(this.status == "1" && this.recomname == ""){
					this.$toast("请填写推荐人用户名!");
				}else if(this.status == "1" && this.recomname.indexOf(" ") != -1){
					this.$toast("推荐人用户名不能包括空格!");
				}else{
					//获取openid
					let userObj = {
						alipay_account:this.alipay,	//支付宝账号
						wangwang: this.wangCode,	//旺旺号
						qq: this.qqCode,			//qq号
						wechat: this.wx,			//微信号
						real_name: this.name,		//真实姓名
						identity: this.status,		//身份代号（0师父，1徒弟）
					}
					if(this.status == "1"){//选择徒弟
						userObj.master_code = this.recomcode;
						userObj.master_username = this.recomname;
					}
					//请求修改接口
					this.update(userObj);
				}
			},
			//请求修改接口
			update(userObj){
				Indicator.open({
					text: '正在提交...',
					spinnerType: 'fading-circle'
				});
				resource.updateUserInfo(userObj).then(res => {
					Indicator.close();
					if(res.data.code == "0"){
						this.$toast("修改成功");
						this.$router.go(-1);
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