<template>
	<view class="open-door">
		<view class="_img">
			<image src="../../static/icons/del.svg" class="_del" @click="del"></image>
			<view class="_shoot" @click="photo">
				<image :src="chooseImg ||'../../static/icons/face.svg'" class="_icon"></image>
			</view>
		</view>
		<text class="_vice">如需修改，您可删除现有的照片后重新录入</text>
		<textarea v-model="precautions" placeholder="" class="_textarea" />
		<button type="primary" class="_submit">确认、提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chooseImg:'',
				precautions:"sadas "
			}
		},
		methods: {
			//小程序调起拍照和相册
			photo(){
				uni.chooseImage({
					count:1,
					sizeType:['original','compressed'],
					sourceType:['camera','album'],//camera 拍照 album 相册
					success:(res)=> {
						// console.log(res)
						this.chooseImg= res.tempFilePaths
						console.log(JSON.stringify(res.tempFilePaths));
						uni.showToast({
							title:"成功拍照或引用相册",
							duration:2000
						})
					},
					fail() {
						uni.showToast({
							title:"拍照或引用相册失败",
							duration:2000
						})
					}
				})
			},
			del(){
				this.chooseImg = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.open-door{
		width: 100vw;
		height: 100vh;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #eee;
		._img{
			position: relative;
			padding: 40rpx;
			background-color: #fff;
			border-radius: 20rpx;
			box-shadow: 4rpx 8rpx 24rpx -2rpx rgba($color: #ddd, $alpha: .5);
			margin-bottom:10rpx;
			._del{
				position: absolute;
				right: 10rpx;
				top: 10rpx;
				width: 40rpx;
				height: 40rpx;
			}
			._shoot{
				width: 100%;
				._icon{
					width: 100%;
				}
			}
		}
		._vice,._textarea{
			display: inline-block;
			box-sizing: border-box;
			width: 100%;
			padding: 20rpx;
			background-color: #fff;
			border-radius: 20rpx;
			box-shadow: 4rpx 8rpx 24rpx -2rpx rgba($color: #ddd, $alpha: .5);
			margin-bottom: 20rpx;
		}
		._vice{
			color: #aaa;
		}
		._submit{
			position: fixed;
			width: 80%;
			left: 50%;
			margin-left: -40%;
			bottom: 30rpx;
			
		}
	}

</style>
