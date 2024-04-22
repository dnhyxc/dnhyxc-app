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
      <div class="search">
        <span
v-for="menu in HOME_SEARCH_MENU" :key="menu" :class="checkedSearchMenu === menu && 'active-menu'"
              @click="onSelectMenu(menu)">{{ menu }}</span>
      </div>
      <el-scrollbar height="calc(100vh - 337px)">
        <div class="card-list">
          <div v-for="item in 20" :key="item">
            <Card :data="item" />
          </div>
        </div>
        <div class="no-more">没有更多了</div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { useRouter } from 'vue-router';
import { commonStore } from '@/store';
import { HOME_SEARCH_MENU } from '@/constant';
import Carousel from '@/components/Carousel.vue';
import Card from '@/components/Card.vue';

const router = useRouter();

const checkedSearchMenu = ref('推荐文章');

onMounted(() => {
  console.log(commonStore.keyword, 'keyword-----onMounted');
});

watch(() => commonStore.keyword, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    console.log(commonStore.keyword, 'keyword-----home');
  }
});

const onSelectMenu = (menu: string) => {
  console.log(menu, 'menu');
  checkedSearchMenu.value = menu;
};

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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px 15px 14px !important;
  overflow: hidden !important;

  .content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    .search {
      box-sizing: border-box;
      padding: 0 10px;
      margin: 11px 0 12px 0;
      font-size: 16px;
      font-weight: 700;

      span {
        color: var(--primary);
        cursor: pointer;

        &:hover {
          color: var(--hover-text-color);
        }

        &:first-child {
          margin-right: 15px;

        }
      }

      .active-menu {
        color: var(--active);
      }
    }

    .card-list {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
    }

    .no-more {
      margin-top: 13px;
      font-size: 14px;
      text-align: center;
    }
  }

  .action {
    padding-bottom: 35px;
  }
}
</style>
