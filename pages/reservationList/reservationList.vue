<template>
	<view class="reservation-container">
		<view class="reservation-box">
			<view class="reservation-type active">
				<span>
					{{
						reservationData.reservation
					}}
				</span>
				<h3>
					今日预约
				</h3>
			</view>
			<view class="reservation-type">
				<span>
					{{
						reservationData.wait
					}}
				</span>
				<h3>
					待审批预约
				</h3>
			</view>
			<view class="reservation-type">
				<span >
					{{
						reservationData.approved
					}}
				</span>
				<h3>
					已审批预约
				</h3>
			</view>
		</view>
		<view class="reservation-nav">
			<text @click="openDatetimePicker">
				{{
					birthday
				}}
			</text>
			
			<button type="default" >
				全部预约
			</button>
		</view>
		<k-scroll-view
				class="reservation-list"
		        ref="k-scroll-view"
		        refreshType="native"
		        :refreshTip="refreshTip"
		        :loadTip="loadTip"
		        :loadingTip="loadingTip"
		        :emptyTip="emptyTip"
		        :touchHeight="touchHeight"
		        :bottom="bottom"
		        :autoPullUp="true"
		        @onPullDown="handlePullDown"
		        @onPullUp="handleLoadMore"
		    >
			 
			<navigator v-for="(item,index) in reservationList" :key="index" :url="`../approveReservation/approveReservation`">
				<view class="reservation-item" :class="{'item1':item.type==='1','item2':item.type==='2','item3':item.type==='3'}">
					<view class="_top">
						<span class='_name'>
							{{
								item.name
							}}
						</span>
						<span class='_phone'>
							{{
								item.phone
							}}
						</span>
						<span class='_time'>
							{{
								item.approveTime
							}}
						</span>
					</view>
					<view class="_center">
						<span class="_type">
							{{
								appointmentType[item.type]
							}}
						</span>
						<span class="_state">
							{{
								appointmentState[item.state]
							}}
						</span>
					</view>
					<view class="_bottom">
						<span>
							{{
								item.applicationTime
							}}
						</span>
					</view>
				</view>
			</navigator>
		</k-scroll-view>
		<simple-datetime-picker
		   ref="myPicker"
		   @submit="handleSubmitTime"
		   :start-year="2000"
		   :end-year="2030"
		   color="rgba(83,182,223,0.5)"
		></simple-datetime-picker>
		<navigator url="../visitorsReservation/visitorsReservation" class="reservation_btn">
			预约
		</navigator>
	</view>
</template>

<script>
import Tabbar from '../../components/Tabbar/Tabbar.vue'
import kScrollView from '@/components/k-scroll-view/k-scroll-view.vue';
import simpleDatetimePicker from "@/components/buuug7-simple-datetime-picker/simple-datetime-picker.vue";
	export default {
		components:{
			Tabbar,
			kScrollView,
			simpleDatetimePicker
		},
		data() {
			return {
				appointmentType: {
					1: '美团',
					2: '拜访',
					3: '推销'
				},
				appointmentState: {
					1: '未审批',
					2: '已通过',
					3: '已拒绝'
				},
				reservationData: {
					reservation: 0,
					wait: 0,
					approved: 0
				},
				nowTime: new Date().getTime(),
				reservationList: [{
					name: '王璐',
					phone: '18308198574',
					approveTime: new Date().getTime(),
					type: '1',
					state: '1',
					applicationTime: 'new Date().getTime()'
				},{
					name: '王璐111',
					phone: '123123123123',
					approveTime: new Date().getTime(),
					type: '2',
					state: '2',
					applicationTime: 'new Date().getTime()'
				},{
					name: '王璐2222',
					phone: '19933332222',
					approveTime: new Date().getTime(),
					type: '3',
					state: '3',
					applicationTime: 'new Date().getTime()'
				}
				],
				refreshTip:"下拉刷新",
				loadTip:"加载更多",
				loadingTip:"加载中",
				emptyTip:"我真的一滴也没有了",
				touchHeight:50,
				bottom:50,
				birthday:"2020-02-03"
			};
		},
		methods:{
			handlePullDown(){
				console.log('下拉刷新')
			},
			handleLoadMore(){
				console.log('上拉加载更多')
			},
			 // 打开picker
			  openDatetimePicker() {
				 this.$refs.myPicker.show();
			  },
			  // 关闭picker
			  closeDatetimePicker() {
				 this.$refs.myPicker.hide();
			  },
			  handleSubmitTime(e) {
				 console.log(e); // {year: "2019", month: "07", day: "17", hour: "15", minute: "21"}
				 this.birthday = `${e.year}-${e.month}-${e.day}`;
			  }
		}
	}
</script>
<style lang="scss" scoped>
	.reservation-container{
		width: 100%;
		height: 100vh;
		padding: 20rpx;
		padding-bottom: 200rpx;
		box-sizing: border-box;
		background-color: #F8F8F8;
		.reservation_btn{
			position: fixed;
			width: 100rpx;
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
			border-radius: 50%;
			left: 60rpx;
			bottom: 50rpx;
			background-color: rgba(83,182,223,1);
			color: #fff;
		}
	}
	// 统计数据样式
	.reservation-box{
		border-radius: 20rpx;
		background-color: #FFFFFF;
		overflow: hidden;
		
		.reservation-type{
			float: left;
			width: 33.33%;
			padding: 50rpx 0;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			// 统计选中样式
			&.active{
				color: rgba(83,182,223,1);
			}
		}
	}
	// 时间筛选
	.reservation-nav{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 32rpx 0;
		
		// 全部预约按钮样式
		button{
			width: 200rpx;
			height: 70rpx;
			font-size: 28rpx;
			background-color: rgba(83,182,223,1);
			color: #FFFFFF;
			margin: 0;
		}
	}
	
	// 列表
	.reservation-list{
		height: 80%;
		overflow-y: auto;
		.reservation-item{
			width: 100%;
			border-radius: 8rpx;
			padding: 40rpx 30rpx;
			box-sizing: border-box;
			color: #FFFFFF;
			margin-bottom: 20rpx;
			// 列表背景颜色
			&.item1{
				background-color: rgba(83,182,223,0.5);
			}
			&.item2{
				background-color: rgba(100,210,197,0.5);
			}
			&.item3{
				background-color: rgba(104,206,122,0.5);
			}
			&.item4{
				background-color: rgba(188,206,106,0.5);
			}
			
			._top,._center,._bottom{
				display: flex;
				justify-content: space-between;
			}
			
			._top{
				width: 100%;
				font-size: 32rpx;
				font-weight: 500;
			}
			
			._center,._bottom{
				width: 100%;
				font-size: 28rpx;
				margin-top: 20rpx;
				
				._state{
					font-size: 36rpx;
					font-weight: 500;
				}
			}
		}
	}
</style>
