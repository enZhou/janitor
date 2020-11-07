<template>
	<!-- v-model -->
	
	<!-- 使用组件 -->
	<!-- <vvSelect placeholder="请选择所属类别" :list="categorys" label="name" valueKey="id" @change="pickerChange"></vvSelect> -->
	
	<picker :ref="refName" @change="bindPickerChange"
		:value="index"
		:range="list"
    :disabled="disabled"
		:range-key="label">
		<slot />
		<view v-if="isText" class="text-ellipsis">{{checkLabel ? checkLabel : placeholder}}</view>
		<view v-else class="vv-input__body text-right">
			<view class="vv-input__control">
				<text v-if="checkLabel" :class="{'disabled': disabled}">{{checkLabel}}</text>
				<text class="vv-input__placeholder" v-else>{{placeholder}}</text>
			</view>
			
			<!-- <uni-icons type="arrowright" size="14" color="#808080"></uni-icons> -->
		</view>
	</picker>
</template>

<script>

	/**
	 * vv-select 选择
	 * @description picker再封装
	 * @property {String} valueKey 绑定的key
	 * @property {String} label 绑定的label
	 * @property {Array} list 数据
	 * @property {Boolean} disabled 是否禁用
	 * @event {Function} change 
	 */

	export default {
		name: 'vv-select',
		props: {
			refName: {
				type: String,
				default: 'vvSelect'
			},
			value: {
				type: [String,Number]
			},
			placeholder: {
				type: String,
				default: '请选择'
			},
			valueKey: {
				type: String,
				default: 'id'
			},
			label: {
				type: String,
				default: 'name'
			},
			list: {
				type: Array,
				default () {
					return []
				}
			},
			isText: {
				type: Boolean,
				default: false
			},
      disabled: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				index: 0,
				checkLabel: ''
			}
		},
		watch: {
			value: {
				handler: function(newVal) {
					if(this.value) {
						this.checkItemByKey(this.value)
					} else {
						this.$emit('change','')
					}
					
				},
				// immediate: true,
				// deep:true//对象内部的属性监听，也叫深度监听
			}
		},
		created() {
			// 首次选中
		},
		methods: {
			checkItemByKey: function(key) {
				// var index = this.list.findIndex((item,i)=> {return item[this.valueKey] == key});
				// // 首次找索引
				// index >= 0 && this.checkItemByIndex(index);
				
				var checkItem = this.list.find((item,i)=> {return item[this.valueKey] == key});
				console.log(checkItem)
				if(!checkItem) return;
				this.checkLabel = checkItem[this.label]; // 值
				this.$emit('change',checkItem[this.valueKey])
				
			},
			checkItemByIndex: function(index) {
				this.index = index;
				var checkItem = this.list.find((item,i)=> {return i == this.index});
				this.checkLabel = checkItem[this.label]; // 值
				// 返回这个值到父级
				// this.$emit('change',checkItem[this.valueKey])
				this.$emit('input',checkItem[this.valueKey])
				// this.$emit('on-change',checkItem[this.valueKey])
			},
			bindPickerChange: function(e) {
				this.checkItemByIndex(e.target.value);
			}
		}
	}
</script>
<style lang="scss" scoped>
	// .disabled {
 //    color: #808080;
 //  }
</style>
