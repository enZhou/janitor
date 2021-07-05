<template>
	<view class="content">
		<h1 class="title">欢迎使用智灵通系统</h1>
		<text class="_vice">-完成登记，刷脸即可进出-</text>
		<view class="_entrance">
			<navigator url="./permanent" class="_link _permanent">
				<image src="../../static/icons/permanent.svg" class="_icon"></image>
				<text>常驻人员</text>
			</navigator>
			<navigator class="_link _visitor" url="./visitor">
				<image src="../../static/icons/visitor.svg" class="_icon"></image>
				<text>访客人员</text>
			</navigator>
		</view>
		
	</view>
	
</template>

<script>
</script>

<style scoped lang="scss">
	.content{
		padding: 0 20rpx;
		margin-top: 100rpx;
		text-align: center;
		.title{
			font-size: 60rpx;
			margin-bottom: 30rpx;
		}
		._vice{
		}
		._entrance{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-top: 50rpx;
			._link{
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				width: 50%;
				padding: 10rpx;
				._icon{
					width: 100rpx;
					height: 100rpx;
					margin-bottom: 10rpx;
				}
			}
		}
	}
</style>
