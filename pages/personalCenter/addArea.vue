<template>
	<view class="add-area"> 
		<view class="_header">
			<label class="_item">
				<text class="_tit">姓名</text>
				<text class="_val">{{
					user.name
				}} </text>
			</label>
			<label class="_item">
				<text class="_tit">手机号</text>
				<text class="_val">{{
					user.phone | mobileFilter
				}} </text>
			</label>
		</view>
		<view class="add-cnt">
			<view class="_item">
				<text class="_tit">区域</text>
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
			</view>
			<view class="_item">
				<text class="_tit">公司/部门</text>
				<picker class="_input" mode="selector" :value="form.departent" :range="areaList" range-key="name"
					@change="bindDepartentChange">
					<view style="color: #ccc">
						<text>
							{{
								pickerDepartentName
							}}
						</text>
					</view>
				</picker>
			</view>
			
		</view>
		<button type="primary" class="submit">
			确认、提交
		</button>
		
	</view>
</template>

<script>
	export default {
		filters:{
			mobileFilter(val){
			  let reg = /^(.{3}).*(.{4})$/
			  return val.replace(reg,'$1****$2')
			}
		  },
		data() {
			return {
				user:{
					name:'王大锤',
					phone:'13322221111'
				},
				departentList: [
					{
						id:0,
						name: '水电大厦',
						depart: '安保部',
						type: "permanent"
					},
					{
						id:1,
						name: '汇融广场',
						depart: '',
						type: "version"
					}
				],
				pickerDepartentName:'请选择公司/部门',
				pickerAreaName:'请选择区域',
				areaList:[
					{
					id:0,
					name: '水电大厦',
					depart: '安保部',
					type: "permanent"	
					}
				],
				form:{
					area:'',
					departent:''
				}
			}
		},
		methods: {
			bindDepartentChange(e) {
				console.log('picker发送选择改变，携带值为', this.departentList[e.target.value].name);
				this.form.departent = this.departentList[e.target.value].id;
				this.pickerDepartentName =  this.departentList[e.target.value].name;
			},
			bindAreaChange(e) {
				console.log('picker发送选择改变，携带值为', this.departentList[e.target.value].name);
				this.form.area = this.departentList[e.target.value].id;
				this.pickerAreaName =  this.departentList[e.target.value].name;
				// this.form.departent = e.target.value
			},
			
		}
	}
</script>

<style lang="scss" scoped>

.add-area{
	width: 100vw;
	height: 100vh;
	padding: 20rpx;
	box-sizing: border-box;
	background-color: #eee;
	padding-top: 50rpx;
	._header{
		padding: 20rpx;
		border-radius: 20rpx;
		background-color: #53b6df;
		box-shadow: 4rpx 8rpx 24rpx -2rpx rgba($color: #aaa, $alpha: .5);
		margin-bottom: 100rpx;
		color: #fff;
		._item{
			display: block;
			&:nth-child(1){
				margin-bottom: 30rpx;
			}
			._tit{
				display: inline-block;
				min-width: 140rpx;
			}
			._val{
				color: #eee;
			}
		}
	}
	.add-cnt{
		padding: 20rpx;
		border-radius: 20rpx;
		background-color: #fff;
		._item{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			&:nth-child(1){
				margin-bottom: 40rpx;
			}
			._input{
				text-align: right;
				flex: 1;
			}
		}
		
	}
	.submit{
		position: fixed;
		width: 80%;
		left: 50%;
		margin-left: -40%;
		bottom: 30rpx;
	}
}
</style>
