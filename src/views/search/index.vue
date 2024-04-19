<!--
 * 高级搜索
 * @author: dnhyxc
 * @since: 2024-04-19
 * index.vue
-->
<template>
  <div class="container">
    <el-input v-model="keyword" placeholder="搜索文章" />
    Advanced Search
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import { commonStore } from '@/store';

const keyword = ref(commonStore.keyword);

console.log('commonStore.keyword', commonStore.keyword);

onUnmounted(() => {
  keyword.value = '';
  commonStore.clearKeyword();
});
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
</style>
