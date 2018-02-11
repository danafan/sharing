<template>
	<div>
		<!-- 上面背景图 -->
		<div class="back3">
			<img src="../assets/background3.png">
		</div>
		<!-- 多选问题 -->
		<div class="question" v-if="num == 3 || num == 5 || num == 9">
			<div class="questionTitle">{{selTopic.num}}</div>
			<mt-checklist
			class="da"
			:max="5"
			v-model="values"
			:options="selTopic.answer">
		</mt-checklist>
		<div class="toast">提示：<span>{{selTopic.toast}}</span></div>
	</div>	
	<!-- 单选问题 -->
	<div class="question" v-else>
		<div class="questionTitle">{{selTopic.num}}</div>
		<mt-radio
		class="da"
		v-model="value"
		:options="selTopic.answer">
	</mt-radio>
	<div class="toast">提示：<span>{{selTopic.toast}}</span></div>
</div>	
<!-- 下面按钮组 -->
<div class="buts" v-if="go">
	<div class="but" v-if="num > 0 && num <= 9" @click="pro">上一题</div>
	<div class="but" :class="{maynot: may == false}" @click="next">下一题</div>
</div>
<!-- 去关联按钮 -->
<div class="buts" v-else>
	<div class="butsd" @click="goCon">去关联</div>
</div>
</div>
</template>
<style scoped lang="less">
.back3{
	width: 100%;
	height: 3rem;
	img{
		width: 100%;
		height: 100%;
	}
}
.question{
	.questionTitle{
		padding-left: .35rem;
		margin-top: .6rem;
		font-size: .3rem;
		color: #333;
		font-weight: bold;
	}
}
.da{
	margin-bottom: .1rem;
	font-size: .26rem;
	color: #666;
}
.toast{
	padding-left: .3rem;
	padding-right: .3rem;
	font-size: .24rem;
	color: #666;
	span{
		border-bottom: 1px solid #666;
	}
}
.buts{
	margin-top: .64rem;
	display: flex;
	justify-content: space-around; 
	.but{
		border: 1px solid #03abff;
		border-radius: .09rem;
		width: 2.62rem;
		text-align: center;
		height: .76rem;
		line-height: .76rem;
		font-size: .26rem;
		color: #03abff;
	}
	.maynot{
		border: 1px solid #999;
		background: #999;
		color: #fff;
	}
	.butsd{
		border: 1px solid #03abff;
		border-radius: .09rem;
		background: #03abff;
		width: 2.62rem;
		text-align: center;
		height: .76rem;
		line-height: .76rem;
		font-size: .26rem;
		color: #fff;
	}
}

</style>
<script>
import { Radio,Checklist } from 'mint-ui';
export default{
	data(){
		return{
			go: true,
			num: 0,						//当前的题号
			selTopic:{},				//当前的题
			value: "",					//当前选中的答案
			values: [],					//复选的问题
			may: false,					//默认下一题不可点击
			topic:[
			{
				num: "1.通过什么方式找到商家发布的宝贝？（单选）",
				answer:[
				{
					label: '使用“店铺名称”搜索进店查找',
					value: '1'
				},
				{
					label: '使用“掌柜旺旺”名称搜索进店查找',
					value: '2'
				},
				{
					label: '使用商家指定的“关键词”搜索查找',
					value: '3'
				}
				],
				toast:"通过直接进店或直接访问宝贝链接的方式进行交易宝贝很容易被淘宝查出虚假交易，从而导致宝贝和店铺降权，正确的做法是使用商家指定的关键词在搜索结果页中一一查找",
				Correct: "3"
			},
			{
				num: "2.你是否知道平台什么时候返还任务金额的本金和佣金？(单选)",
				answer:[
				{
					label: '下单之后',
					value: '1'
				},
				{
					label: '收获之后',
					value: '2'
				},
				{
					label: '下单付款，并在任务页面提交订单号，经系统审核通过后',
					value: '3'
				}
				],
				toast:"共享客是立返平台，任务订单通过系统审核后本金和佣金是立即返还到账户内的",
				Correct: "3"
			},
			{
				num: "3.按照指定的关键词找不到商家发布的宝贝怎么办？（单选）",
				answer:[
				{
					label: '放弃任务',
					value: '1'
				},
				{
					label: '自行更改关键词或是添加搜索条件 缩小搜索范围',
					value: '2'
				},
				{
					label: '询问平台其他会员，索要宝贝链接或对应店铺',
					value: '3'
				}
				],
				toast:"由于千人千面的影响，商家提供的关键词在查询时可能找不到，这种情况可选择放弃任务。千万不要自行更改搜索条件！或者询问其他会员！（一经发现，封号处理！）",
				Correct: "1"
			},
			{
				num: "4.如果需要与商家需要旺旺聊天时，下列哪些内容不能说?（多选）",
				answer:[
				{
					label: '我是任务的',
					value: '1'
				},
				{
					label: '我是共享客的',
					value: '2'
				},
				{
					label: '我是刷*的',
					value: '3'
				}
				],
				toast:"如需要与商家进行旺旺聊天时，严禁提及任何与做任务相关的信息、平台信息（一经发现，封号处理），可以模仿正常交易问一些常规问题，如：什么材质，该选什么码数，什么时候发货等问题，不知道如何提问，可参照宝贝问大家",
				Correct: ['1','2','3']
			},
			{
				num: "5.如果宝贝实际价格高于商家提供的价格怎么办（运费等）？（单选）",
				answer:[
				{
					label: '正常下单付款，平台会按照实付金额返本金',
					value: '1'
				},
				{
					label: '联系商家修改改价格',
					value: '2'
				},
				{
					label: '害怕返还的本金不符，放弃任务',
					value: '3'
				}
				],
				toast:"实付金额是多少，返款本金就会返多少。严禁任何联系商家修改价格的行为！（一经发现，封号处理）",
				Correct: "1"
			},
			{
				num: "6.任务要求浏览商品3分钟，我只浏览一分钟（或者不浏览），会有什么后果？（多选）",
				answer:[
				{
					label: '自己的旺旺号更容易被淘宝标记为黑号',
					value: '1'
				},
				{
					label: '一经发现，所得佣金将会扣除（多次行为，封号处理）',
					value: '2'
				},
				{
					label: '没关系，商家发现不了',
					value: '3'
				}
				],
				toast:"做任务是要尽量模拟真实购物步骤，大量的过快成交，不仅对商家不安全，对自己的账号也不安全。一经，平台将会扣除本单任务的所有佣金。（严重的给予封号处理！）",
				Correct: ['1','2']
			},
			{
				num: "7.付款后什么时候可以确认收货？（单选）",
				answer:[
				{
					label: '任务审核通过后',
					value: '1'
				},
				{
					label: '已有物流信息',
					value: '2'
				},
				{
					label: '淘宝上物流信息显示已签收，时间5-7天左右',
					value: '3'
				}
				],
				toast:"商家在淘宝发货后，千万不能马上确认收货，否则很容易被淘宝认为虚假交易。正确的操作方式应该在物流信息显示已签收后再确认，对于不规范的操作，平台将会扣除本单任务的全部佣金！（严重封号！）",
				Correct: "3"
			},
			{
				num: "8.平台上使用淘宝号A去接任务，去淘宝下单可以用淘宝号B吗？（单选）",
				answer:[
				{
					label: '可以，反正都是我的淘宝号',
					value: '1'
				},
				{
					label: '绝对不行，如果不小心使用了，一定要咨询平台客服询问解决方式',
					value: '2'
				}
				],
				toast:"用错旺旺号购物会导致商家以为是真实订单而真实发货，由此导致真实发货的损失要由买家承担。并且错误的旺旺号可能等级不匹配，这样不规范的操作，平台将会扣除本单任务佣金，严重将永久封号！",
				Correct: "2"
			},
			{
				num: "9.购物时如何规范自己的收货地址？（单选）",
				answer:[
				{
					label: '只要自己能收到就行',
					value: '1'
				},
				{
					label: '随便一个地址都行，反正是做任务的',
					value: '2'
				},
				{
					label: '一定要自己本人能真实收到的真实地址，且淘宝下单的地址要和平台预留的收货地址一模一样，一字不差',
					value: '3'
				}
				],
				toast:"地址一定是要自己的平时的所在地的真实有效地址，一定是要自己能够签收的，并且淘宝下单的地址要和平台预留的收货地址要一模一样",
				Correct: "3"
			},
			{
				num: "10.下列哪种付款方式绝对不能使用？(多选)",
				answer:[
				{
					label: '淘客链接下单',
					value: '1'
				},
				{
					label: '找人代付下单',
					value: '2'
				},
				{
					label: '使用他人支付宝转账的余额付款',
					value: '3'
				},
				{
					label: '支付宝余额和绑定的储蓄卡',
					value: '4'
				},
				{
					label: '通过返利网链接下单',
					value: '5'
				}
				],
				toast:"淘宝客、返利网形式下单，会对商家造成经济损失，平台严禁这种行为。同时严禁代付、使用他人支付宝转账进行付款。一经发现，将作封号处理，并扣除任务佣金和淘宝客返利所得佣金",
				Correct: ['1','2','3','5']
			}
			]
		}
	},
	created(){
		document.title = "新人问卷";
		this.selTopic = this.topic[this.num];
	},
	watch:{
		num:function(n,o){
			if(n > o && n <=9){		//下一题
				if(n == 3 || n == 5 || n == 9){
					this.values = [];
				}else{
					this.value = "";
				}
			}else if(n < o && n <=9){			//上一题
				if(n == 3 || n == 5 || n == 9){
					this.may = true;
					this.values = [...this.topic[this.num].Correct];
				}else{
					this.may = true;
					this.value = this.topic[this.num].Correct;
				}
			}
		},
		// 判断单选题
		value:function(n,o){
			if(n == this.topic[this.num].Correct){
				this.may = true;
			}else{
				this.may = false;
			}
		},
		//判断多选题
		values:function(n,o){
			if([...n].sort().toString() == this.topic[this.num].Correct.sort().toString()){
				if(this.num == 9){
					this.go = false;
				}else{
					this.may = true;
				}
			}else{
				if(this.num == 9){
					this.go = true;
					this.may = false;
				}else{
					this.may = false;
				}
				
			}
		},
	},
	methods:{
		// 上一题
		pro(){
			this.num -= 1;
			this.selTopic = this.topic[this.num];
		},
		// 下一题
		next(){
			if(this.may == false){
				this.$toast("先答对这一题哦～");
			}else{
				this.num += 1;							//题号加1
				if(this.num <= 9){
					this.selTopic = this.topic[this.num];	//更改题的内容
				}
			}
		},
		//去关联
		goCon(){
			this.$router.replace('/login');
		}
	},
	components:{
		Radio,
		Checklist
	}
}
</script>