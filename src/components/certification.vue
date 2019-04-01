<template>
	<div class="box">
		<!-- 身份证 -->
		<div class="idCard">
			<div class="inputInfo" v-if="isHome == true">
				<div class="infoItem">
					<img class="usericon" src="../assets/username.png">
					<input type="text" placeholder="请输入真实姓名" v-model="username">
				</div>
				<div class="infoItem">
					<img class="icon" src="../assets/cards.png">
					<input type="text" placeholder="请输入身份证号" v-model="card">
				</div>
			</div>
			<div class="imgBox">
				<div class="title" v-if="isHome == true">请上传身份证照片</div>
				<div class="imgs" v-if="isHome == true">
					<!-- 身份证正面图片 -->
					<div class="imgItem">
						<div class="img" v-if="showCardTop != ''">
							<img class="cha" src="../assets/chacha.png" @click="deleteImg('1')">
							<img class="lookimg" :src="showCardTop">
						</div>
						<cerupload v-else type="1" @callbackFn="callbackFn"></cerupload>
						<div class="toast">身份证正面</div>
					</div>
					<!-- 身份证反面图片 -->
					<div class="imgItem">
						<div class="img" v-if="showCardBot != ''">
							<img class="cha" src="../assets/chacha.png" @click="deleteImg('2')">
							<img class="lookimg" :src="showCardBot">
						</div>
						<cerupload v-else type="2" @callbackFn="callbackFn"></cerupload>
						<div class="toast">身份证反面</div>
					</div>
				</div>
				<div class="demoImg" v-if="isHome == true">
					<img src="../assets/example1.png">
					<img src="../assets/example2.png">
				</div>
				<div class="title" v-if="isHome == false">请上传截图</div>
				<div class="imgs" v-if="isHome == false">
					<!-- 支付宝截图 -->
					<div class="imgItem">
						<div class="img" v-if="showAlipay != ''">
							<img class="cha" src="../assets/chacha.png" @click="deleteImg('3')">
							<img class="lookimg" :src="showAlipay">
						</div>
						<cerupload v-else type="3" @callbackFn="callbackFn"></cerupload>
						<div class="toast">支付宝截图</div>
					</div>
					<!-- 收货地址截图 -->
					<div class="imgItem">
						<div class="img" v-if="showAddress != ''">
							<img class="cha" src="../assets/chacha.png" @click="deleteImg('4')">
							<img class="lookimg" :src="showAddress">
						</div>
						<cerupload v-else type="4" @callbackFn="callbackFn"></cerupload>
						<div class="toast">收货地址截图</div>
					</div>
				</div>
				<div class="demoImg1" v-if="isHome == false">
					<img src="../assets/example3.png">
					<img src="../assets/example4.png">
				</div>
			</div>
			<div class="next" @click="next">提交</div>
		</div>
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
.inputInfo{
	margin-top: .1rem;
	width: 100%;
	background: #fff;
	.infoItem{
		border-bottom: 1px solid #f4f4f4;
		display: flex;
		align-items: center;
		width: 100%;
		height: .88rem;
		padding-left: .4rem;
		.usericon{
			margin-right: .2rem;
			width: .3rem;
			height: .3rem;
		}
		.icon{
			margin-right: .2rem;
			width: .4rem;
			height: .3rem;
		}
		:-moz-placeholder { 
			color: #999999;
		}

		::-moz-placeholder { 
			color: #999999;
		}

		input:-ms-input-placeholder{
			color: #999999;
		}

		input::-webkit-input-placeholder{
			color: #999999;
		}
		span{
			font-size: .24rem;
			color: #999999;
		}
		input{
			border: none;
			outline: none;
			width: 100%;
			font-size: .24rem;
		}
		.jian{
			position: absolute;
			right: .4rem;
			width: .3rem;
			height:.2rem;
		}
	}
}
.imgBox{
	padding: 0 .4rem .2rem .4rem;
	margin-top: .1rem;
	width: 100%;
	background:#fff;
	.title{
		font-weight: bold;
		padding-top: .24rem;
		padding-bottom: .24rem;
		font-size: .26rem;
		color: #666;
		span{
			color: red;
		}
	}
	.imgs{
		display:flex;
		justify-content: space-between;
		.imgItem{
			.img{
				position: relative;
				width: 2.9rem;
				height: 2.22rem;
				.cha{
					position: absolute;
					top: 0;
					right: 0;
					z-index: 1;
				}
				.lookimg{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
			}
			.toast{
				margin-top: .14rem;
				width: 2.9rem;
				text-align: center;
				font-size: .26rem;
				color: #666;
			}
		}
		.demoImgs{
			img{
				width: 2.88rem;
				height: 2.2rem;
			}
		}
	}
	.demoImg{
		margin-top: .2rem;
		display:flex;
		justify-content: space-between;
		img{
			width: 2.88rem;
			height: 2.2rem;
		}
	}
	.demoImg1{
		margin-top: .2rem;
		display:flex;
		justify-content: space-between;
		img{
			width: 2.88rem;
			height: 3.8rem;
		}
	}
}
.next{
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
.toastBox{
	background: rgba(0,0,0,.6);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	.content{
		margin: 4rem auto; 
		border-radius: .08rem;
		background: #fff;
		width: 6.08rem;
		.item{
			padding-left: .4rem;
			display:flex;
			align-items: center;
			width: 100%;
			height: .76rem;
			img{
				margin-right: .18rem;
				width: .32rem;
				height: .32rem;
			}
			.txt{
				font-size: .26rem;
				color: #666;
			}
		}
		.line{
			border-bottom: 1px solid #f4f4f4;
		}
	}
}
</style>
<script>
	import { Indicator } from 'mint-ui';
	import resource from '../api/resource.js'
	import cerupload from '../common/cerupload.vue'
	export default{
		data(){
			return{
				status:"",							//判断用户身份（0:师父；1:徒弟）
				username: "",						//用户名
				card: "",							//身份证号
				showCardTop: "",				    //预览的身份证正面图片地址
				cardTopImg: "",						//传递到后台的身份证正面图片对象
				showCardBot: "",					//预览的身份证反面图片地址
				cardBotImg: "",						//传递到后台的身份证反面图片对象
				showAlipay: "",				    	//预览的支付宝图片地址
				alipayImg: "",						//传递到后台的支付宝图片对象
				showAddress: "",					//预览的收货地址图片地址
				addressImg: "",						//传递到后台的收货地址图片对象
				isHome:false,						//默认二审未通过（上面四个未显示）
				l1:"",								//一审状态
				l2:"",								//二审状态
			}
		},
		created(){
			// this.status = sessionStorage.getItem("status");
			this.l1 = this.$route.query.status1;
			this.l2 = this.$route.query.status2;
			if(this.l1 == "0" || this.l1 == "3"){			// 一审未通过
				this.isHome = false;
			}else if(this.l2 == "0" || this.l2 == "3"){		// 二审未通过
				this.isHome = true;
			}
		},
		methods:{
			//上传图片成功回调
			callbackFn:function(obj){
				console.log()
				let val = obj.files;	//图片数组
				let type = obj.type;	//图片类型（1:正面；2:反面）
				for(let i = 0;i < val.length;i ++){
					let obj = val[i];
					if(type == "1"){
						this.cardTopImg = obj;				//传递到后台的身份证正面图片对象
					}else if(type == "2"){
						this.cardBotImg = obj;				//传递到后台的身份证反面图片对象
					}else if(type == "3"){
						this.alipayImg = obj;				//传递到后台的支付宝图片对象
					}else if(type == "4"){
						this.addressImg = obj;				//传递到后台的收货地址图片对象
					}
					let fr = new FileReader();
					let _this = this;
					fr.onload=function () {
						if(type == "1"){
							_this.showCardTop = this.result;//预览身份证正面图片地址
						}else if(type == "2"){
							_this.showCardBot = this.result;//预览身份证反面图片地址
						}else if(type == "3"){
							_this.showAlipay = this.result;//预览身份证反面图片地址
						}else if(type == "4"){
							_this.showAddress = this.result;//预览身份证反面图片地址
						}
					};
					fr.readAsDataURL(obj);
				}
			},
			//删除图片的方法
			deleteImg(type){
				if(type == "1"){
					this.showCardTop = "";				    //预览的身份证正面图片地址
					this.cardTopImg = "";					//传递到后台的身份证正面图片对象
				}else if(type == "2"){
					this.showCardBot = "";				    //预览的身份证反面图片地址
					this.cardBotImg = "";					//传递到后台的身份证反面图片对象
				}else if(type == "3"){
					this.showAlipay = "";				    //预览的身份证反面图片地址
					this.alipayImg = "";					//传递到后台的身份证反面图片对象
				}else if(type == "4"){
					this.showAddress = "";				    //预览的身份证反面图片地址
					this.addressImg = "";					//传递到后台的身份证反面图片对象
				}
			},
			//提交
			next(){
				if(this.l1 == "0" || this.l1 == "3"){
					if(this.alipayImg == ""){
						this.$toast("请上传支付宝截图");
					}else if(this.addressImg == ""){
						this.$toast("请上传收货地址截图");
					}else{
						this.submit();
					}
				}else if(this.l2 == "0" || this.l2 == "3"){
					if(this.username == ""){
						this.$toast("请输入真实姓名");
					}else if(!this.judgmentCard.test(this.card)){
						this.$toast("请输入正确的身份证号");
					}else if(this.cardTopImg == ""){
						this.$toast("请上传身份证正面照片");
					}else if(this.cardBotImg == ""){
						this.$toast("请上传身份证反面照片");
					}else{
						this.submit();
					}
				}
			},
			submit(){
				let Obj = {
					openid: sessionStorage.getItem("openid"),
					real_name: this.username,
					identity_card_num: this.card,
					identity_cart_img1: this.cardTopImg,
					identity_cart_img2: this.cardBotImg,
					identity_cart_img3: this.alipayImg,
					identity_cart_img4:this.addressImg
				}
				Indicator.open('正在提交...');
				resource.uploadidentity(Obj).then(res => {
					Indicator.close();
					if(res.data.code == "1"){
						this.$toast(res.data.message);
						this.$router.go(-1);
					}else{
						this.$toast(res.data.message);
					}
				});
			}
		},
		components:{
			cerupload
		}
	}
</script>





















