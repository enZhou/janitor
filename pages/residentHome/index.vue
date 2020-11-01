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
				<button type="default">提交</button>
			</label>
			<!-- <navigator url="../reservationList/index">
				预约界面
			</navigator> -->
			<button type="default" @click="clg">
				预约界面
			</button>
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
			clg() {
				console.log('1238u128u38')
				uni.navigateTo({
					url: '/pages/reservationList/index'
				})
			}
		}
	}
</script>

<style lang="sass">

</style>
