<!--
 * 图片组件
 * @author: dnhyxc
 * @since: 2023-03-03
 * index.vue
-->
<template>
  <div class="image-wrap-style" @click="onClickImg">
    <img v-if="url" ref="imgRef" :src="loaded ? loadUrl : transitionImg" alt="" class="image-item" @error="onError" />
    <div v-if="!url" class="loading-img">
      <img v-if="transitionImg" :src="transitionImg" alt="" class="image-item" />
      <div v-else class="loading">loading...</div>
    </div>
    <img v-for="i in urls" v-show="urls?.length! > 0" :key="i" :src="i" alt="" class="image-item" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, onUnmounted } from 'vue';

const loadUrl = ref<string | undefined>('');
const loaded = ref<boolean>(false);
const imgRef = ref<HTMLImageElement | null>(null);
let timer: ReturnType<typeof setTimeout> | null = null;

interface IProps {
  url: string;
  height?: string;
  urls?: string[];
  onClick?: Function;
  transitionImg?: string;
  needColor?: boolean;
  position?: string;
  radius?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  urls: () => [],
  height: 'auto',
  onClick: () => {
  },
  transitionImg: '',
  needColor: false,
  position: 'top left',
  radius: ''
});

onMounted(() => {
  watchEffect(() => {
    loadImage();
  });
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
});

// 初始化图片
const loadImage = () => {
  const img = new Image();
  if (img.complete) {
    loaded.value = true;
    loadUrl.value = props.transitionImg;
  }
  img.onload = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      loaded.value = true;
      loadUrl.value = props.url as string;
    });
  };
  img.src = props.url as string;
};

// 图片加载失败事件
const onError = () => {
  loadUrl.value = props.transitionImg;
};

// 点击图片
const onClickImg = () => {
  props?.onClick && props?.onClick();
};
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';

.image-wrap-style {
  box-sizing: border-box;
  width: 100%;
  height: v-bind(height);

  .image-item {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: v-bind(radius);
    -webkit-user-drag: none;
    @include imgStyle(0.3s, v-bind(position));
  }
}
</style>
