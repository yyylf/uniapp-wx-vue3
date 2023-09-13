<template>
	<view class="basicInfo">
		<view class="directory">目录</view>
		<view v-for="title in typeList" :key="title.id" class="title" @click="toDetail(title.id)">
			{{ title.name }}
		</view>
	</view>
</template>

<script setup lang="ts">
const typeList = [
	{
		id: 'browser',
		name: '浏览器'
	},
	{
		id: 'css',
		name: 'CSS'
	},
	{
		id: 'html',
		name: 'HTML'
	},
	{
		id: 'js',
		name: 'JS'
	},
	{
		id: 'optimize',
		name: '性能优化'
	},
	{
		id: 'automate',
		name: '前端工程化'
	}
];
const toDetail = (title: string) => {
	uni.navigateTo({
		url: `./${title}`
	});
};
</script>

<style lang="less">
.basicInfo {
	.directory {
		text-align: center;
		font-weight: bolder;
		font-size: 48rpx;
		margin: 4rpx 0;
	}
	.title {
		padding: 1rem 2rem;
		margin: 2rpx 0;
		background-image: linear-gradient(to right, #00c6fb 0%, #005bea 100%);
	}
}
</style>
