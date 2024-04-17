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

export const DOMAIN = 'http://101.43.50.15:9116';

export { IMG1, BEAUTY, IMG3, IMG4, HEAD_IMG, SNOW, CLOUD, SEA, FRESH, SUN };

// 左侧菜单
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
    name: '文章分类',
    key: 'classify',
    path: '/classify',
    icon: 'icon-flower',
    fillIcon: 'icon-flower',
    active: 'icon-flower'
  },
  {
    name: '文章标签',
    key: 'tag',
    path: '/tag',
    icon: 'icon-Settings',
    fillIcon: 'icon-Settings',
    active: 'icon-Settings'
  },
  {
    name: '时间轴',
    key: 'timeline',
    path: '/timeline',
    icon: 'icon-Settings',
    fillIcon: 'icon-Settings',
    active: 'icon-Settings'
  },
  {
    name: '文章发布',
    key: 'create',
    path: '/create',
    icon: 'icon-Settings',
    fillIcon: 'icon-Settings',
    active: 'icon-Settings'
  },
  {
    name: '实用工具',
    key: 'tools',
    path: '/tools',
    icon: 'icon-Settings',
    fillIcon: 'icon-Settings',
    active: 'icon-Settings'
  },
  {
    name: '图片集',
    key: 'picture',
    path: '/picture',
    icon: 'icon-Settings',
    fillIcon: 'icon-Settings',
    active: 'icon-Settings'
  },
  {
    name: '关于博主',
    key: 'author',
    path: '/setting',
    icon: 'icon-Settings',
    fillIcon: 'icon-Settings',
    active: 'icon-Settings'
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

// 个人网站列表
export const MY_LINKS = {
  github: 'icon-flower',
  juejin: 'icon-flower',
  weibo: 'icon-flower',
  other: 'icon-flower'
};
