<template>
	<div>
		<div class="imgBox">
			<div class="camera"><img src="../assets/camera.png"></div>
			<div class="add">添加照片</div>
			<input type="file" ref="imgUpload" class="upload_file" multiple @change="uploadFn">
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
	width: 1.06rem;
	height: 1.06rem;
	.camera{
		position: relative;
		width: .4rem;
		height: .4rem;
		img{
			position: absolute;
			width: 100%;
			height: 100%;
		}
	}
	.add{
		width: 100%;
		text-align: center;
		font-size: .24rem;
		color:#999999;
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
	methods:{
		// 上传图片
		uploadFn(){
			if (this.$refs.imgUpload.files.length > 0) {
				var files = this.$refs.imgUpload.files;
				this.$emit('callbackFn',files);
			}
		}

	}


}
</script>