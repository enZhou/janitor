<template>
	<view class="_list">
		<view class="link">
			<navigator url="../index/index">
				首页
			</navigator>
		</view>
		<view class="link">
			<navigator url="../register/index">
				注册
			</navigator>
		</view>
		<view class="link">
			<navigator url="../personalCenter/index">
				个人中心
			</navigator>
		</view>
		<view class="link">
			<navigator url="../faceApprove/faceApprove">
				人脸认证
			</navigator>
		</view>
		<view class="link">
			<navigator url="../faceApprove/audit">
				人脸认证 -审核
			</navigator>
		</view>
		<view class="link">
			<navigator url="../guestInvitation/index">
				访客邀请
			</navigator>
		</view>
		<view class="link">
			<navigator url="../guestInvitation/qrCode">
				访客邀请-二维码
			</navigator>
		</view>
		<view class="link">
			<navigator url="../guestAppointment/index">
				访客预约
			</navigator>
		</view>
		<view class="link">
			<navigator url="../reservation/reservation">
				申请记录
			</navigator>
		</view>
		<view class="link">
			<navigator url="../faceOpenDoor/faceOpenDoor">
				人脸识别
			</navigator>
		</view>
		<view class="link">
			<navigator url="../propertyAnnouncement/index">
				物业公告
			</navigator>
		</view>
		<view class="link">
			<navigator url="../propertyAnnouncement/detail">
				物业公告 - 详情
			</navigator>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
._list{
	padding: 30rpx;
	.link{
		padding: 20rpx;
		background-color: #d39360;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
		color: #fff;
	}
}
</style>
