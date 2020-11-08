<template>
	<view class="main-box">
		<navigator class="_help">
			<image src="../../static/icons/customer.png"></image>
			帮助及信息
		</navigator>
		<view class="main-info">
			<view class="_name_modify">
				<text class="_name">
					{{info.name}}
				</text>
				<navigator url="../modifyInfo/modifyInfo" class="_modify">
					<image src="../../static/images/userInfo.png" class="user_modify"></image>
					<text>
						修改资料
					</text>
				</navigator>
			</view>
			<view class="user_img">
				<image src="../../static/images/headerImg.jpg" class="user_img_box"></image>
			</view>
		</view>
		<view class="info-list">
			<navigator class="_item">
				<view class="_item_lab">
					<image src="../../static/icons/about.png" mode=""></image>
					<text>关于我们</text>
				</view>
				<image src="../../static/icons/next.png" class="_next"></image>
			</navigator>
			<view class="_item">
				<view class="_item_lab">
					<image src="../../static/icons/logout.png" mode=""></image>
					<text>注销登录</text>
				</view>
				<image src="../../static/icons/next.png" class="_next"></image>
			</view>
		</view>
		<Tabbar/>
	</view>
</template>

<script>
	import Tabbar from '../../components/Tabbar/Tabbar.vue'
	
	export default {
		data() {
			return {
				info: {
					name: "王璐"
				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.main-box {
		width: 100%;
		height: 100%;
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;

		&::after {
			content: '';
			width: 120%;
			height: 150px;
			position: absolute;
			left: -10%; //椭圆左边隐藏10%，右边隐藏10%
			top: 0;
			border-radius: 0 0 50% 50%; //左上角，右上角，右下角，左下角
			background: #1496f1;
			z-index: -1;
		}

		._help {
			position: relative;
			z-index: 1;
			color: #fff;
			padding-top: 10%;
			text-align: right;
			margin-bottom: 10rpx;

			image {
				position: relative;
				z-index: 12;
				width: 30rpx;
				height: 30rpx;
			}
		}

		.main-info {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			border-radius: 10rpx;
			padding: 30rpx;
			background: #fff;
			box-shadow: 0 0 20rpx rgba(100, 210, 197, 0.5);

			._name_modify {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;

				._name {
					font-size: 56rpx;
				}

				._modify {
					margin-top: 30rpx;
					color: #007AFF;

					.user_modify {
						width: 30rpx;
						height: 30rpx;
						margin-right: 20rpx;

					}
				}
			}

			.user_img {
				width: 200rpx;
				height: 200rpx;

				.user_img_box {
					width: 100%;
					height: 100%;
				}
			}
		}

		.info-list {
			margin-top: 20rpx;
			._item {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin: 0 -20rpx;
				margin-bottom: 20rpx;
				padding: 25rpx 30rpx;
				border-radius: 10rpx;
				box-shadow: 2rpx 2rpx 11rpx 1rpx rgba(179,180,197,0.75);
				
				._item_lab {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					image {
						width: 40rpx;
						height: 40rpx;
						margin-right: 20rpx;
					}
				}
				._next{
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	}
</style>
