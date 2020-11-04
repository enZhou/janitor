<!-- 住户登录 -->
<template>
	<view class="resident-home">
		<view class="login-box">
			<h2>请输入登记的信息</h2>
			<label>
				<text>姓名：</text>
				<input type="text" v-model="form.name" />
			</label>
			<label>
				<text>手机号：</text>
				<input type="text" v-model="form.phone" />
			</label>
			<label>
				<text>密码：</text>
				<input type="text" v-model="form.password" class="uni-input common-input" placeholder="输入密码" password="true" />
			</label>
			<label class="submit-btn">
				<button type="default">取消</button>
				<button type="primary" @click="login">提交</button>
			</label>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: null,
					phone: null,
					password: null
				}
			};
		},
		methods: {
			login() {
				uni.navigateTo({
					url: '/pages/reservation/reservation',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.resident-home {
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		background: linear-gradient(180deg, #002FA7, #ccc);

		.login-box {
			width: 100%;
			display: inline-block;
			background: #fff;
			box-shadow: 0 0 20rpx #000;
			border-radius: 10rpx;
			margin-top: 30%;

			h2 {
				font-size: 56rpx;
				text-align: center;
				margin-top: 50rpx;
				margin-bottom: 50rpx;
			}

			label {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				padding: 20rpx 40rpx;

				text {
					font-size: 28rpx;
					color: #666;
					display: inline-block;
					min-width: 120rpx;
				}

				input {
					width: 100%;
					height: 70rpx;
					font-size: 28rpx;
					border: 1rpx solid #ccc;
					border-radius: 10rpx;
					padding: 12rpx;
				}
			}

			.submit-btn {
				margin-top: 20rpx;
				// button{
				// 	padding: 10rpx 30rpx;
				// }
			}
		}
	}
</style>
