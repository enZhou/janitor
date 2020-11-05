<template>
	<view class="modify-info">
		<view class="_info_box">
			<view>修改资料</view>
			<view class="_box">
				<view class="_headImg">
					<image :src="userInfo.headImg" @click="clk(0)"></image>
				</view>
				<button type="default" @click="clk(0)">重新录入</button>
				<view class="_item_info">
					<view class="_item_l">
						<view class="_item_txt">
							姓名：
						</view>
						<input type="text" v-model="userInfo.name" />
					</view>
					<view class="_item_l">
						<view class="_item_txt">
							手机号：
						</view>
						<input type="text" v-model="userInfo.name" />
					</view>
					<view class="_item_l">
						<view class="_item_txt">
							身份证号：
						</view>
						<input type="text" v-model="userInfo.name" />
					</view>
					<view class="_item_l">
						<view class="_item_txt">
							部门：
						</view>
						<input type="text" v-model="userInfo.name" />
					</view>
				</view>
			</view>
		</view>
		<textarea v-model="userInfo.textarea" placeholder="" />
		<avatar @upload="myUpload" ref="avatar"></avatar>
		<image src="" mode=""></image>
	</view>
</template>

<script>
	import avatar from "../../components/yq-avatar/yq-avatar.vue";

	export default {
		components: {
			avatar
		},
		data() {
			return {
				urls: [],
				userInfo: {
					name: "王璐",
					headImg: "",
					phone: "13322221111",
					idCard: "121231231231232131231x",
					department: "研发部",
					area:"qweqweq",
					textarea:"12312312"
				}
			};
		},
		methods: {
			myUpload(rsp) {
				this.userInfo.headImg = rsp.path;
			},
			clk(index) {
				this.$refs.avatar.fChooseImg(index, {
					selWidth: "300upx",
					selHeight: "300upx",
					expWidth: '260upx',
					expHeight: '260upx'
				});
			}
		}
	}
</script>

<style lang="scss">

</style>
