<template>
	<view class="face-approve">
		<view class="_approve">
			<view class='_tit'>
				<p>请按一下提示拍摄本人面部照片 </p>
				否则会导致进入小区失败
			</view>
			<view class="_img">
				<image src="../../static/icons/my.png" mode="" class="_icon"></image>
			</view>
		</view>
		<view class="_precautions">
			<view class="_list">
				<text class="_lab">
					1
				</text>
				<text class="_txt">
					不能拍摄证件照或身份证
				</text>
			</view>
			<view class="_list">
				<text class="_lab">
					2
				</text>
				<text class="_txt">
					正对手机拍摄并保持合适的距离，面部完整无遮挡
				</text>
			</view>
			<view class="_list">
				<text class="_lab">
					3
				</text>
				<text class="_txt">
					光线充足，避免昏暗或逆光环境
				</text>
			</view>
		</view>
		<button type="primary" class="_btn" @click="openCamera"> 开始拍摄</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			openCamera(){
				console.log('13123')
			}
		}
	}
</script>

<style lang="scss" scoped>
.face-approve{
		width: 100vw;
		min-height: 100vh;
		padding: 40rpx;
		box-sizing: border-box;
		background-color: #eee;
		&::after {
			content: '';
			width: 130%;
			height: 600rpx;
			position: absolute;
			left: -15%; //椭圆左边隐藏10%，右边隐藏10%
			top: 0;
			border-radius: 0 0 50% 50%; //左上角，右上角，右下角，左下角
			background: rgb(11,95,255);
			z-index: 1;
		}
	._approve{
		position: relative;
		z-index: 2;
		text-align: center;
		._tit{
			text-align: center;
			color: #fff;
			margin-top: 20rpx;
			
		}
		._img{
			display: inline-block;
			width: 300rpx;
			height: 300rpx;
			border-radius: 50%;
			// border: 1px solid #ccc;
			margin-top: 40rpx;
			margin-bottom: 60rpx;
			
			._icon{
				width: 100%;
				height: 100%;
			}
			
		}
	}
	._precautions{
		position: relative;
		z-index: 2;
		background-color: #fff;
		padding: 30rpx;
		border-radius: 20rpx;
		._list{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 20rpx;
			._lab{
				display: inline-block;
				width: 60rpx;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				border-radius: 50%;
				background-color: rgb(230,240,255);
				color: rgb(27,72,195);
				margin-right: 40rpx;
			}
			._txt{
				display: inline-block;
				width: 80%;
				line-height: 60rpx;
				color: #333;
			}
		}
	}
	._btn{
		position: fixed;
		bottom: 30rpx;
		width: 80%;
		left: 50%;
		margin-left: -40%;
	}
}
</style>
