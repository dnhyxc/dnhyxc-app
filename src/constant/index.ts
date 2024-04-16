import HEAD_IMG from '@/assets/images/face.jpg';
import IMG1 from '@/assets/images/1.jpg';
import IMG3 from '@/assets/images/3.jpg';
import IMG4 from '@/assets/images/4.jpg';
import SEA from '@/assets/images/sea.jpg';
import CLOUD from '@/assets/images/cloud.jpeg';
import FRESH from '@/assets/images/fresh.jpeg';
import SUN from '@/assets/images/sun.jpg';
import SNOW from '@/assets/images/snow.jpg';
import BEAUTY from '@/assets/images/beauty.jpg';

export { IMG1, BEAUTY, IMG3, IMG4, HEAD_IMG, SNOW, CLOUD, SEA, FRESH, SUN };

export const MENU_LIST = [
  {
    name: '首页',
    key: 'home',
    path: '/home',
    icon: 'icon-home',
    fillIcon: 'icon-home',
    active: 'icon-home'
  },
  {
    name: '设置',
    key: 'setting',
    path: '/setting',
    icon: 'icon-Settings',
    fillIcon: 'icon-Settings',
    active: 'icon-Settings'
  },
  {
    name: '登录',
    key: 'login',
    path: '/login',
    icon: 'icon-flower',
    fillIcon: 'icon-flower',
    active: 'icon-flower'
  }
];

// 头部操作按钮
export const HEADER_ACTIONS = {
  win: 'icon-zxh',
  max: 'icon-ckzdh',
  close: 'icon-gb'
};

// 设置菜单
export const SETTING_MENUS = [
  {
    label: '个人设置',
    value: 1
  },
  {
    label: '账号设置',
    value: 2
  },
  {
    label: '系统设置',
    value: 3
  },
  {
    label: '主题设置',
    value: 4
  }
];

// 主题类型
export const THEME_TYPES = [
  {
    key: 'light',
    name: '晶莹白'
  },
  {
    key: 'black',
    name: '暗夜黑'
  },
  {
    key: 'freshGreen',
    name: '清新绿'
  },
  {
    key: 'emeraldGreen',
    name: '护眼绿'
  },
  {
    key: 'lightcyan',
    name: '极光绿'
  },
  {
    key: 'danQingHuang',
    name: '丹青黄'
  },
  {
    key: 'electrum',
    name: '琥珀金'
  },
  {
    key: 'skygray',
    name: '天空灰'
  },
  {
    key: 'danQingZi',
    name: '丹青白'
  },
  {
    key: 'colorful',
    name: '炫彩'
  }
];

// 背景图片主题
export const IMG_THEME_TYPES = [
  {
    key: 'cloud',
    name: '云间'
  },
  {
    key: 'beauty',
    name: '动漫'
  },
  {
    key: 'fresh',
    name: '小清新'
  },
  {
    key: 'lateralFace',
    name: '侧脸'
  },
  {
    key: 'sun',
    name: '日出'
  },
  {
    key: 'snow',
    name: '雪山'
  },
  {
    key: 'ShaoSiming',
    name: '少司命'
  },
  {
    key: 'locomotive',
    name: '智子'
  },
  {
    key: 'island',
    name: '海岛'
  },
  {
    key: 'sea',
    name: '岛屿'
  }
];
