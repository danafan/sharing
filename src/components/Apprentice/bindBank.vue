<template>
	<div class="box">
		<!-- 银行卡 -->
		<div class="bankCard">
			<div class="inputInfo">
				<div class="infoItem" @click="showBox = true">
					<img class="icon" src="../../assets/bank.png">
					<span>{{bankTxt}}</span>
					<img class="jian" src="../../assets/advance.png">
				</div>
				<div class="infoItem">
					<img class="icon" src="../../assets/card.png">
					<input type="text" placeholder="请输入银行卡号" v-model="bandCode">
				</div>
				<div class="infoItem">
					<img class="icon" src="../../assets/card1.png">
					<input type="text" placeholder="请输入您的开户姓名" v-model="username">
				</div>
			</div>
			<div class="imgBox">
				<div class="title">请上传银行卡照片</div>
				<div class="imgs">
					<!-- 身份证正面图片 -->
					<div class="imgItem">
						<div class="img" v-if="showExample != ''">
							<img class="cha" src="../../assets/chacha.png" @click="deleteImg('3')">
							<img class="lookimg" :src="showExample">
						</div>
						<cerupload v-else @callbackFn="callbackFn"></cerupload>
					</div>
					<!-- 身份证反面图片 -->
					<div class="demoImgs">
						<img src="../../assets/example.png">
					</div>
				</div>
			</div>
			<div class="next" @click="bind">绑定</div>
		</div>
		<!-- 选择银行卡弹框 -->
		<div class="toastBox" v-if="showBox" @click="showBox = false">
			<div class="content">
				<div class="item line" v-for="item in bandList" @click="selBank(item)">
					<div class="txt">{{item.bank_name}}</div>
				</div>
			</div>
		</div>
		<!-- 遮罩 -->
		<div class="zhe" v-if="shou == true">
			<div class="loadBox">
				<img class="loading" src="../../assets/loading.png" v-if="uploadNow == true">
				<img class="success" src="../../assets/success_1f.png" v-else>
				<div class="txt">{{uploadNow == true?'正在上传...':'已完成'}}</div>
			</div>
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
		margin: 3rem auto 0; 
		border-radius: .08rem;
		background: #fff;
		width: 6.08rem;
		height: 8rem;
		overflow-y: scroll;
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
.zhe{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 999999999999;
	.loadBox{
		display:flex;
		flex-direction: column;
		align-items: center;
		border-radius: .1rem;
		background: rgba(0,0,0,.6);
		margin:4.6rem auto;
		width: 2rem;
		height: 2.6rem;
		.success{
			margin-top: .5rem;
			margin-bottom: .2rem;
			width: 1rem;
			height: 1rem;
		}
		.loading{
			margin-top: .5rem;
			margin-bottom: .2rem;
			width: 1rem;
			height: 1rem;
			animation: spin 2s linear infinite;
			-webkit-animation:spin 2s linear infinite;
			-ms-transform:spin 2s linear infinite;
			-moz-animation:spin 2s linear infinite;
			-o-animation:spin 2s linear infinite;
		}
		@keyframes spin {
			0%{
				transform: rotate(0deg);
				-webkit-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-o-transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
				-webkit-transform: rotate(360deg);
				-ms-transform: rotate(360deg);
				-moz-transform: rotate(360deg);
				-o-transform: rotate(360deg);
			}
		}
		.txt{
			font-size: .26rem;
			color: #fff;
		}
	}
}

</style>
<script>
	import cerupload from '../../common/cerupload.vue'
	import resource from '../../api/resource.js'
	import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				bankTxt:"请选择银行",					//银行名称
				bankId:"",							//选中的银行卡id
				bandCode:"",						//银行卡号
				username:"",						//开户姓名
				showExample:"",						//预览的银行卡图片地址
				exampleImg: "",						//传递到后台的银行卡图片对象
				showBox: false,						//默认选择银行框不显示
				bandList:[],						//所有银行列表
				shou: false,						//默认有遮罩
				uploadNow: true,					//提示框默认正在上传
			}
		},
		created(){
			document.title = "绑定银行卡";
			//获取银行卡列表
			this.getBanks();
		},
		methods:{
			//获取银行卡列表
			getBanks(){
				resource.getBanks().then(res => {
					if(res.data.code == 1){
						this.bandList = res.data.data;
					}else{
						this.$toast(res.data.msg)
					}
				});
			},
			//选择某一个银行
			selBank(item){
				this.bankTxt = item.bank_name;
				this.bankId = item.id;
			},
			//上传图片成功回调
			callbackFn:function(obj){
				let val = obj.files;	//图片数组
				for(let i = 0;i < val.length;i ++){
					let obj = val[i];
					this.exampleImg = obj;				//传递到后台的银行卡图片对象
					let fr = new FileReader();
					let _this = this;
					fr.onload=function () {
						_this.showExample = this.result;//预览的银行卡图片地址
					};
					fr.readAsDataURL(obj);
				}
			},
			//删除图片的方法
			deleteImg(type){
				this.showExample = "";				    //预览的银行卡图片地址
				this.exampleImg = "";					//传递到后台的银行卡图片对象
			},
			//绑定
			bind(){
				if(this.bankId == ""){
					this.$toast("请选择银行");
				}else if(this.bandCode == ""){
					this.$toast("请输入银行卡号");
				}else if (this.username == ""){
					this.$toast("请输入开户姓名");
				}else if(this.exampleImg == ""){
					this.$toast("请上传银行卡照片");
				}else{
					let Obj = {
						bank_id:this.bankId,
						bank_card_number:this.bandCode,
						open_account_name:this.username,
						bank_card_img:this.exampleImg
					}
					Indicator.open({
						text: '正在提交...',
						spinnerType: 'fading-circle'
					});
					resource.bindBank(Obj).then(res => {
						Indicator.close();
						if(res.data.code == 1){
							this.$toast("提交成功！");
							this.$router.go(-1);
						}else{
							this.$toast(res.data.msg);
						}
					});
				}
			}
			
		},
		components:{
			cerupload
		}
	}
</script>





















