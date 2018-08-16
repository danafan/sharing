<template>
	<div>
		<div class="imgBox">
			<div class="camera"><img src="../assets/camera.png"></div>
			<input type="file" ref="imgUpload" class="upload_file" @change="uploadFn">
		</div>
	</div>
</template>
<style lang="less" scoped>
.imgBox{
	position: relative;
	display: flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	background: #eeeeee;
	width: 2.84rem;
	height: 3.76rem;
	.camera{
		position: relative;
		width: .8rem;
		height: .8rem;
		img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
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
</style>
<script>
	export default{
		props: {
			type: {
				type: String,
				default: '0'
			},
		},
		methods:{
		// 上传图片
		uploadFn(){
			if (this.$refs.imgUpload.files.length > 0) {
				var files = this.$refs.imgUpload.files;
				this.$emit('callbackFn',{files:files,type:this.type});
			}
		}

	}


}
</script>