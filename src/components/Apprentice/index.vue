<template>
	<div>
		<div v-infinite-scroll="loadMore">
			<div class="banner">
				<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide v-for="(item,index) in banner" :key="index">
						<img :src="item">
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
					<div class="txt" v-if="toastTxt == '0'">您当前任务已被领完，下一波任务来临时间为{{time}}</div>
					<div class="txt" v-if="toastTxt == '0'">任务数量为{{could}}个，请提前做好准备哦～</div>
					<!-- 已领取任务 -->
					<div class="txt" v-if="toastTxt == '1'">系统检测到您三天之内有接过任务或有未完成任务</div>
					<div class="txt" v-if="toastTxt == '1'">暂时不能接新任务哦～</div>
					<!-- 系统无任务 -->
					<div class="txt" v-if="toastTxt == '2'">系统暂时没有发布新任务哦～</div>
				</div>
				<div class="listshow" v-else>
					<div class="taskItem" v-for="item in taskList" @click="detail(item.task_id)">
						<!-- 大图 -->
						<div class="itemImg">
							<img class="taskImg" :src="baseUrl + item.goods_img">
						</div>
						<!-- 下面文字部分 -->
						<div class="itemTxt">
							<!-- 左侧 -->
							<div class="txtLeft">
								<div class="leftName">
									<span v-if="item.shop_type == '淘宝'"><img src="../../assets/taobao.png"></span>
									<span v-else><img src="../../assets/tian mao.png"></span>
									<span class="name">{{item.keyword[0]}}</span>
								</div>
								<div class="leftSub">限<span>{{item.num}}</span>份</div>
							</div>
							<!-- 右侧 -->
							<div class="txtRight">
								<div class="application">申请任务</div>
								<div class="residual">剩余<span>{{item.residue_num}}</span>次</div>
							</div>
						</div>
					</div>
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
	}
}
.title{
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
	padding: .4rem .24rem .15rem .24rem;
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
			text-align: center;
			font-size: .26rem;
			color:#999999;
		}
	}
	.listshow{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.taskItem{
			margin-bottom: .22rem;
			width: 3.4rem;
			.itemImg{
				width: 3.4rem;
				height: 2.8rem;
			}
			.taskImg{
				width: 100%;
				height: 100%;
			}
			.itemTxt{
				margin-top: .2rem;
				display: flex;
				justify-content: space-between;
				.txtLeft{
					.leftName{
						font-size: .28rem;
						color: #333333;
						img{
							width: .34rem;
							height: .34rem;
						}
						.name{
							position: relative;
							top: -3px;
							left: -3px;
						}
					}
					.leftSub{
						font-size: .24rem;
						color:#999999;
						span{
							color:#ff5858;;
						}
					}
				}
				.txtRight{
					text-align: end;
					.application{
						border-radius: .04rem;
						width: 1.2rem;
						text-align: center;
						height: .34rem;
						line-height: .34rem;
						background: #03abff;
						font-size: .24rem;
						color: #ffffff;
					}
					.residual{
						position: relative;
						top:5px;
						font-size: .24rem;
						color:#999999;
						span{
							color: #ff5858;
						}
					}
				}
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
			banner: [
			require('../../assets/background1.png'),
			require('../../assets/background2.png')
			],
			isLoad: true,							//默认可以加载
			page: 0,								//当前页码
			taskList:[],							//所有任务列表
			listNull: false,						//默认没有申请过任务
			toastTxt: "0",							//提示(0:无任务;1:有任务,没到时间;2:已领取任务)
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
		    could: "",								 //任务数量
		}
	},  
	created(){
		this.set_route("index");
	},
	methods:{
		...mapActions([
			'set_route'
			]),
		//获取任务列表
		getTaskList(page,type){
			resource.taskList({page:page}).then(res => {
				if(res.data.code == "0"){
					let taskList = res.data.data.data;
					if(type == "0"){
						if(taskList.length < "12"){	// 某一页不足12条
							this.isLoad = false;
							this.taskList = this.taskList.concat(Array.from(taskList));
						}else{								//正常
							this.taskList = this.taskList.concat(Array.from(taskList));
						}
					}else{
						this.taskList = taskList
					}
				}else if(res.data.code == "1"){//三天之内已经接过任务
					this.listNull = true;
					this.toastTxt = "1";
				}else if(res.data.code == "2"){//有任务和时间
					this.listNull = true;
					this.toastTxt = "0";
					this.time = res.data.data.start_time;
					this.could = res.data.data.task_num;
				}else if(res.data.code == "3"){//系统无任务
					this.listNull = true;
					this.toastTxt = "2";
				}else{
					this.$toast(res.data.msg);
				}
				if(type == "1"){
					this.updateTxt = "刷新成功";
					let _this = this;
					setTimeout(function(){
						_this.update = false;
						_this.updateTxt = "松开刷新";
					},2000);
				}
			})
		},
		// 点击申请任务成功后进入详情
		detail(id){
			resource.taskDetail({taskid:id}).then(res => {
				if(res.data.code == "0"){
					let taskid = res.data.usertaskid;
					this.$router.push(`/taskDetail?id=${taskid}`);
				}else{
					this.$toast(res.data.msg);
				}		
			});
		},
		//上拉加载
		loadMore(){
			//获取任务列表
			this.page += 1;
			if(this.isLoad == true){
				this.getTaskList(this.page,"0");
			}else{
				console.log("没有更多");
			}
		}
		
	},
	components:{
		swiper,
		swiperSlide
	}
}
</script>










