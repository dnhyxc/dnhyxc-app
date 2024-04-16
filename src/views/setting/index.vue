<!--
 * 设置
 * @author: dnhyxc
 * @since: 2024-04-15
 * index.vue
-->
<template>
  <div class="container">
    <el-tabs type="border-card" class="border-card">
      <el-tab-pane v-for="menu in SETTING_MENUS" :key="menu.value" :label="menu.label">
        <Account v-if="menu.value === 1" />
        <Profile v-if="menu.value === 2" />
        <System v-if="menu.value === 3" />
        <Theme v-if="menu.value === 4" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { SETTING_MENUS } from '@/constant';
import Account from './Account';
import Profile from './Profile';
import System from './System';
import Theme from './Theme';

const router = useRouter();

const goBack = () => {
  router.push('/home');
};
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';

.container {
  .border-card {
    @include radius;
    border: none;
    background-color: transparent;

    :deep {
      .el-tabs__header,
      .el-tabs__nav-wrap,
      .el-tabs__nav-scroll,
      .el-tabs__nav {
        border-top-left-radius: 28px;
      }
      .el-tabs__item {
        &:first-child {
          border-top-left-radius: 28px;
        }
      }

      .el-tabs__content {
        height: calc(100vh - 125px);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow-y: auto;
        background-color: transparent;
      }
    }
  }
}
</style>
