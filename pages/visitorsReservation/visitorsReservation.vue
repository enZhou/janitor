<template>
	<view class="approve">
		<view class="reservation-box">
			<view class="_title">
				被访人
			</view>
			<view class="_info_item">
				<text class="_name">
					姓名:
				</text>
				<text class="_cnt">
					{{
						approve.name
					}}
				</text>
			</view>
			<view class="_info_item">
				<text class="_name">
					手机号:
				</text>
				<text class="_cnt">
					{{
						approve.phone
					}}
				</text>
			</view>
			<view class="_info_item">
				<text class="_name">
					访问日期:
				</text>
				<text class="_cnt">
					<radio-group class="radio-list" @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
							<view class="_radio">
								<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
							</view>
							<view class="_radio">
								<label class="label-2-text" :for="item.name">
									<text>{{item.value}}</text>
								</label>
							</view>
						</label>
					</radio-group>
				</text>
			</view>
			<view class="_info_item">
				<text class="_name">

				</text>

				<view class="_cnt">
					<view class="time_box">

						<text class="time1" @click="openDatetimePicker('1')">
							{{
									approve.time1
								}}
						</text>
						<view class="time2" v-if="approve.timeType==='1'">
							至
							<text class="_time2" @click="openDatetimePicker('2')">
								{{

											approve.time2
									}}
							</text>
						</view>
					</view>
				</view>
			</view>
			<view class="_info_item">
				<text class="_name">
					事由:
				</text>

				<view class="_cnt approve-area">
					<textarea v-model="approve.area" placeholder="" />
					</view>
			</view>
			<view class="_info_item">
				<text class="_name">
					访问地区:
				</text>

				<view class="_cnt">
					<Select v-model="approve.address" placeholder="请选择访问地区" :list="addressList" valueKey="value" label="label"></Select>
				</view>
			</view>
		</view>

			<button type="primary" class="approve-btn">提交</button>
		
		<simple-datetime-picker
		   ref="myPicker1"
		   @submit="handleSubmitTime1"
		   :start-year="2000"
		   :end-year="2030"
		   color="rgba(83,182,223,0.5)"
		></simple-datetime-picker>
		
		<simple-datetime-picker
		   ref="myPicker2"
		   @submit="handleSubmitTime2"
		   :start-year="2000"
		   :end-year="2030"
		   color="rgba(83,182,223,0.5)"
		></simple-datetime-picker>

	</view>
</template>

<script>
	import simpleDatetimePicker from "@/components/buuug7-simple-datetime-picker/simple-datetime-picker.vue";
	import Select from '@/components/vv-select/vv-select'

	export default {
		components:{simpleDatetimePicker,Select},
		data() {
			return {
				radioItems: [{
						name: '0',
						value: '单日',
						checked:true,
					},
					{
						name: '1',
						value: '多日',
						checked:false
						
					}
				],
				addressList:[
					{
					          label: '水电大厦1',
					          value: 1
					        },
					{
					          label: '水电大厦2',
					          value: 2
					        },
					{
					          label: '水电大厦3',
					          value: 3
					        }
				],
				approve: {
					name: '啊啊实',
					phone: "13366662222",
					cause: "送外卖",
					timeType:"0",
					time1: "2019-2-31",
					time2: "2019-2-31",
					limit: 1,
					area:"adasddasdasdasdas",
					address:"水电大厦"
				}
			}
		},
		methods: {
			radioChange(e) {
				var checked = e.target.value
				var changed = {}
				for (var i = 0; i < this.radioItems.length; i++) {
					if (checked.indexOf(this.radioItems[i].name) !== -1) {
						changed['radioItems[' + i + '].checked'] = true
					} else {
						changed['radioItems[' + i + '].checked'] = false
					}
				}
				console.log(checked);
				if(checked==='0'){
					// this.approve.time2 = null
				}
				this.approve.timeType = checked
			},
			 // 打开picker
			  openDatetimePicker(type) {
				 this.$refs[`myPicker${type}`].show();
			  },
			  // 关闭picker1
			  closeDatetimePicker1() {
				 this.$refs.myPicker1.hide();
			  },
			  
			  // 关闭picker2
			  closeDatetimePicker2() {
				 this.$refs.myPicker2.hide();
			  },
			  handleSubmitTime1(e) {
				 console.log(e); // {year: "2019", month: "07", day: "17", hour: "15", minute: "21"}
				 this.approve.time1 = `${e.year}-${e.month}-${e.day}`;
			  },
			  
			  handleSubmitTime2(e) {
				 console.log(e); // {year: "2019", month: "07", day: "17", hour: "15", minute: "21"}
				 this.approve.time2 = `${e.year}-${e.month}-${e.day}`;
							 
			  }
		}
	}
</script>

<style lang="scss" scoped>
.approve{
	padding: 20rpx;
	.reservation-box{
		box-shadow: 0 0 20rpx rgba(104,206,122,0.5);
		border-radius: 10rpx;
		margin-bottom: 30rpx;
		background-color: rgba(104,206,122,0.5);
		color: #fff;
		._title{
			width: 100%;
			font-size: 56rpx;
			padding: 15rpx 30rpx;
			border-bottom: 1px solid #fff;
			margin-bottom: 20rpx;
		}
		._info_item{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			padding: 15rpx 30rpx;
			border-bottom: 1px solid #fff;
			&:last-child{
				border-bottom: none;
			}
			._name{
				display: inline-block;
				min-width:160rpx ;
			}
			.time_box{
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				.time1{
					margin-right: 20rpx;
				}
				._time2{
					margin-left: 20rpx;
				}
			}
			.radio-list{
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				.uni-list-cell{
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					margin-left: 30rpx;
				}
			}
		}
	}	
	
	.approve-area{
		border: 1px solid #eee;
		padding: 30rpx;
		width: 78%;
		height: 200rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
		textarea{
			width: 100%;
			height: 100%;
		}
	}
	.approve-btn{
		width: 50%;
	}
}
</style>
