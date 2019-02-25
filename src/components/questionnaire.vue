<template>
	<div class="box">
		<div class="questionBox">
			<div class="question">{{index + 1}}/{{noticeList.length}}. {{noticeList[index].title}}</div>
			<div class="answer">{{noticeList[index].content}}</div>
		</div>
		<div class="butBox">
			<div class="but" :class="{'but1':time === 0}" @click="next">{{index === noticeList.length-1?'完成(开始任务)':"下一步"}}</div>
		</div>
	</div>
</template>
<style scoped lang="less">
.box{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.questionBox{
		flex:1;
		overflow-y: scroll;
		padding-left: .56rem;
		padding-right: .56rem;
		.question{
			margin-top: 1.12rem;
			font-size: .3rem;
			color: #333;
		}
		.answer{
			line-height: .42rem;
			margin-top: .6rem;
			font-size: .26rem;
			color: #03abff;
		}
	}
	.butBox{
		width: 100%;
		height: 3.04rem;
		.but{
			margin: .76rem auto;
			border-radius: .36rem;
			background: #d6d6d6;
			width:3.88rem;
			text-align: center;
			height: .76rem;
			line-height: .76rem;
			font-size: .26rem;
			color: #fff;
		}
		.but1{
			margin: .76rem auto;
			border-radius: .36rem;
			background: #03abff;
			width:3.88rem;
			text-align: center;
			height: .76rem;
			line-height: .76rem;
			font-size: .26rem;
			color: #fff;
		}
	}
}
</style>
<script>
	import resource from '../api/resource.js'
	export default{
		data(){
			return{
				noticeList:[{
					title:"",
					content:""
				},
				{
					title:"",
					content:""
				}
				],							//须知列表
				index:0,					//当前选中的题目下标
				time:10,						//阅读时间
			}
		},
		created(){
			document.title = "新人须知";
			//获取新人须知列表
			this.getKnow();
		},
		methods:{
			//获取新人须知列表
			getKnow(){
				resource.commonquestion().then(res => {
					if(res.data.code === 2){
						this.noticeList = res.data.data;
						//时间倒数
						this.downTime();
					}else{
						this.$toast(res.data.msg);
					}
				})
			},
			//点击下一个按钮
			next(){
				if(this.time === 0){
					if(this.index === this.noticeList.length-1){
						resource.setread().then(res => {
							if(res.data.code === 0){
								this.$router.push('/index')
							}else{
								this.$toast(res.data.msg);
							}
						});
					}else{
						this.index += 1;
						//时间倒数
						this.downTime();
					}
				}else{
					this.$toast("先阅读完毕才能切换哦");
				}
			},
			//时间倒数
			downTime(){
				this.time = 10;
				let myVar = setInterval(()=>{
					if(this.time === 1){
						clearInterval(myVar);
					}
					this.time -= 1;
				},1000);
			}
		}

	}
</script>