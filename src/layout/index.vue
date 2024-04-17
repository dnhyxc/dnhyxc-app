<template>
  <div class="el-container-wrap">
    <el-container>
      <LeftMenu />
      <el-main class="el-main">
        <Header />
        <div class="content">
          <RouterView v-if="isRouterAlive" v-slot="{ Component }">
            <component :is="Component" class="page" />
          </RouterView>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, provide } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import LeftMenu from '@/components/LeftMenu.vue';

const router = useRouter();

const isRouterAlive = ref<boolean>(true);

// 刷新当前页面
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};

// 父组件注册刷新当前页面的方法
provide('reload', reload);

const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.el-container-wrap {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  box-sizing: border-box;
  background-color: var(--background);
  background-image: var(--bg-image-url);
  background-position: var(--bg-position);
  background-repeat: var(--bg-repeat);
  background-size: var(--bg-img-size);
  animation: var(--bg-animation);
  overflow: hidden;

  .el-main {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 0;

    .header-warp {
      display: flex;
      align-items: center;
      padding: 8px 8px 8px 15px;
      height: 60px;
      box-sizing: border-box;
      -webkit-app-region: drag;
      color: var(--font-1);

      .back {
        -webkit-app-region: no-drag;
      }
    }

    .content {
      position: relative;
      width: 100%;
      height: calc(100vh - 60px);
      border-top-left-radius: 35px;
      border: 5px solid var(--content-border-bg);
      border-bottom: none;
      border-right: none;
      box-sizing: border-box;
      color: var(--font-1);
      overflow-y: auto;

      .page {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-color: transparent;
        color: var(--font-1);
        border-top-left-radius: 30px;
        padding: 5px 15px;
        overflow-y: auto;
      }
    }
  }
}
</style>
