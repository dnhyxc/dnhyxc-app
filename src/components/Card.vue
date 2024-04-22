<!--
 * Card
 * @author: dnhyxc
 * @since: 2024-04-19
 * index.vue
-->
<template>
  <div class="card-wrap">
    <div class="top">
      <div class="mark">
        <div class="action">
          <span @click="onEdit">编辑</span>
          <span @click="onDelete">删除</span>
        </div>
        <div>
          <div class="desc" title="该项目前台主要采用 `Electron22` + `Electron-store` + `Vite` + `Vue3` + `Vue-Router4` +
            `Typescript` + `Pinia` + `Element-plus` + `Echarts` + `@kangc/v-md-editor` + `Eslint` + `Husky` 等技术框架实现。">
            该项目前台主要采用 `Electron22` + `Electron-store` + `Vite` + `Vue3` + `Vue-Router4` +
            `Typescript` + `Pinia` + `Element-plus` + `Echarts` + `@kangc/v-md-editor` + `Eslint` + `Husky` 等技术框架实现。
          </div>
          <div class="tags">
            <span @click="toClassify('classify')">classifyclassifyclassifyclassifyclassify</span>
            <span @click="toTag('tag')">tagtagtagtagtagtagtag</span>
          </div>
        </div>
      </div>
      <Image :url="IMG1" radius="10px 10px 0 0" class-name="card-img" />
    </div>
    <div class="bottom">
      <div class="title">我是文章标题我是文章标题我是文章标题我是文章标题我是文章标题</div>
      <div class="author">
        <span>dnhyxcdnhyxcdnhyxcdnhyxcdnhyxc</span>
        <span>2024-04-19</span>
      </div>
      <div class="actions">
        <Icon class-name="icon-meizan" padding="0" background="" />
        <Icon class-name="icon-chakan eye" padding="0" background="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '@/components/Image.vue';
import Icon from '@/components/Icon.vue';
import { IMG1 } from '@/constant';

interface IProps {
  data: any;
  radius?: string;
  width?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

withDefaults(defineProps<IProps>(), {
  radius: '10px',
  width: ''
});

const toClassify = () => {
  console.log('classify');
};

const toTag = () => {
  console.log('tag');
};
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';

@mixin textStyle {
  mix-blend-mode: difference; /* 使用差值混合模式 */
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5); /* 水平偏移、垂直偏移、模糊半径和阴影颜色 */
  @include ellipsis;
  color: var(--primary);
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: var(--hover-text-color);
  }

  &:first-child {
    margin-right: 10px;
  }
}

.card-wrap {
  width: 100%;
  height: auto;
  box-shadow: 0 0 1px #ccc inset;
  box-sizing: border-box;
  border-radius: v-bind(radius);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.3);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5); /* 水平偏移、垂直偏移、模糊半径和阴影颜色 */

  &:hover {
    .top {
      .mark {
        top: 0;
        transition: all 0.5s ease;
      }
    }
  }

  .top {
    position: relative;
    overflow: hidden;

    .mark {
      position: absolute;
      top: -100%;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 5px;
      box-sizing: border-box;
      border-radius: 10px 10px 0 0;
      backdrop-filter: blur(3px);
      transition: all 0.5s ease;
      color: #fff;

      .action {
        display: flex;
        justify-content: flex-end;

        span {
          @include textStyle;

          &:last-child {
            color: $red;

            &:hover {
              color: $danger;
            }
          }
        }
      }

      .desc {
        @include ellipsisMore(2);
        font-size: 13px;
        mix-blend-mode: difference; /* 使用差值混合模式 */
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5); /* 水平偏移、垂直偏移、模糊半径和阴影颜色 */
        margin-bottom: 5px;
      }

      .tags {
        display: flex;
        justify-content: flex-end;

        span {
          @include textStyle;
        }
      }
    }
  }

  .bottom {
    padding: 5px;
    box-sizing: border-box;
    color: var(--font-1);

    .title {
      font-size: 15px;
      font-weight: 700;
      @include ellipsisMore(1);
    }

    .author {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 0;

      span {
        flex: 1;
        font-size: 14px;
        @include ellipsisMore(1);

        &:first-child {
          color: var(--primary);
          cursor: pointer;

          &:hover {
            color: var(--hover-text-color);
          }
        }

        &:last-child {
          text-align: right;
          font-size: 13px;
        }
      }
    }

    .actions {
      display: flex;
      justify-content: flex-start;

      .eye {
        height: 16px;
        line-height: 21px;
        margin-left: 15px;
      }
    }
  }
}
</style>
