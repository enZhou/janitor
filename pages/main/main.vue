<template>
	<view class="main-box">
		<view class="main-info">
			<view class="_name">
				<text>
					{{info.name}}
				</text>
				<navigator url="../modifyInfo/modifyInfo" class="_modify">
					<image src="../../static/images/userInfo.png" class="user_info"></image>
					<text>
						修改资料
					</text>
				</navigator>
			</view>
			<view class="user_img">
				<image src="../../static/images/headerImg.jpg" class="user_img_box"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{
					name:"王璐"
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped> 
.main-box{
	.main-info{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		._name{
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
				
			._modify{
				.user_info{
					width: 30rpx;
					height: 30rpx;
				}
			}
		}
		.user_img{
			width: 200rpx;
			height: 200rpx;
			.user_img_box{
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
