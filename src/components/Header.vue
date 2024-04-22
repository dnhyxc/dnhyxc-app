<!--
 * Header
 * @author: dnhyxc
 * @since: 2024-04-13
 * index.vue
-->
<template>
  <div :class="`header-warp ${checkOS() === 'mac' && 'mac-header-warp'}`">
    <div class="left">
      <Icon
        v-for="i in HEADER_LEFT_ACTIONS"
        :key="i.key"
        :class-name="i.name"
        padding="8px 9px"
        @click="onClick(i.key)"
      />
      <div class="title">{{ route.meta.info || route.meta.title }}</div>
    </div>
    <div class="right">
      <Search v-if="showSearch" v-model:showSearch="showSearch" margin="0 12px 0 0" />
      <Icon v-else class-name="icon-search icon" padding="8px 9px" @click="onShowSearch" />
      <Icon
        v-for="i in HEADER_ACTIONS"
        :key="i.key"
        :style="{ display: i.show || (i.show && !showSearch) }"
        :class-name="`${i.key === 'max' && winStatus ? 'icon-ckxh' : i.name} icon`"
        padding="8px 9px"
        @click="onClick(i.key)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { HEADER_ACTIONS, HEADER_LEFT_ACTIONS } from '@/constant';
import { checkOS } from '@/utils';
import Icon from '@/components/Icon.vue';
import Search from '@/components/Search.vue';

const router = useRouter();
const route = useRoute();

const winStatus = ref(false);
const showSearch = ref(false);

window.electronApi.onWinMax((status: boolean) => {
  winStatus.value = status;
});

const onShowSearch = () => {
  showSearch.value = true;
};

const onBack = () => {
  router.go(-1);
};

const onForward = () => {
  router.go(1);
};

const onReload = () => {
  location.reload();
};

const onWinMin = () => {
  window.electronApi.sendWinMin();
};

const onWinMax = () => {
  window.electronApi.sendWinMax();
};

const onWinClose = () => {
  window.electronApi.sendWinClose();
};

const showMessage = () => {
  console.log('showMessage');
};

const toSetting = () => {
  router.push('/setting');
};

const onClick = (key: string) => {
  const actions = {
    left: onBack,
    right: onForward,
    reload: onReload,
    win: onWinMin,
    max: onWinMax,
    close: onWinClose,
    msg: showMessage,
    setting: toSetting
  };
  actions[key]();
};

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';

.header-warp {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    @include textLg;
    margin-left: -12px;

    .title {
      margin-left: 14px;
      font-weight: 700;
    }
  }

  .right {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @include textLg;

    .icon-search {
      font-size: 15px;
    }
  }
}
</style>
