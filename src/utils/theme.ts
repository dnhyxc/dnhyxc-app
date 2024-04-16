import { IMG1, BEAUTY, IMG3, IMG4, HEAD_IMG, SNOW, CLOUD, SEA, FRESH, SUN } from '@/constant';

const removeStyle = {
  '--font-1': '#111'
};

// 公共字体设置
const fontStyle = {
  '--font-1': 'green',
  // '--font-1': '#252933',
  '--font-2': '#515767',
  '--font-3': '#4e5969',
  '--font-4': '#8a919f',
  '--font-5': '#999',
  '--font-6': '#cacaca'
};

// 动漫
const beauty = {
  '--bg-lg-color1': 'rgba(0, 0, 0, 0.5)',
  '--bg-lg-color2': 'rgba(0, 0, 0, 0.3)',
  '--backdrop-filter': 'blur(0)',
  // 图片背景兼容字体颜色
  '--font-color': '#fff',
  '--font-weight': '700',
  '--h-color': '#61dc00',
  '--shade-3': 'rgba(255, 255, 255, 0.1)',
  '--pre-bg-color': 'rgb(255, 255, 255, 0.05)',
  // editor 代码块颜色
  '--code-pre-bg': 'rgb(255, 255, 255, 0.05)',
  '--pre-hover-bg': 'rgb(0, 0, 0, 0.35)',
  // table 偶数项背景颜色
  '--table-even-bg': 'rgba(255, 255, 255, 0.1)',
  '--placeholder-color': '#868686',
  // loading 背景颜色
  '--loading-color': 'rgba(0, 0, 0, 0.69)',
  '--loading-text-color': '#2aff00',
  '--bg-image-url': `url(${BEAUTY})`,
  '--login-bg-img': `url(${BEAUTY})`,
  '--layer-2-2': 'rgb(255, 255, 255, 0.06)',
  '--card-border': 'rgba(182, 182, 182, 0.5)',
  '--card-btn-mark': 'rgba(0, 0, 0, 0.5)',
  '--markdown-function-color': '#fcf168',
  '--search-border-color': '#a86aa5',
  '--card-shadow': 'rgba(255, 255, 255, 0.35)',
  '--scroll-color': 'rgba(209, 209, 209, 0.15)'
};

const themeTypes = {
  freshGreen: { ...removeStyle },
  emeraldGreen: { ...removeStyle },
  electrum: { ...removeStyle },
  skygray: { ...removeStyle },
  black: { ...removeStyle },
  lightcyan: { ...removeStyle },
  light: { ...removeStyle },
  colorful: { ...removeStyle },
  ShaoSiming: { ...fontStyle },
  lateralFace: { ...fontStyle },
  beauty: { ...fontStyle, '--bg-image-url': `url(${BEAUTY})` },
  island: { ...fontStyle },
  locomotive: { ...fontStyle },
  snow: { ...fontStyle },
  danQingHuang: { ...fontStyle },
  danQingZi: { ...fontStyle },
  cloud: { ...fontStyle },
  sea: { ...fontStyle },
  fresh: { ...fontStyle },
  sun: { ...fontStyle }
};

// 设置背景颜色
export const modifyTheme = (type: string) => {
  for (const style in themeTypes[type]) {
    document?.body?.style.setProperty(style, themeTypes[type][style]);
  }
};
