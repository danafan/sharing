<template>
	<div>
		<!-- 返回按钮 -->
		<back></back>
		<div v-infinite-scroll="loadMore" v-if="isHistory">
			<div class="propertyItem" v-for="item in property">
				<div class="itemLeft">
					<div class="top">{{item.title}}</div>
					<div class="code">{{item.info}}</div>
					<div class="data">{{item.created_time}}</div>
				</div>
				<div class="itemRight">{{item.change_type == '0'?'+':'-'}}{{item.money}}</div>
			</div>
		</div>
		<!-- 没有资产明细 -->
		<div class="untask" v-else>
			<div class="img">
				<img src="../../assets/money 1.png">
			</div>
			<div class="txt">账户暂时无资金变动</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.propertyItem{
	border-bottom:1px solid #f4f4f4;
	display: flex;
	justify-content: space-between;
	padding: .32rem .58rem;
	.itemLeft{
		.top{
			font-size: .28rem;
			color:#333333;
		}
		.data{
			margin-top: .1rem;
			font-size: .24rem;
			color:#999999;
		}
	}
	.itemRight{
		display: flex;
		align-items:center;
		font-size: .3rem;
		color:#03abff;
	}
	// 加减不一样的文字颜色
	.txtColor{
		color:red;
	}
}
.code{
	margin-top: .1rem;
	font-size: .28rem;
	color: #666666;
}
.untask{
	.img{
		margin: 2.82rem auto 0;
		width: 4.06rem;
		height: 3.86rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.txt{
		margin-top: .24rem;
		width: 100%;
		text-align: center;
		font-size: .24rem;
		color: #999999;
	}
}
</style>
<script>
import back from '../../common/back.vue'
import resource from '../../api/resource.js'
export default{
	data(){
		return{
			isHistory: true,		//默认列表不为空
			page: 0,				//页码
			isLoad: true,			//默认可以翻页
			property:[],			//明细列表
			openid: "",				//用户openid
		}
	},
	created(){
		document.title = "资产明细";
	},
	methods:{
		//点击查看更多
		loadMore(){
			if(this.isLoad == true){
				this.page += 1;
				this.userPayHistory();
			}
		},
		//用户交易明细
		userPayHistory(){
			resource.payHistory({page: this.page}).then(res => {
				if(res.data.code == "0"){
					let property = res.data.data;
					//this.property = Array.from(property);
					// if(res.data.count == "0"){
					// 	this.isHistory = false;
					// }
					if(property.length < 12){
						this.isLoad = false;
						this.property = this.property.concat(Array.from(property));
					}else{
						this.property = this.property.concat(Array.from(property));
					}
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