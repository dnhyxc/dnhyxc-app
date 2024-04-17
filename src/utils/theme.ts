import { IMG1, BEAUTY, IMG3, IMG4, HEAD_IMG, SNOW, CLOUD, SEA, FRESH, SUN } from '@/constant';

// 公共字体设置
const fontStyle = {
  '--font-1': '#252933',
  '--font-2': '#515767',
  '--font-3': '#4e5969',
  '--font-4': '#8a919f',
  '--font-5': '#999',
  '--font-6': '#cacaca'
};

// 图片字体颜色
const imgFontStyle = {
  '--font-1': '#fff',
  '--font-2': '#f2f2f2',
  '--font-3': '#ebebeb',
  '--font-4': '#e8e8e8',
  '--font-5': '#dfdfdf',
  '--font-6': '#959595'
};

// 背景图片公共配置
const imageStyles = {
  ...imgFontStyle,
  // 主题背景颜色
  '--background': 'transparent',
  '--content-border-bg': 'rgb(237, 242, 232, 0.6)',
  '--green-1': 'rgb(225, 252, 201, 0.3)',
  '--tab-active': 'rgba(255, 255, 255, 0.3)'
};

// 公共属性
const commonStyle = {
  '--content-border-bg': 'rgb(237, 242, 232, 0.2)'
};

// 选择颜色背景移除图片背景属性
const removeStyle = {
  ...fontStyle,
  '--content-border-bg': 'rgb(237, 242, 232, 0.6)',
  '--bg-image-url': 'none',
  '--bg-animation': 'none',
  '--green-1': 'rgb(225, 252, 201, 0.85)',
  '--tab-active': 'rgba(255, 255, 255, 0.6)'
};

const themeTypes = {
  // 颜色背景
  light: { ...removeStyle, '--background': '#fff', '--tab-active': 'rgba(0, 0, 0, 0.1)' },
  black: { ...removeStyle, ...imgFontStyle, '--background': '#171718', '--green-1': 'rgb(225, 252, 201, 0.5)' },
  freshGreen: {
    ...removeStyle,
    '--background': '#f9fff9',
    '--tab-active': 'rgba(0, 0, 0, 0.1)'
  },
  emeraldGreen: { ...removeStyle, '--background': '#ceeaba' },
  lightcyan: { ...removeStyle, '--background': '#d7fffe' },
  danQingHuang: {
    ...removeStyle,
    '--bg-image-url': 'linear-gradient(to bottom, #e0c3fc, #d7fffe, #f9fff9, #f8fded, #f9fff9, #d7fffe, #f5ccec)',
    '--bg-img-size': '200% 169%'
  },
  electrum: { ...removeStyle, '--background': '#f5f5dc' },
  skygray: { ...removeStyle, '--background': '#d8e0e6' },
  danQingZi: { ...removeStyle, '--bg-image-url': 'linear-gradient(to top, #fffeff 0%, #d7fffe 100%)' },
  colorful: {
    ...removeStyle,
    '--bg-image-url': 'linear-gradient(126deg, #e0c3fc, #d7fffe, #f9fff9, #f8fded, #f9fff9, #d7fffe, #f5ccec)',
    '--bg-img-size': '200%',
    '--bg-animation': 'bgmove 15s infinite'
  },

  // 图片背景
  cloud: { ...imageStyles, ...fontStyle, '--bg-image-url': `url(${CLOUD})` }, // 云巅
  beauty: {
    ...imageStyles,
    '--bg-image-url': `url(${BEAUTY})`,
    '--content-border-bg': 'rgb(237, 242, 232, 0.25)',
    '--green-1': 'rgb(225, 252, 201, 0.1)',
    '--tab-active': 'rgba(0, 0, 0, 0.25)'
  }, // 动漫
  lateralFace: { ...imageStyles, '--bg-image-url': `url(${HEAD_IMG})` }, // 侧脸
  fresh: { ...imageStyles, '--bg-image-url': `url(${FRESH})` }, // 小清新
  ShaoSiming: { ...imageStyles, ...fontStyle, '--bg-image-url': `url(${IMG1})` }, // 少司命
  locomotive: { ...imageStyles, '--bg-image-url': `url(${IMG3})` }, // 三体智子
  island: { ...imageStyles, ...fontStyle, '--bg-image-url': `url(${IMG4})` }, // 海岛
  snow: { ...imageStyles, ...fontStyle, '--bg-image-url': `url(${SNOW})` }, // 雪山
  sea: { ...imageStyles, '--bg-image-url': `url(${SEA})` }, // 海
  sun: { ...imageStyles, '--bg-image-url': `url(${SUN})` } // 日出
};

// 设置背景颜色
export const modifyTheme = (type: string) => {
  for (const style in themeTypes[type]) {
    document?.body?.style.setProperty(style, themeTypes[type][style]);
  }
};
