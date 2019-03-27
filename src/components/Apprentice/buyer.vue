<template>
	<div class="box">
		<div class="buyer">
			<div class="taskDetail">
				<div class="title">商品主图</div>
				<img class="masterImg" :src="taskInfo.goods_img">
				<div class="orderCode">订单编号：{{taskInfo.order_sn}}</div>
				<div class="orderCode">店铺名称：{{taskInfo.tao_shop_name}}</div>
			</div>
			<!-- 第一步 -->
			<div class="upLoad" v-if="step == 1">
				<div class="uploadImg">
					<div class="imgTitle">*上传图片</div>
					<div class="imgs">
						<div class="img" v-for="(item,index) in imgList">
							<img class="cha" src="../../assets/chacha.png" @click="deleteImg(index,'img')">
							<img class="lookimg" :src="item">
						</div>	
						<div class="imgBox" v-if="imgList.length < 10">
							<img class="img1" src="../../assets/camera1.png">
							<div class="add">上传图片</div>
							<input type="file" ref="imgUpload" class="upload_file" multiple @change="uploadFn">
						</div>
					</div>
				</div>
				<div class="uploadImg">
					<div class="imgTitle">上传视频</div>
					<div class="imgs">
						<div class="img" v-for="(item,index) in videoList">
							<img class="cha" src="../../assets/chacha.png" @click="deleteImg(index,'video')">
							<video class="lookvideo" width="100%" height="100%" autoplay :src="item" />
						</div>
						<div class="imgBox" v-if="videoList.length < 1">
							<img class="video" src="../../assets/video.png">
							<div class="add">上传视频</div>
							<input type="file" ref="videoUpload" class="upload_file" accept="video/*" @change="uploadVideo">
						</div>
					</div>
				</div>
			</div>
			<!-- 第二步 -->
			<div class="upLoad" v-if="step == 2">
				<div class="textTitle">评价内容（点击可复制）</div>
				<div class="content" v-clipboard="taskInfo.comment_content"
				@success="success"
				>{{taskInfo.comment_content}}</div>
				<div class="uploadImg">
					<div class="imgTitle">*好评截图</div>
					<div class="imgs">
						<div class="img" v-for="(item,index) in imgList">
							<img class="cha" src="../../assets/chacha.png" @click="deleteImg(index,'img')">
							<img class="lookimg" :src="item">
						</div>	
						<div class="imgBox" v-if="imgList.length < 2">
							<img class="img1" src="../../assets/camera1.png">
							<div class="add">上传图片</div>
							<input type="file" ref="imgUpload" class="upload_file" multiple @change="uploadFn">
						</div>
					</div>
				</div>
			</div>
			<!-- 第三步 -->
			<div class="upLoad" v-if="step == 3">
				<div class="textTitle">查看退货地址（点击可复制）</div>
				<div class="content" v-clipboard="copyData"
				@success="success"
				>
				<div>收件人：{{taskInfo.receiver}}</div>
				<div>手机号码：{{taskInfo.phone}}</div>
				<div>退货地址：{{taskInfo.back_address}}</div>
			</div>
			<div class="textTitle">*填写快递信息</div>
			<div class="formBox">
				<div class="label">1.选择快递：</div>
				<div class="input" @click="popupVisible = true">{{selExpress}}</div>
				<!-- <input type="text" @focus="popupVisible = true" placeholder="选择快递" v-model="selExpress"> -->
			</div>
			<div class="formBox">
				<div class="label">2.快递单号：</div>
				<input type="text" placeholder="快递单号" v-model="number">
			</div>
			<div class="formBox">
				<div class="label">3.快递费用：</div>
				<input type="text" placeholder="快递费用" v-model="money">
			</div>
		</div>
	</div>
	<div class="submit" :class="{'selSubmit':imgList.length > 0 || num == true}" @click="submit">提交</div>
	<mt-popup
	v-model="popupVisible"
	position="bottom">
	<div class="expressBox">
		<div class="express" v-for="item in list" @click="colsePopup(item)">{{item.name}}</div>
	</div>
</mt-popup>
</div>
</template>
<style lang="less" scoped>
.box{
	background: rgb(241,242,244);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.buyer{
		flex: 1;
		overflow-y: scroll;
		.taskDetail{
			border-bottom: 1px solid #e3e1e1;
			padding-top: .26rem;
			padding-bottom: .26rem;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.title{
				margin-bottom: .14rem;
				font-size: .3rem;
				color: #333;
			}
			.masterImg{
				margin-bottom: .14rem;
				width: 2.26rem;
				height: 2.26rem;
			}
			.orderCode{
				font-size: .3rem;
				color: #333;
			}
		}
		.upLoad{
			padding: .3rem .4rem;
			// 第一步
			.uploadImg{
				margin-bottom: .2rem;
				.imgTitle{
					margin-bottom: .1rem;
					font-size: .3rem;
					color:#333;
				}
				.imgs{
					display: flex;
					flex-wrap: wrap;
					width: 100%;
					.img{
						position: relative;
						margin-right: .06rem;
						margin-bottom: .06rem;
						width: 1.6rem;
						height: 1.6rem;
						.cha{
							position: absolute;
							top: 0;
							right: 0;
							width: .36rem;
							height: .36rem;
							z-index: 1;
						}
						.lookimg{
							position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							height: 100%;
						}
						.lookvideo{
							border: 1px dotted #cacaca;
						}
					}
					.imgBox{
						border: 1px dotted #cacaca;
						border-radius: .04rem;
						position: relative;
						display: flex;
						flex-direction:column;
						justify-content:center;
						align-items:center;
						width: 1.6rem;
						height: 1.6rem;
						.img1{
							width: .52rem;
							height: .42rem;
						}
						.video{
							width: .48rem;
							height: .36rem;
						}
						.add{
							margin-top: .1rem;
							width: 100%;
							text-align: center;
							font-size: .26rem;
							color:#bebebe;
						}
						.upload_file {
							position: absolute;
							top: 0;
							bottom: 0;
							left: 0;
							right: 0;
							width: 100%;
							height: 100%;
							opacity: 0;
						}
					}
				}	
			}
			//第二步
			.textTitle{
				margin-bottom: .1rem;
				font-size: .3rem;
				color:#333;
			}
			.content{
				margin-bottom: .2rem;
				padding: .2rem;
				background: #fff;
				width: 6.46rem;
				height: 2.14rem;
				font-size: .26rem;
				color:#666;
			}
			//第三部
			.formBox{
				margin-bottom: .2rem;
				display: flex;
				align-items: center;
				.label{
					font-size: .26rem;
					color:#666;
				}
				input{
					border: none;
					outline: none;
					padding-left: .1rem;
					width: 4.46rem;
					height: .66rem;
				}
				.input{
					font-size: .26rem;
					color:#666;
					background: #fff;
					padding-left: .1rem;
					width: 4.46rem;
					height: .66rem;
					line-height:.66rem;
				}
			}
		}
	}
	.submit{
		background: #e8e8e8;
		width: 100%;
		text-align:center;
		height: .96rem;
		line-height: .96rem;
		font-size: .3rem;
		color:#fff;
	}
	.selSubmit{
		background: #03abff;
		width: 100%;
		text-align:center;
		height: .96rem;
		line-height: .96rem;
		font-size: .3rem;
		color:#fff;
	}
	.expressBox{
		max-height: 4rem;
		overflow-y: scroll;
		.express{
			border-bottom: 1px solid #ccc;
			width: 7.5rem;
			text-align:center;
			height: .72rem;
			line-height: .72rem;
			font-size: .3rem;
			color: #333;
		}
	}
}
</style>
<script>
	import axios from 'axios'
	import resource from '../../api/resource.js'
	import { Popup,Indicator,Toast } from 'mint-ui';
	export default{
		data(){
			return{
				taskId:"",			//传递过来的任务id
				taskInfo:{},		//任务详情
				step:1,				//默认第一步
				imgList:[],			//预览的图片数组
				imgObjList:[],
				videoList:[],		//预览的视频数组
				videoObjList:[],
				popupVisible:false,	//默认选择快递框不显示
				list:[],			//快递列表
				selExpress:"请选择快递",		//展示选择的快递
				expressId:"",		//选中快递的id
				number:"",			//填写的快递单号
				money:"",			//填写的快递费用
				num:false,				//等于3的时候提交按钮高亮
				uploadForm: new FormData(),
				copyData:"",		//第三步组装好的文本
				bUrl:"https://cs.52gxk.com",
			}
		},
		watch:{
			expressId:function(n,o){
				if(n != o){
					this.isNum();
				}
			},
			number:function(n,o){
				if(n != o){
					this.isNum();
				}
			},
			money:function(n,o){
				if(n != o){
					this.isNum();
				}
			}
		},
		created(){
			document.title = "申请任务";
			let status = this.$route.query.status;
			this.taskId = this.$route.query.taskid;
			if(status == '' || status == '3'){
				this.step = 1;
			}else if(status == '2' || status == '6'){
				this.step = 2;
			}else if(status == '5' || status == '9'){
				this.step = 3;
			}
			//获取任务信息
			this.getTaskInfo();
		},
		methods:{
			//获取任务信息
			getTaskInfo(){
				resource.getTaskInfo({usertaskid:this.taskId}).then(res => {
					if(res.data.code == 0){
						this.taskInfo = res.data.task_info;
						if(this.step == 3){
							this.copyData = `收件人：${this.taskInfo.receiver}手机号：${this.taskInfo.phone}退货地址：${this.taskInfo.back_address}`;
							this.list = res.data.express;
						}
					}else{
						this.$toast(res.data.message);
					}
				})
			},
			//上传图片和视频(第一步)
			mjxUploadImg(){
				Indicator.open('正在提交...');
				let uid = sessionStorage.getItem("uid");
				// let uid = "52245";
				this.uploadForm = new FormData(); 
				this.uploadForm.append("userid",uid);
				this.uploadForm.append("usertaskid",this.taskId);
				for (var i = 0; i < this.imgObjList.length; i++) {
					this.uploadForm.append("comment_imgs[]",this.imgObjList[i])
				}
				if (this.videoObjList.length > 0) {
					this.uploadForm.append("comment_video",this.videoObjList[0])
				}
				let url = this.bUrl + "/weiapi/mjx/uploadimgandvideo";
				axios.post(url,this.uploadForm).then(res => {
					Indicator.close();
					if(res.data.code == 0){
						Toast('提交成功');
						this.uploadForm = new FormData();
						setTimeout(() => {
							this.$router.go(-1);
						}, 2000);
					}else{
						this.$toast(res.data.msg);
					}
				})
			},
			//提交好评截图（第二步）
			mjxUploadGoodreput(){
				Indicator.open('正在提交...');
				let uid = sessionStorage.getItem("uid");
				// let uid = "52245";
				this.uploadForm = new FormData(); 
				this.uploadForm.append("userid",uid);
				this.uploadForm.append("usertaskid",this.taskId);
				for (var i = 0; i < this.imgObjList.length; i++) {
					this.uploadForm.append("good_reputation_img[]",this.imgObjList[i])
				}
				let url = this.bUrl + "/weiapi/mjx/commitgoodreputationimg";
				axios.post(url,this.uploadForm).then(res => {
					Indicator.close();
					if(res.data.code == 0){
						Toast('提交成功');
						this.uploadForm = new FormData();
						setTimeout(() => {
							this.$router.go(-1);
						}, 2000);
					}else{
						this.$toast(res.data.msg);
					}
				})
			},
			//提交快递信息(第三步)
			submitExpressInfo(){
				if(this.expressId == ''){
					this.$toast("请选择快递");
				}else if(this.number == ''){
					this.$toast("请填写的快递单号");
				}else if(this.money == ''){
					this.$toast("请填写的快递费用");
				}else{
					var obj = {
						usertaskid:this.taskId,
						express_id:this.expressId,
						express_sn:this.number,
						express_cost:this.money
					}
					Indicator.open('正在提交...');
					resource.submitExpressInfo(obj).then(res => {
						Indicator.close();
						if(res.data.code == 0){
							Toast('提交成功');
							setTimeout(() => {
								this.$router.go(-1);
							}, 2000);
						}else{
							this.$toast(res.data.msg);
						}
					})
				}
			},
			//上传图片
			uploadFn(){
				if (this.$refs.imgUpload.files.length > 0) {
					var files = this.$refs.imgUpload.files;
					for(let i = 0;i < files.length;i ++){
						let obj = files[i];
						let imgNum = 0;			//最多的照片数量
						if(this.step == 1){
							imgNum = 10;
						}else if(this.step == 2){
							imgNum = 2;
						}
						if(this.imgObjList.length < imgNum){
							this.imgObjList.push(obj);
							let _this = this;
							let fr = new FileReader();
							fr.readAsDataURL(obj)
							fr.onload=function () {
								let result = this.result;
								_this.imgList.push(result);
							};
						}else{
							this.$toast("最多上传" + imgNum +"张图片哦！");
						}
					}

				}
			},
			//上传视频
			uploadVideo(v){
				var files = this.$refs.videoUpload.files;
				for(let i = 0;i < files.length;i ++){
					let obj = files[i];
					this.videoObjList.push(obj);
					let fr = new FileReader();
					let _this = this;
					fr.onload=function () {
						let result = this.result;
						_this.videoList.push(result);
					};
					fr.readAsDataURL(obj);
				}
			},
			//点击删除图片或视频
			deleteImg(index,type){
				if(type == 'img'){
					this.imgList.splice(index,1);
					this.imgObjList.splice(index,1);
				}else if(type == 'video'){
					this.videoList.splice(index,1);
					this.videoObjList.splice(index,1);
				}	
			},
			//点击复制
			success(){
				this.$toast("复制成功");
			},
			//点击关闭选择快递框
			colsePopup(v){
				this.expressId = v.id;
				this.selExpress = v.name;
				this.popupVisible = false;
			},
			//判断是否三个都填写了
			isNum(){
				if(this.expressId != "" && this.number != "" && this.money != ""){
					this.num = true;
				}else{
					this.num = false;
				}
			},
			//点击提交
			submit(){
				if(this.step == 1){
					//上传图片和视频
					this.mjxUploadImg();
				}else if(this.step == 2){
					//提交好评截图
					this.mjxUploadGoodreput();
				}else if(this.step == 3){
					//提交快递信息(第三步)
					this.submitExpressInfo();
				}
			}
			
		},
		components:{
			Popup
		}
	}
</script>

















