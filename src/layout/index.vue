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
      padding: 8px 8px 8px 25px;
      height: 60px;
      box-sizing: border-box;
      -webkit-app-region: drag;

      .back {
        -webkit-app-region: no-drag;
      }
    }

    .content {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: $content-bg;
      border-top-left-radius: 20px;
      // clip-path: xywh(0 5px 100% 100% round 15% 0);
      border-top-left-radius: 5%;
      // box-shadow: 0 0 6px $primary inset;
      // box-shadow: 2px 2px 5px $primary inset;
      box-sizing: border-box;
      padding: 5px 0 0 5px;

      .page {
        border-top-left-radius: 18px;
        width: 100%;
        height: 100%;
        // padding: 5px 0 0 5px;
        box-sizing: border-box;
        background-color: transparent;
      }
    }
  }
}
</style>
