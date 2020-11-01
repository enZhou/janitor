<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="home-btns">
			<navigator url="../residentHome/index" hover-class="navigator-hover">
				<button type="default">
					我是住户
				</button>
			</navigator>
			<navigator url="../visitorsIndex/index">
				<button type="default">
					我是访客
				</button>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
