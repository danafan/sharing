<template>
	<div>
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
export default{
	data(){
		return{
			taskList:[
				{
					img: require('../../assets/test1.jpg'),
					name: "男士毛衣",
					sub: "36",
					residual: "12",
					type: 1
				},
				{
					img: require('../../assets/test2.jpg'),
					name: "男士毛衣",
					sub: "36",
					residual: "12",
					type: 2
				},
				{
					img: require('../../assets/test4.jpg'),
					name: "男士毛衣",
					sub: "36",
					residual: "12",
					type: 2
				},
				{
					img: require('../../assets/test5.jpg'),
					name: "男士毛衣",
					sub: "36",
					residual: "12",
					type: 1
				},
				{
					img: require('../../assets/test3.jpeg'),
					name: "男士毛衣",
					sub: "36",
					residual: "12",
					type: 2
				},
				{
					img: require('../../assets/test1.jpg'),
					name: "男士毛衣",
					sub: "36",
					residual: "12",
					type: 1
				},
				{
					img: require('../../assets/test1.jpg'),
					name: "男士毛衣",
					sub: "36",
					residual: "12",
					type: 2
				}
			]
		}
	},
	methods:{
		// 点击进入详情
		detail(){
			this.$router.push('/taskDetail');
		}
	}
}
</script>










