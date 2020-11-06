<template>
	<view class="modify-info">
		<view class="_info_box">
			<view class="_info_title">修改资料</view>
			<view class="_box">
				<view class="_headImg">
					<image :src="userInfo.headImg" @click="clk(0)"></image>
				</view>
				<button type="default" @click="clk(0)" class="again">重新录入</button>
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
						<input type="text" v-model="userInfo.phone" />
					</view>
					<view class="_item_l">
						<view class="_item_txt">
							身份证号：
						</view>
						<input type="text" v-model="userInfo.idCard" />
					</view>
					<view class="_item_l">
						<view class="_item_txt">
							部门：
						</view>
						<input type="text" v-model="userInfo.department" />
					</view>
				</view>
			</view>
		</view>
		<textarea v-model="userInfo.textarea" placeholder="" class="_textarea" />
		<button type="primary" class="_submit">提交</button>
		<avatar @upload="myUpload" ref="avatar"></avatar>
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

<style lang="scss" scoped>
	.modify-info{
		padding: 30rpx;
		._info_box{
			padding: 30rpx;
			border-radius: 10rpx;
			box-shadow: 0 0 20rpx #eee;
			background-color: #eee;
			._info_title{
				font-size: 56rpx;
				border-bottom: 1rpx solid #fff;
			}
			._box{
				border-radius: 10rpx;
				._headImg{
					position: relative;
					left: 50%;
					transform: translate(-50%);
					width: 200rpx;
					height: 200rpx;
					border: 1px solid #fff;
					border-radius: 10rpx;
					margin-top: 30rpx;
					margin-bottom: 30rpx;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
				
				.again{
					width: 40%;
					font-size: 28rpx;
				}
				._item_info{
					margin-top: 30rpx;
					._item_l{
						display: flex;
						justify-content: flex-start;
						flex-direction: row;
						padding: 20rpx 0rpx;
						border-bottom: 1px solid #ddd;
						border-radius: 10rpx;
						._item_txt{
							display: inline-block;
							min-width: 180rpx;
							text-align: right;
						}
						input{
							font-size: 36rpx;
						}
					}
				}
			}
		}
		._textarea{
			margin-top: 20rpx;
			border-radius: 10rpx;
			width: 100%;
			padding: 20rpx;
			border: 1px solid #ddd;
			box-sizing: border-box;
		}
		._submit{
			width: 50%;
			margin-top: 20rpx;
		}
	}	
</style>
