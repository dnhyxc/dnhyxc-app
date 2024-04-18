<!--
 * 搜素组件
 * @author: dnhyxc
 * @since: 2024-04-18
 * Search.vue
-->
<template>
  <div class="container">
    <el-form ref="ruleFormRef" style="max-width: 600px" :model="searchForm" @submit.native.prevent="onSubmit">
      <el-form-item label="" prop="keyword">
        <el-input v-model="searchForm.keyword" placeholder="搜索文章" />
      </el-form-item>
    </el-form>
    <Icon class-name="icon-shibai clear" background="" @click="onClear" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { commonStore } from '@/store';
import { showMessage } from '@/utils';
import Icon from './Icon.vue';

interface IProps {
  margin?: string;
}

withDefaults(defineProps<IProps>(), {
  margin: '0'
});

const searchForm = reactive({
  keyword: ''
});

const onClear = () => {
  searchForm.keyword = '';
  commonStore.clearKeyword();
};

const onSubmit = () => {
  if (!searchForm.keyword) {
    showMessage({
      title: '请输入关键词',
      message: '关键词为空，无法搜索',
      type: 'warning'
    });
  } else {
    commonStore.setKeyword(searchForm.keyword);
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';

.container {
  position: relative;
  margin: v-bind(margin);
  -webkit-app-region: no-drag;

  .clear {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: var(--search-border-color);
    display: v-bind('searchForm.keyword ? "inline" : "none"');

    &:hover {
      color: var(--active);
    }
  }

  :deep {
    .el-form-item {
      margin-bottom: 0;
    }
    .el-input__wrapper {
      height: 30px;
      background-color: var(--input-bg-color);
      border-radius: 30px;
      box-shadow: 0 0 0 1px var(--search-border-color) inset;
    }
    .el-input__inner {
      color: var(--font-color);

      &::-webkit-input-placeholder {
        color: var(--placeholder-color);
      }
    }
  }
}
</style>
