<template>
	<view class="audit">
		<view class="_header">
			<view class="_step">
				<view class="__step">
					1
				</view>
				<text class="__vice">
					信息填写
				</text>
			</view>
			<view class="_split">
				
			</view>
			<view class="_step">
				<view class="__step">
					2
				</view>
				<text class="__vice">
					成功提交
				</text>
			</view>
			
		</view>
		<view class="_status">
			<view class="_success">
				<image src="../../static/icons/chenggong.svg" mode="" class="_icon"></image>
				<text>
					
						信息提交成功
				</text>
			</view>
			<view class="_success">
				<image src="../../static/icons/jiazai.svg" mode="" class="_icon _spin"></image>
				<text>
						管理员审批中......
				</text>
			</view>
			
		</view>
		<view class="_vice">
			您的申请已提交管理员审核。如长时间没有
			审核，请联系管理人员。
		</view>
		<button type="primary" class="_btn">手动刷新</button>
		
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.audit{
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
		._header{
			position: relative;
			z-index: 2;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			._step{
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #fff;
				.__step{
					display: inline-block;
					width: 70rpx;
					height: 70rpx;
					line-height: 70rpx;
					font-size: 60rpx;
					text-align: center;
					border-radius: 50%;
					border: 1rpx solid #ccc;
				}
				.__vice{
					margin-top: 30rpx;
				}
				
			}
			._split{
				display: inline-block;
				width: 180rpx;
				height: 6rpx;
				background-color: #fff;
				margin: 0 20rpx;
			}
		}
		._status{
			position: relative;
			z-index: 2;
			background-color: #fff;
			border-radius: 10rpx;
			padding: 20rpx;
			margin-top: 150rpx;
			
			._success{
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				&:nth-child(1){
					margin-bottom: 30rpx;
				}
				._icon{
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
					&._spin{
						animation:_spin 2s linear infinite;

					}
				}
			}
		}
		._vice{
			position: relative;
			z-index: 2;
			margin-top: 140rpx;
		}
		._btn{
			margin-top: 40rpx;
			width: 40%;
		}
	}
	@keyframes _spin{
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
