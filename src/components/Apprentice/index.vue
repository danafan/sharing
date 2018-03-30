<template>
	<div>
		<div>
			<div class="banner">
				<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide v-for="(item,index) in banner" :key="index">
						<img v-if="index == 1" :src="item" @click="$router.push('/taskRole')">
						<img v-else :src="item">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>			
			<div class="title">
				～<div class="flower"><img src="../../assets/flower.png"></div>
				<div class="txt">申请任务</div>～
			</div>
			<div class="taskList">
				<div class="listNull" v-if="listNull">
					<div class="img"><img src="../../assets/mascot.png"></div>
					<!-- 系统无任务，有时间 -->
					<div class="txt" v-if="toastTxt == '0'">您当前任务已被领完，下一波</div>
					<div class="txt" v-if="toastTxt == '0'">任务来临时间为{{time}}</div>
					<div class="txt" v-if="toastTxt == '0'">任务数量为{{could}}个，请提前做好准备哦～</div>
					<div v-if="toastTxt == '0'">
						<div class="reload" v-if="reload" @click="reloads">轻触刷新</div>	
						<div class="zhuan" v-else>
							<mt-spinner :type="3" color="#03abff"></mt-spinner>	
						</div>
					</div>
					<!-- 已领取任务 -->
					<div class="txt" v-if="toastTxt == '1'">{{toastxt}}</div>
					<!-- 系统无任务 -->
					<div class="txt" v-if="toastTxt == '2'">系统暂时没有发布新任务哦～</div>
				</div>
				<div class="listshow" v-else>
					<div class="buttons" @click="application">{{butTxt}}</div>
					<div class="txt">
						<div class="wei" v-if="shen">总任务数量为{{could}}个，当前排队人数为{{ren}}个</div>
						<div class="yi" v-else>
							<div>
								您当前已等待{{time}}，如若申请成功，
							</div>
							<div>
								微信将会给您提示，请您耐心等待哦～
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
		<!-- 弹框部分 -->
		<div class="stateBox" v-if="showState" @click="showState = false">
			<!-- 审核和删除 -->
			<div class="type1" @click.stop>
				<div class="icon"><img src="../../assets/wait.png"></div>	
				<div class="wen">
					<div>确认放弃排队，放弃以后</div>
					<div>您将重新进行排队？</div>
				</div>
				<div class="butss">
					<div class="ok" @click="ok">确认</div>
					<div class="close" @click="showState = false">取消</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="less">
.banner{
	width: 100%;
	height: 2.96rem;
	.swiper-container{
		width: 100%;
		height: 100%;
		.swiper-slide{
			width: 100%;
			height: 100%; 
			img{
				width: 100%;
				height: 100%;
			}
		}
		.swiper-pagination{
			height: .001rem;
			bottom: 70px;
		}
	}
}
.title{
	font-family: "Source Han Sans";
	margin-top: .34rem;
	display: flex;
	justify-content:center;
	align-items:center;
	width: 100%;
	height: .48rem;
	background: #f5f9fc;
	font-size: .28rem;
	.flower{
		margin-left: .1rem;
		margin-right: .1rem;
		position: relative;
		width: .34rem;
		height: .36rem;
		display: flex;
		align-items:center;
		img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
	.txt{
		font-weight: 700;
		margin-right: .1rem;
		color:#333333;
	}
}
.taskList{
	box-sizing: border-box;
	margin-bottom: .98rem;
	.listNull{
		margin: 1.42rem auto;
		.img{
			margin: 0 auto .32rem;
			width: 2.96rem;
			height: 2.96rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.txt{
			margin-bottom: .1rem;
			text-align: center;
			font-size: .26rem;
			color:#999999;
		}
		.reload{
			margin: .5rem auto 0;
			border: 1px solid #999999;
			width: 2rem;
			text-align: center;
			height: .8rem;
			line-height: .8rem;
			font-size: .28rem;
			color: #999999;
		}
		.zhuan{
			margin-top: .5rem;
			display: flex;
			justify-content: center;
		}
	}
	.listshow{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.buttons{
			display:flex;
			align-items:center;
			justify-content:center;
			margin: 1.66rem auto 0;
			border-radius: 50%;
			width:2.62rem;
			height:2.62rem;
			background: -webkit-linear-gradient(#66a6ff, #89f7fe); /* Safari 5.1 - 6.0 */
			background: -o-linear-gradient(#66a6ff, #89f7fe); /* Opera 11.1 - 12.0 */
			background: -moz-linear-gradient(#66a6ff, #89f7fe); /* Firefox 3.6 - 15 */
			background: linear-gradient(#66a6ff, #89f7fe); /* 标准的语法 */
			box-shadow: 0 .08rem .4rem #89f7fe;
			font-size:.32rem;
			color: #fff;
		}
		.txt{
			margin-top:.5rem;
			width:100%;
			font-size: .28rem;
			color: #666;
			text-align: center;
		}
	}
}
// 弹框
.stateBox{
	background:rgba(0,0,0,.66);
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
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
			height: 1.76rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.wen{
			position: absolute;
			top: 1.2rem;
			width: 100%;
			text-align: center;
			font-size: .28rem;
			color: #03abff;
		}
		.butss{
			position: absolute;
			top: 2.3rem;
			left: 50%;
			transform: translate(-50%);
			display: flex;
			.ok{
				border-radius: .04rem;
				margin-right: .4rem;
				background-color: #03abff;
				width: 1.1rem;
				text-align: center;
				height: .4rem;
				line-height: .4rem;
				font-size: .26rem;
				color:#ffffff;
			}
			.close{
				border-radius: .04rem;
				border:1px solid #03abff;
				width: 1.1rem;
				text-align: center;
				height: .4rem;
				line-height: .4rem;
				font-size: .26rem;
				color:#03abff;
			}
		}
	}
}
</style>
<script>
import {mapActions, mapGetters} from 'vuex'
import { swiper, swiperSlide } from "vue-awesome-swiper"
import resource from '../../api/resource.js'
export default{
	data(){
		return{		
			subClick: true,						//默认按钮可点击一次
			banner: [
			require('../../assets/background1.png'),
			require('../../assets/background2.png')
			],
			page: 1,								//当前页码
			listNull: "",							//默认任务列表为空，显示刷新按钮
			toastTxt: "0",							//提示(0:无任务;1:有任务,没到时间;2:已领取任务)
			toastxt: "",							//错误提示
			swiperOption: {                   
		    	loop: true,                          //循环播放
		        initialSlide: 0,					 //默认显示第一个图片
		        autoplay: 3000,                      //自动播放间隔时间
		        setWrapperSize: true,				 //flex布局
		        pagination: '.swiper-pagination',	 //分页器
		        paginationClickable: true,           //点击某一个圆点跳转到相应图片
		        autoplayDisableOnInteraction: false  //操作之后会继续自动滑动
		    },
		    time: "",						 		 //下一波任务来临时间
		    shen: true,								 //默认当前有任务可以申请
		    could: "21",							 //当前任务总数量
		    ren: "3",								 //当前排队人数
		    reload: true,							 //默认显示刷新字
		    isLoads: true,							 //默认刷新按钮可以点击
		    butTxt: "申请任务",						 //中间按钮的文字
		    showState: false,						 //默认取消排队弹框不显示
		}
	},  
	created(){
		document.title = "共享客";
		this.set_route("index");
		this.getTaskList(this.page);
	},
	methods:{
		...mapActions([
			'set_route'
			]),
		//点击刷新
		reloads(){
			if(this.isLoads == true){
				this.isLoads = false;
				this.reload = false;	//开始转
				this.getTaskList(this.page);
				let _this = this;
				setTimeout(function(){
					_this.isLoads = true;
				},30000);
			}else{
				this.$toast("操作频繁，稍后再试！");
			}
			
		},
		//获取任务列表
		getTaskList(page){
			resource.taskList({page:page}).then(res => {
				this.reload = true;	//结束转
				if(res.data.code == "0"){
					this.listNull = false;
					
				}else if(res.data.code == "1"){//三天之内已经接过任务
					this.listNull = false;
					this.toastTxt = "1";
					this.toastxt = res.data.msg;
				}else if(res.data.code == "2"){//有任务和时间
					this.listNull = true;
					this.toastTxt = "0";
					this.time = res.data.data.start_time;
					this.could = res.data.data.num;
				}else if(res.data.code == "3"){//系统无任务
					this.listNull = true;
					this.toastTxt = "2";
				}else{
					this.$toast(res.data.msg);
				}
			})
		},
		//点击中间大按钮
		application(){
			if(this.shen == true){	//申请任务
				this.shen = false;
			}else{					//排队中
				this.showState = true;
			}
		},
		//点击确认放弃排队
		ok(){
			console.log("放弃排队");
			this.showState = false;
		}

	},
	components:{
		swiper,
		swiperSlide
	}
}
</script>










