<template>
	<view class="browser">
		<view class="flex" style="padding: 1rem">
			<view style="margin-right: 1rem">搜索:</view>
			<input :value="value" @input="onSearch" placeholder="关键词" />
		</view>
		<uni-collapse accordion>
			<uni-collapse-item v-for="item in filterData" :key="item.question" :title="item.question">
				<view style="padding: 0 0.5rem">
					<text>{{ item.answer }}</text>
				</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface DataType {
	question: string;
	answer: string;
}
const { data } = defineProps<{ data: DataType[] }>();
const value = ref('');
let filterData = ref(data);
const onSearch = (e: React.FormEvent) => {
	const filterText = (e.target as HTMLInputElement).value;
	filterData.value = data.filter((el) => el.question.indexOf(filterText) !== -1);
};
</script>

<style lang="less" scoped>
.browser {
	.flex {
		display: flex;
		align-items: center;
	}
}
</style>