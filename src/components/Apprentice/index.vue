<template>
	<div>
		<div class="banner">
			<swiper :options="swiperOption" ref="mySwiper">
				<swiper-slide v-for="(item,index) in taskList" :key="index">
					<img :src="item.img">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>			
		<div class="title">
			～<div class="flower"><img src="../../assets/flower.png"></div>
			<div class="txt">申请任务</div>～
		</div>
		<div class="taskList">
			<div class="taskItem" v-for="item in taskList" @click="detail">
				<!-- 大图 -->
				<div class="itemImg">
					<img class="taskImg" :src="item.img">
				</div>
				<!-- 下面文字部分 -->
				<div class="itemTxt">
					<!-- 左侧 -->
					<div class="txtLeft">
						<div class="leftName">
							<span v-if="item.type == 1"><img src="../../assets/taobao.png"></span>
							<span v-else><img src="../../assets/tian mao.png"></span>
							<span class="name">{{item.name}}</span>
						</div>
						<div class="leftSub">限<span> {{item.sub}} </span>份</div>
					</div>
					<!-- 右侧 -->
					<div class="txtRight">
						<div class="application">申请任务</div>
						<div class="residual">剩余<span> {{item.residual}} </span>次</div>
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
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: .4rem .24rem .15rem .24rem;
	margin-bottom: .98rem;
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
</style>
<script>
import {mapActions, mapGetters} from 'vuex'
import { swiper, swiperSlide } from "vue-awesome-swiper"

export default{
	data(){
		return{
			taskList:[
			{
				img: require('../../assets/test1.jpg'),
				action: "http://www.baidu.com",
				name: "男士毛衣",
				sub: "36",
				residual: "12",
				type: 1
			},
			{
				img: require('../../assets/test2.jpg'),
				action: "http://www.baidu.com",
				name: "男士毛衣",
				sub: "36",
				residual: "12",
				type: 2
			},
			{
				img: require('../../assets/test4.jpg'),
				action: "http://www.baidu.com",
				name: "男士毛衣",
				sub: "36",
				residual: "12",
				type: 1
			},
			{
				img: require('../../assets/test5.jpg'),
				action: "http://www.baidu.com",
				name: "男士毛衣",
				sub: "36",
				residual: "12",
				type: 2
			}
			],
			swiperOption: {                   
		        loop: true,                          //循环播放
		        initialSlide: 0,					 //默认显示第一个图片
		        autoplay: 3000,                      //自动播放间隔时间
		        setWrapperSize: true,				 //flex布局
		        pagination: '.swiper-pagination',	 //分页器
		        paginationClickable: true,           //点击某一个圆点跳转到相应图片
		        autoplayDisableOnInteraction: false  //操作之后会继续自动滑动
		    }
		}
	},  
	created(){
		this.set_route("index");
	},
	methods:{
		...mapActions([
			'set_route'
			]),
		// 点击进入详情
		detail(){
			this.$router.push('/taskDetail');
		}
	},
	components:{
		swiper,
		swiperSlide
	}
}
</script>










