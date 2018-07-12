<template>
	<div class="box">
		<!-- 返回按钮 -->
		<back></back>
		<div class="title">- 反馈问题类型 -</div>
		<div class="tab">
			<div class="tabItem" :class="{selectStyle:color == 1}" @click="color = 1">功能异常</div>
			<div class="line"></div>
			<div class="tabItem" :class="{selectStyle:color == 2}" @click="color = 2">账号问题</div>
			<div class="line"></div>
			<div class="tabItem" :class="{selectStyle:color == 3}" @click="color = 3">其他问题</div>
		</div>
		<div class="txtBox">
			<textarea maxlength="201" rows="5" v-model="question" placeholder="请告诉我们你遇到的问题或想反馈的意见"></textarea>
			<div class="imgs">
				<div class="img" v-for="(item,index) in imgList">
					<img class="cha" src="../../assets/chacha.png" @click="deleteImg(index)">
					<img class="lookimg" :src="item">
				</div>	
				<uploadimg @callbackFn="callbackFn" v-if="imgObjList.length < 3"></uploadimg>
			</div>
		</div>
		<div class="zi">{{shu}}／200</div>	
		<!-- 确认修改按钮 -->
		<div class="ok" @click="subGuest">确认提交</div>
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
#img{
	width: 1rem;
	height: 1rem;
}
.title{
	margin-top: .4rem;
	width: 100%;
	text-align: center;
	font-size: .3rem;
	font-size: #333333;
}
.tab{
	margin: .4rem auto 0;
	display: flex;
	justify-content: center; 
	width: 6.3rem;
	.tabItem{
		font-size: .28rem;
		color: #999999;
	}
	.selectStyle{
		color:#03abff;
		border-bottom: 2px solid #03abff;
	}
}
.txtBox{
	background:#fff;
	padding:.22rem .16rem .12rem .16rem;
	border:1px solid #dbdbdb;
	display: flex;
	flex-direction:column;
	justify-content: space-between;
	margin: .4rem auto 0;
	width: 6.3rem;
	height: 3.46rem;
	textarea{
		resize:none;
		border: none;
		outline: none;
		width: 100%;
		font-size: .24rem;
	}
	.imgs{
		display: flex;
		width: 100%;
		.img{
			position: relative;
			margin-right: .06rem;
			width: 1.06rem;
			height: 1.06rem;
			.cha{
				position: absolute;
				top: 0;
				right: 0;
				width: .18rem;
				height: .18rem;
				z-index: 1;
			}
			.lookimg{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
			}
		}
	}
}
.zi{
	margin: 0 auto;
	width: 6.3rem;
	text-align: end;
	font-size: .26rem;
	color: #999999;
}
.line{
	border-left:1px solid #f1f1f1;
	margin-right: .43rem;
	margin-left: .43rem;
}
.ok{
	border-radius: .08rem;
	background: #03abff;
	box-shadow: 0 .02rem .2rem rgb(110,189,243);
	margin: 1.68rem auto;
	width: 6.54rem;
	text-align: center;
	height: .9rem;
	line-height: .9rem;
	font-size: .26rem;
	color:#ffffff;
}
</style>
<script>
import uploadimg from '../../common/uploadimg'
import back from '../../common/back.vue'
export default{
	data(){
		return{
			color: 1,			//选择某一个类型
			question: "",		//问题文字内容
			shu: "0",			//已经输入的字数
			imgList:[],			//预览的图片数组
			imgObjList: [],		//向后台传递的图片对象数组
		}
	},
	watch:{
		//监听问题输入的字数
		question:function(n,o){
			if(n.length > 200){
				this.$toast("不能超过200个字");
			}else{
				this.shu = n.length;
			};
		}
	},
	created(){
		document.title = "客服中心";
	},
	methods:{
		//上传图片成功的回调
		callbackFn(val){
			for(let i = 0;i < val.length;i ++){
				let obj = val[i];
				if(this.imgObjList.length < 3){
					this.imgObjList.push(obj);// 插入向后台传递的图片对象数组
					let fr = new FileReader();
					let _this = this;
					fr.onload=function () {
						let result = this.result;
						_this.imgList.push(result);
					};
					fr.readAsDataURL(obj);
				}else{
					this.$toast("最多上传三张图片哦！");
				}
			}
		},
		//点击删除
		deleteImg(index){
			this.imgObjList.splice(index,1);
			this.imgList.splice(index,1);
		},
		//点击确认提交
		subGuest(){
			console.log(this.question);
			console.log(this.imgObjList);
		}
	},
	components:{
		uploadimg,
		back
	}
}
</script>