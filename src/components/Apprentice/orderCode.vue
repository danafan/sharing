<template>
	<div>
		<!-- 返回按钮 -->
		<back></back>
		<div class="fullbox">
			<div class="fullTitle">如何查看订单编号？</div>
			<div class="fullContet">
				<div class="fullItem">
					<div class="title">第一步：打开手机淘宝APP进入我的淘宝，点击页面下方的“我的订单”里的，查看更多订单</div>
					<div class="contentImg" @click="lookImg(1)">
						<img src="../../assets/ordercode1.png">
					</div>
				</div>
				<div class="fullItem">
					<div class="title">第二步：进入我的订单，点击商品进入订单详情页</div>
					<div class="contentImg" @click="lookImg(2)">
						<img src="../../assets/ordercode2.png">
					</div>
				</div>
				<div class="fullItem">
					<div class="title">第三步：在这里即可查看订单编号</div>
					<div class="contentImg" @click="lookImg(3)">
						<img src="../../assets/ordercode3.png">
					</div>
				</div>
			</div>
		</div>
		<!-- 放大图片框 -->
		<transition name="bounce">
			<div class="bigImg" v-if="showImg" @click="showImg = false">
				<img :src="imgSrc">
			</div>
		</transition>
	</div>
</template>
<style lang="less" scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
.fullbox{
	padding: .36rem .58rem .17rem .58rem;
	.fullTitle{
		margin-bottom: .21rem;
		font-size: .3rem;
		color:#03abff;
		font-weight: 700;
	}
	.fullContet{
		.fullItem{
			margin-bottom: .21rem;
			.title{
				font-size: .26rem;
				color: #333333;
			}
			.contentImg{
				margin-top: .18rem;
				display: flex;
				justify-content: center;
				img{
					width: 2.76rem;
					height: 4.94rem;
				}
			}
		}
	}
}
.bigImg{
	z-index: 5;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.8);
	img{
		width: 100%;
		height: 100%;
	}
}
</style>
<script>
import back from '../../common/back.vue'
export default{
	data(){
		return{
			showImg: false,			//大图的框
			imgSrc: ""
		}
	},
	created(){
		//作为记录查询订单编号状态，返回用
		sessionStorage.setItem("ordercode","1");
	},
	methods:{
		lookImg(id){
			this.showImg = true;
			if(id == 1){
				this.imgSrc = require('../../assets/ordercode1.png');
			}else if(id == 2){
				this.imgSrc = require('../../assets/ordercode2.png');
			}else if(id == 3){
				this.imgSrc = require('../../assets/ordercode3.png');
			}
		}
	},
	components:{
		back
	}
}
</script>