<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="home-btns">
			<navigator class="_btn" url="../residentHome/index" hover-class="navigator-hover">
				<view class="_left">
					<view>
						<h3>
							我是住户
						</h3>
						<p>
							resident
						</p>
					</view>
					<image class="brackets" src="../../static/icons/brackets.png" mode=""></image>
				</view>
				<image class="_right_img" src="../../static/images/resident.png" mode=""></image>
			</navigator>
			<navigator class="_btn" url="../visitorsIndex/index">
				<view class="_left">
					<view>
						<h3>
							我是访客
						</h3>
						<p>
							visitor
						</p>
					</view>
					<image class="brackets" src="../../static/icons/brackets.png" mode=""></image>
					
				</view>
				<image class="_right_img" src="../../static/images/visitors.png" mode=""></image>
			</navigator>
		</view>
	</view>
</template>

<style lang="scss" scoped>

	.content {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		background: linear-gradient(180deg, #002FA7, #ccc);
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.home-btns {
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;

		._btn {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			border-radius: 0.5rem;
			padding: 20rpx 60rpx;
			margin-bottom: 20rpx;
			width: 100%;
			box-sizing: border-box;

			._left {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				.brackets{
					width: 50rpx;
					height: 50rpx;
					margin-left: 30rpx;
				}
				h3 {
					font-size: 56rpx;
				}

				p {
					font-size: 28rpx;
					text-align: center;
				}
			}

			._right_img {
				width: 200rpx;
				height: 200rpx;
			}
		}
	}
</style>
