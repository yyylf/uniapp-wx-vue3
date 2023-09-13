<template>
	<basic :data="data" />
</template>

<script setup lang="ts">
import basic from './basic.vue';
const data = [
	{
		question: 'CSS定位',
		answer: 'CSS的position属性可以设置为以下五种值：static、relative、absolute、fixed、sticky'
	},
	{
		question: 'flex常用属性？',
		answer: `
			flex-direction: row/row-reverse/column/column-reverse
			justify-content: flex-start/flex-end/center/space-between/space-around/space-evenly
			align-items: stretch/flex-start/flex-end/center/baseline
			align-content: stretch/flex-start/flex-end/center/space-between
			flex-wrap: nowrap/wrap/wrap-reverse
			flex: flex-grow flex-shrink flex-basis
			`
	},
	{
		question: 'relative定位根据谁？',
		answer: 'relative定位不会脱离文档流。relative定位是根据自身位置进行定位的。它相对自己原来位置定位，继续占有原来位置。'
	},
	{
		question: 'css元素居中？水平垂直居中',
		answer: `
		行内元素: text-align: center(行内元素不能设置宽高,不能设置margin-top和margin-bottom，但可以设置margin-left和margin-right和padding)
		块级元素: margin: 0 auto;
		flex/grid布局: 
		position:
		水平垂直居中：flex(align-items)/grid(align-content)/position(transform: translate(-50%, -50%))
		`
	}
];
</script>

<style></style>
