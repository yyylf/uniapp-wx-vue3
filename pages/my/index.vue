<template>
	<view class="myInfo">
		<view class="title">头像:</view>
		<image src="../../static/avatar.png" class="avatar"></image>
		<template v-for='title in titleList' :key='title'>
		<view class="title">{{ title }}:</view>
		<view class="text">{{ myInfo[title] }}</view>
		</template>
	</view>
</template>

<script setup lang='ts'>
import {reactive} from 'vue';
type NameRecord = Record<string,any>
const titleList = reactive<string[]>(['作者','QQ','出生日期','入党日期'])
const myInfo = reactive<NameRecord>({
		作者:'于佑尧',
		QQ:'2428072732',
		出生日期:'1995-04-28',
		入党日期:'2016-05-25',
	})
</script>

<style lang="less">
.myInfo{
	display: grid;
	grid-template-columns: repeat(2,1fr);
	align-items: center;
	column-gap: 2rem;
	row-gap: 2rem;
	.title{
		justify-self: flex-end;
		font-weight: bolder;
	}
	.avatar{
		width: 3rem;
		height: 3rem;
	}
}
</style>
