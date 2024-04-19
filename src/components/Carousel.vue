<!--
 * 轮播图
 * @author: dnhyxc
 * @since: 2024-04-17
 * index.vue
-->
<template>
  <div class="carousel-container">
    <div class="carousel-list">
      <el-carousel height="200px" motion-blur trigger="click">
        <el-carousel-item v-for="item in imgs" :key="item">
          <Image :url="item" height="200px" radius="10px" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="card-list">
      <div class="card">
        <Image :url="CLOUD" height="200px" radius="10px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IMG1, BEAUTY, IMG3, IMG4, HEAD_IMG, SNOW, CLOUD, SEA, FRESH, SUN } from '@/constant';
import Image from "@/components/Image.vue";

const imgs = [IMG1, BEAUTY, IMG3, IMG4, HEAD_IMG];
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';

.carousel-container {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 16px 10px 10px;
  margin-bottom: 15px;

  .carousel-list {
    flex: 0.7;
    margin-right: 15px;
    border-radius: 16px 10px 10px;
    box-shadow: 0 0 1px #ccc;

    :deep {
      .el-carousel {
        border-radius: 16px 10px 10px;
      }
    }
  }

  .card-list {
    flex: 0.3;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0 0 1px #ccc;

    .card {
      height: 200px;
    }
  }
}
</style>
