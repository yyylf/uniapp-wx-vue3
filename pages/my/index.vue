<template>
	<view class="myInfo">
		<template v-for='title in titleList' :key='title'>
		<view class="title">{{ title }}:</view>
		<view>{{ myInfo[title] }}</view>
		</template>
	</view>
</template>

<script setup lang='ts'>
import {reactive} from 'vue';
type NameRecord = Record<string,any>
const titleList = reactive<string[]>(['姓名','出生日期'])
const myInfo = reactive<NameRecord>({
	姓名:'于佑尧',
	出生日期:'1995-04-28',
	})
</script>

<style lang="less">
.myInfo{
	display: grid;
	grid-template-columns: repeat(2,1fr);
	column-gap: 60rpx;
	row-gap: 10rpx;
	.title{
		justify-self: flex-end;
		font-weight: bolder;
	}
}
</style>
