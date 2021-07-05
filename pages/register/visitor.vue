<template>
	<view class="visitor">
		<view class="_form">
			<label class="item">
				<text class="_tit">真实姓名</text>
				<input type="text" v-model="form.name" class="_input" placeholder="请输入您的真实姓名，认证后不可修改" />
			</label>
			<label class="item">
				<text class="_tit">手机号</text>
				<input type="text" v-model="form.phone" class="_input" placeholder="请输入手机号"/>
			</label>
			<label class="item">
				<text class="_tit">被访区域</text>
				<picker class="_input" mode="selector" :value="form.area" :range="areaList" range-key="name"
					@change="bindAreaChange">
					<view style="color: #ccc">
						<text>
							{{
								pickerAreaName
							}}
						</text>
					</view>
				</picker>
			</label>
			
		</view>
		
		<view class="_shoot" @click="photo">
			<view class="_txt">
				<p class="_tit">拍摄照片</p>
				<text class="_vice">请拍摄您的面部照片用于审核~</text>
			</view>
			<image :src="chooseImg ||'../../static/icons/face.svg'" class="_icon"></image>
		</view>
		
		<label class="submit-btn">
			<button type="primary" @click="submit">提交</button>
		</label>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pickerAreaName:'请选择被访区域',
				areaList:[
					{
					id:0,
					name: '水电大厦',
					depart: '安保部',
					type: "permanent"	
					}
				],
				form: {
					name: '',
					phone: '',
					area: '',
					departent: 0
				},
				chooseImg:''
			}
		},
		methods: {
			bindAreaChange(e) {
				console.log('picker发送选择改变，携带值为', this.areaList[e.target.value].name);
				this.form.departent = this.areaList[e.target.value].id;
				this.pickerAreaName =  this.areaList[e.target.value].name;
				// this.form.departent = e.target.value
			},
			//小程序调起拍照和相册
			photo(){
				uni.chooseImage({
					count:1,
					sizeType:['original','compressed'],
					sourceType:['camera','album'],//camera 拍照 album 相册
					success:(res)=> {
						// console.log(res)
						this.chooseImg= res.tempFilePaths
						console.log(JSON.stringify(res.tempFilePaths));
						uni.showToast({
							title:"成功拍照或引用相册",
							duration:2000
						})
					},
					fail() {
						uni.showToast({
							title:"拍照或引用相册失败",
							duration:2000
						})
					}
				})
			},
			submit(){
				console.log(this.form)
			}
		}
	}
</script>

<style scoped lang="scss">
	.visitor{
		width: 100vw;
		height: 100vh;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #eee;
		._form{
			border-radius: 20rpx;
			background-color: #fff;
			margin-top: 20rpx;
			padding: 40rpx;
			box-shadow: 4rpx 8rpx 24rpx -2rpx rgba($color: #ddd, $alpha: .5);
			.item{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				border-bottom: 2rpx solid #ccc;
				margin-bottom: 20rpx;
				padding: 20rpx 0;
				._tit{
					display: inline-block;
					min-width: 150rpx;
					text-align: left;
					font-size: 28rpx;
				}
				._input{
					flex: 1;
					text-align: right;
				}
			}
		}
		._shoot{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			padding: 20rpx;
			margin-top: 40rpx;
			border-radius: 20rpx;
			background-color: #fff;
			box-shadow: 4rpx 8rpx 24rpx -2rpx rgba($color: #ddd, $alpha: .5);
			._txt{
				._tit{
					font-size: 36rpx;
				}
				._vice{
					font-size: 28rpx;
					color: #ccc;
				}
			}
			._icon{
				width: 200rpx;
				height: 200rpx;
			}
		}
		.submit-btn{
			position: fixed;
			width: 80%;
			margin-left: 7%;
			bottom: 30rpx;
			button{
				width: 100%;
			}
		}
	}
</style>

