<template>
	<div class="box">
		<!-- 身份证 -->
		<div class="idCard" v-if="first">
			<div class="inputInfo">
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
				<div class="title">请上传身份证照片</div>
				<div class="imgs">
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
				<div class="demoImg">
					<img src="../assets/example1.png">
					<img src="../assets/example2.png">
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
	padding-bottom: .3rem;
	padding-left: .4rem;
	padding-right: .4rem;
	margin-top: .1rem;
	width: 100%;
	background:#fff;
	.title{
		padding-top: .24rem;
		padding-bottom: .24rem;
		font-size: .26rem;
		color: #666;
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
		margin-top: .4rem;
		display:flex;
		justify-content: space-between;
		img{
			width: 2.88rem;
			height: 2.2rem;
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
	import cerupload from '../common/cerupload.vue'
	export default{
		data(){
			return{
				first: true,						//默认第一页
				username: "",						//用户名
				card: "",							//身份证号
				showCardTop: "",				    //预览的身份证正面图片地址
				cardTopImg: "",						//传递到后台的身份证正面图片对象
				showCardBot: "",					//预览的身份证反面图片地址
				cardBotImg: "",						//传递到后台的身份证反面图片对象
			}
		},
		methods:{
			//上传图片成功回调
			callbackFn:function(obj){
				let val = obj.files;	//图片数组
				let type = obj.type;	//图片类型（1:正面；2:反面）
				for(let i = 0;i < val.length;i ++){
					let obj = val[i];
					if(type == "1"){
						this.cardTopImg = obj;				//传递到后台的身份证正面图片对象
					}else if(type == "2"){
						this.cardBotImg = obj;				//传递到后台的身份证反面图片对象
					}
					let fr = new FileReader();
					let _this = this;
					fr.onload=function () {
						if(type == "1"){
							_this.showCardTop = this.result;//预览身份证正面图片地址
						}else if(type == "2"){
							_this.showCardBot = this.result;//预览身份证反面图片地址
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
				}
			},
			//提交
			next(){
				if(this.username == ""){
					this.$toast("请输入真实姓名");
				}else if(!this.judgmentCard.test(this.card)){
					this.$toast("请输入正确的身份证号");
				}else if(this.cardTopImg == ""){
					this.$toast("请上传身份证正面照片");
				}else if(this.cardBotImg == ""){
					this.$toast("请上传身份证反面照片");
				}else{
					let Obj = {
						username: this.username,
						card: this.card,
						cardTopImg: this.cardTopImg,
						cardBotImg:this.cardBotImg
					}
					console.log(Obj);
				}
			}
		},
		components:{
			cerupload
		}
	}
</script>





















