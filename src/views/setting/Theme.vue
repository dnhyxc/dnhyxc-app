<!--
 * theme
 * @author: dnhyxc
 * @since: 2024-04-16
 * Account.vue
-->
<template>
  <div class="theme-wrap">
    <div class="default-wrap">
      <div class="label">主题颜色</div>
      <div class="themes">
        <div
          v-for="theme in THEME_TYPES"
          :key="theme.key"
          :class="`${currentTheme === theme.key && 'active'} ${theme.key} theme`"
          @click.stop="changeTheme(theme.key)"
        >
          {{ theme.name }}
        </div>
      </div>
    </div>
    <div class="default-wrap">
      <div class="label">背景图主题</div>
      <div class="themes">
        <div
          v-for="theme in IMG_THEME_TYPES"
          :key="theme.key"
          :class="`${currentTheme === theme.key && 'active'} ${theme.key} theme`"
          @click.stop="changeTheme(theme.key)"
        >
          {{ theme.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { modifyTheme } from '@/utils';
import { THEME_TYPES, IMG_THEME_TYPES } from '@/constant';

const currentTheme = ref<string>('light');

// 设置选择的主题
const changeTheme = (key: string) => {
  console.log(key, 'key');
  currentTheme.value = key;
  modifyTheme(key);
};
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';

.theme-wrap {
  width: 100%;
  padding-top: 50px;
  padding-left: 3px;
  box-sizing: border-box;
  color: var(--font-1);

  .default-wrap {
    margin-bottom: 20px;

    .label {
      margin-bottom: 15px;
      font-size: 18px;
      font-weight: 700;
      color: var(--font-1);
    }

    .themes {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .theme {
        box-sizing: border-box;
        padding: 10px 0 0 15px;
        height: 90px;
        width: calc(20% - 10px);
        max-width: 160px;
        margin-right: 10px;
        color: $fff;
        box-shadow: $shadow;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 700;
        margin-bottom: 10px;

        &:hover {
          box-shadow: 0 0 10px var(--hover-color);
        }

        &:last-child {
          margin-right: 0;
        }
      }

      .freshGreen {
        background-color: #f9fff9;
        color: $font-1;
      }

      .emeraldGreen {
        background-color: #ceeaba;
        color: $font-1;
      }

      .electrum {
        background-color: #f5f5dc;
        color: $font-1;
      }

      .skygray {
        background-color: #d8e0e6;
        color: $font-1;
      }

      .black {
        background-color: #171718;
        color: $fff;
        box-shadow: 0 0 5px #fff;
      }

      .lightcyan {
        background-color: #d7fffe;
        color: $font-1;
      }

      .light {
        background-color: #fff;
        color: $font-1;
      }

      .danQingHuang {
        background: linear-gradient(126deg, #d7fffe, #f9fff9, #f8fded, #f9fff9, #d7fffe, #f5ccec);
        background-size: 151%;
        color: $font-1;
      }

      .danQingZi {
        background: linear-gradient(to top, #fffeff 0%, #d7fffe 100%);
        color: $font-1;
      }

      .colorful {
        color: $font-1;
        @include bgMoveColor(126deg);
      }

      .ShaoSiming {
        background-image: url('@/assets/images/1.jpg');
        color: $font-1;
        @include bgStyles;
      }

      .lateralFace {
        background-image: url('@/assets/images/face.jpg');
        color: $fff;
        @include bgStyles;
      }

      .beauty {
        background-image: url('@/assets/images/beauty.jpg');
        color: $fff;
        @include bgStyles;
      }

      .locomotive {
        background-image: url('@/assets/images/3.jpg');
        color: $fff;
        @include bgStyles;
      }

      .island {
        background-image: url('@/assets/images/4.jpg');
        color: $font-1;
        @include bgStyles;
      }

      .snow {
        background-image: url('@/assets/images/snow.jpg');
        color: $font-1;
        @include bgStyles;
      }
      .cloud {
        background-image: url('@/assets/images/cloud.jpeg');
        color: $font-1;
        @include bgStyles;
      }

      .sea {
        background-image: url('@/assets/images/sea.jpg');
        color: $fff;
        @include bgStyles;
      }

      .fresh {
        background-image: url('@/assets/images/fresh.jpeg');
        color: $fff;
        @include bgStyles;
      }

      .sun {
        background-image: url('@/assets/images/sun.jpg');
        color: $fff;
        @include bgStyles;
      }

      .active {
        box-shadow: 0 0 10px var(--active);
      }
    }
  }
}
</style>
