<template>
	<basic :data="data" />
</template>

<script setup lang="ts">
import basic from '../index/basic.vue';
const data = [
	{
		question: 'Vue生命周期？',
		answer: `
		beforeCreate created beforeMount mounted beforeUpdate updated beforeDestroy destroyed (activated deactivated)
		vue3:
		setup onBeforeMount onMounted onBeforeUpdate onUpdated onBeforeUnmount onUnmounted (onActivated onDeactivated)
		`
	},
	{
		question: '如何防御XSS攻击？',
		answer: ''
	}
];
</script>

<style></style>
