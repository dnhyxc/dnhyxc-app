<!--
 * home
 * @author: dnhyxc
 * @since: 2024-04-12
 * index.vue
-->
<template>
  <div class="container">
    <Carousel />
    <div class="content">
      <div class="action">
        <el-button type="primary" @click="onSendMsgToMainWin">发送消息给主进程</el-button>
        <el-button type="success" @click="toDetail">前往详情</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { commonStore } from '@/store';
import Carousel from "@/components/Carousel.vue";

const router = useRouter();

onMounted(() => {
  console.log(commonStore.keyword, 'keyword-----onMounted');
});

watch(() => commonStore.keyword, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    console.log(commonStore.keyword, 'keyword-----home');
  }
});

const toDetail = () => {
  router.push('/detail/1');
};

const onSendMsgToMainWin = () => {
  window.electronApi.sendInfo(123);
};

window.electronApi.onGetInfo((value: { id: number; title: string }) => {
  console.log(value, 'onInfo');
});
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px 15px 14px !important;

  .content {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 10px;
  }

  .action {
    padding-bottom: 35px;
  }
}
</style>
