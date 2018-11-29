<template>
	<div>
		<div class="imgBox">
			<img class="camera" src="../assets/Upload.png">
			<form>
				<input type="file" ref="imgUpload" class="upload_file" @change="uploadFn">
			</form>
		</div>
	</div>
</template>
<style lang="less" scoped>
.imgBox{
	border-radius: .04rem;
	position: relative;
	display: flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	background: #eeeeee;
	width: 2.9rem;
	height: 2.22rem;
	.camera{
		width: 1rem;
		height: 1rem;
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
		z-index: 1;
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