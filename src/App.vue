<template>
  <RouterView v-if="isRouterAlive" v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>

<script setup lang="ts">
import { ref, nextTick, provide } from 'vue';
import { modifyTheme } from '@/utils';

const isRouterAlive = ref(true);

window.electronApi.sendGetTheme();

// 修改主题色
window.electronApi.onGetTheme((theme: string) => {
  modifyTheme(theme);
});

// 刷新当前页面
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};

// 父组件注册刷新当前页面的方法
provide('reload', reload);
</script>

<style scoped></style>
