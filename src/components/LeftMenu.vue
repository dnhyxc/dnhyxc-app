<!--
 * LeftMenu
 * @author: dnhyxc
 * @since: 2024-04-13
 * index.vue
-->
<template>
  <el-aside :class="`${checkOS() === 'mac' && 'mac-aside-wrap'} aside-wrap`" width="200">
    <div class="menu-list">
      <div class="header">
        <Icon class-name="icon-hd" size="40px" padding="0 10px 4px 0" background="" drag="drag" />
        <span class="name">墨客dnhyxc</span>
      </div>
      <div
        v-for="menu in MENU_LIST"
        :key="menu.key"
        :class="`menu-item ${route.path === menu.path && 'active'}`"
        @click="onClick(menu)"
      >
        <Icon :class-name="`${menu.icon} menu-icon`" padding="0 10px 0 0" size="20px" color="#000" />
        <span class="menu-text">{{ menu.name }}</span>
      </div>
    </div>
    <div class="user-info">
      <Image :url="IMG1" class="head" radius="8px" @click="toPersonal" />
      <div class="username" @click="toPersonal">dnhyxc</div>
      <div class="motto">
        <span>答案交给时光寻觅</span>
        <span>未来不负时光所期</span>
      </div>
      <div class="link">
        <Icon
          v-for="link in ['github', 'juejin', 'weibo', 'other']"
          :key="link"
          :class-name="`${MY_LINKS[link]} link-icon`"
          @click="onJump(link)"
        />
      </div>
    </div>
  </el-aside>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { checkOS } from '@/utils';
import { MENU_LIST, IMG1, MY_LINKS } from '@/constant';
import { MenuListParams } from '@/typings';
import Icon from '@/components/Icon.vue';
import Image from '@/components/Image.vue';

const router = useRouter();
const route = useRoute();

const onClick = (menu: MenuListParams) => {
  router.push(menu.path);
};

const toPersonal = () => {
  router.push('/personal');
};

const goBack = () => {
  router.go(-1);
};

const onJump = (link: string) => {
  console.log(link, 'link');
};
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';

.aside-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--font-1);
  -webkit-app-region: drag;

  .menu-list {
    width: 200px;
    padding: 0 10px;

    .header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 0 8px;

      .icon-hd {
        @include textLg;
      }

      .name {
        font-size: 21px;
        font-weight: 700;
        padding-bottom: 9px;
        @include textLg;
      }
    }

    .menu-item {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      margin-bottom: 5px;
      border-radius: 5px;
      cursor: pointer;
      -webkit-app-region: no-drag;

      .menu-icon,
      .menu-text {
        @include textLgActive;
        @include clickNoSelectText;
      }

      .menu-text {
        letter-spacing: 5px;
      }

      &:hover {
        background: var(--green-1);
        .menu-icon,
        .menu-text {
          @include clearTextLg();
        }
      }
    }

    .active {
      .menu-icon,
      .menu-text {
        @include textLg;
      }
    }
  }

  .user-info {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 210px;
    width: calc(100% - 30px);
    box-sizing: border-box;
    padding: 70px 0 10px;
    margin-bottom: 15px;
    border-radius: 8px;
    color: var(--font-1);
    overflow: hidden;
    -webkit-app-region: no-drag;

    .username {
      font-size: 20px;
      font-weight: 700;
      padding-left: 8px;
      @include textLgActive;
      cursor: pointer;
    }

    .motto {
      display: flex;
      flex-direction: column;
      position: relative;
      padding-left: 8px;
      z-index: 9;
      @include textLgActive;
    }

    .link {
      position: relative;
      z-index: 9;

      .link-icon {
        @include textLgActive;

        &:hover {
          @include clearTextLg();
        }
      }
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -10%;
      left: -15%;
      width: 60px;
      height: 60px;
      border-radius: 150px;
      background-color: var(--green-1);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -30%;
      right: -30%;
      width: 130px;
      height: 130px;
      border-radius: 130px;
      background-color: var(--green-1);
    }
  }

  .head {
    position: absolute;
    top: 0;
    left: 6px;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    cursor: pointer;
  }
}

.mac-aside-wrap {
  .menu-list {
    padding-top: 28px;
    box-sizing: border-box;
  }
}
</style>
