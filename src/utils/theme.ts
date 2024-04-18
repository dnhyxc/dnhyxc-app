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
  '--backdrop-filter': 'blur(2px)',
  '--content-border-bg': 'rgb(237, 242, 232, 0.6)',
  '--bg-img-size': 'cover',
  '--green-1': 'rgb(225, 252, 201, 0.3)',
  '--tab-active': 'rgba(255, 255, 255, 0.3)',
  '--lg-colors': 'linear-gradient(-45deg, #68a235 0%, #377500 100%)',
  '--lg-active-colors': 'linear-gradient(-45deg, #30cfd0 0%, #330867 100%)',
  // 输入框背景颜色
  '--input-bg-color': 'transparent',
  '--search-border-color': '#fff',
  '--placeholder-color': '#d6d6d6',
  // 图片背景兼容字体颜色
  '--font-color': '#fff'
};

// 公共属性
const commonStyle = {
  '--content-border-bg': 'rgb(237, 242, 232, 0.2)'
};

// 选择颜色背景移除图片背景属性
const removeStyle = {
  ...fontStyle,
  '--backdrop-filter': 'initial',
  '--content-border-bg': 'rgb(237, 242, 232, 0.6)',
  '--bg-image-url': 'none',
  '--bg-animation': 'none',
  '--green-1': 'rgb(225, 252, 201, 0.85)',
  '--tab-active': 'rgba(255, 255, 255, 0.6)',
  '--lg-colors': 'linear-gradient(-45deg, #68a235 0%, #377500 100%)',
  '--lg-active-colors': 'linear-gradient(-45deg, #30cfd0 0%, #330867 100%)',
  // 输入框背景
  '--input-bg-color': 'transparent',
  '--search-border-color': '#fff',
  '--font-color': '#111',
  '--placeholder-color': '#a8abb2'
};

const themeTypes = {
  // 颜色背景
  light: {
    ...removeStyle,
    '--background': '#fff',
    '--tab-active': 'rgba(0, 0, 0, 0.1)',
    '--search-border-color': '#68a235'
  },
  black: {
    ...removeStyle,
    ...imgFontStyle,
    '--background': '#171718',
    '--green-1': 'rgb(225, 252, 201, 0.5)',
    '--search-border-color': '#68a235',
    '--font-color': '#fff',
  },
  freshGreen: {
    ...removeStyle,
    '--background': '#f9fff9',
    '--tab-active': 'rgba(0, 0, 0, 0.1)',
    '--search-border-color': '#68a235'
  },
  emeraldGreen: {
    ...removeStyle,
    '--background': '#ceeaba',
    '--search-border-color': '#68a235'
  },
  lightcyan: { ...removeStyle, '--background': '#d7fffe', '--search-border-color': '#68a235', '--font-color': '#fff' },
  danQingHuang: {
    ...removeStyle,
    '--bg-image-url': 'linear-gradient(to bottom, #e0c3fc, #d7fffe, #f9fff9, #f8fded, #f9fff9, #d7fffe, #f5ccec)',
    '--bg-img-size': '200% 169%',
    '--search-border-color': '#68a235'
  },
  electrum: { ...removeStyle, '--background': '#f5f5dc', '--search-border-color': '#68a235', '--font-color': '#fff' },
  skygray: { ...removeStyle, '--background': '#d8e0e6', '--search-border-color': '#68a235', '--font-color': '#fff' },
  danQingZi: {
    ...removeStyle,
    '--bg-image-url': 'linear-gradient(to top, #fffeff 0%, #d7fffe 100%)',
    '--search-border-color': '#68a235'
  },
  colorful: {
    ...removeStyle,
    '--bg-image-url': 'linear-gradient(126deg, #e0c3fc, #d7fffe, #f9fff9, #f8fded, #f9fff9, #d7fffe, #f5ccec)',
    '--bg-img-size': '200%',
    '--bg-animation': 'bgmove 15s infinite',
    '--search-border-color': '#68a235'
  },

  // 图片背景 云巅
  cloud: {
    ...imageStyles,
    ...fontStyle,
    '--backdrop-filter': 'blur(1px)',
    '--bg-image-url': `url(${CLOUD})`,
    '--lg-colors': 'linear-gradient(-45deg, #7ab6de 0%, #6e5ef2 100%)',
    '--font-color': '#000',
    '--search-border-color': '#7ab6de',
    '--placeholder-color': '#aeaeae'
  },
  // 动漫
  beauty: {
    ...imageStyles,
    '--backdrop-filter': 'blur(0)',
    '--bg-image-url': `url(${BEAUTY})`,
    '--content-border-bg': 'rgb(237, 242, 232, 0.25)',
    '--green-1': 'rgb(225, 252, 201, 0.1)',
    '--tab-active': 'rgba(0, 0, 0, 0.25)',
    '--lg-colors': `linear-gradient(45deg,
      #3f51b1 0%,
      #5a55ae 13%,
      #7b5fac 25%,
      #8f6aae 38%,
      #a86aa5 50%,
      #cc6b8e 62%,
      #f18271 75%,
      #f3a469 87%,
      #f7c978 100%)`,
    '--lg-active-colors': 'linear-gradient(-45deg, #f3ff00 0%, #377500 100%)',
    '--search-border-color': '#e9ae76',
    '--placeholder-color': '#868686'
  },
  // 侧脸
  lateralFace: {
    ...imageStyles,
    '--bg-image-url': `url(${HEAD_IMG})`,
    '--lg-colors': 'linear-gradient(-45deg, #00d5ff 0%, #ffffff 100%)',
    '--font-color': '#fff',
    '--search-border-color': '#00d5ff'
  },
  // 小清新
  fresh: {
    ...imageStyles,
    '--backdrop-filter': 'blur(1px)',
    '--bg-image-url': `url(${FRESH})`,
    '--lg-colors':
      'linear-gradient(45deg, #89ff00, #acf500, #c7ea00, #dcdf00, #edd400, #f4c900, #fabd00, #ffb100, #ffa200, #ff9300, #ff8300, #ff7200)',
    '--search-border-color': '#fabd00',
    '--placeholder-color': '#d2d2d2'
  },
  // 少司命
  ShaoSiming: { ...imageStyles, ...fontStyle, '--bg-image-url': `url(${IMG1})`, '--font-color': '#000' },
  // 三体智子
  locomotive: { ...imageStyles, '--bg-image-url': `url(${IMG3})` },
  // 海岛
  island: { ...imageStyles, ...fontStyle, '--bg-image-url': `url(${IMG4})`, '--font-color': '#000' },
  // 雪山
  snow: {
    ...imageStyles,
    ...fontStyle,
    '--bg-image-url': `url(${SNOW})`,
    '--lg-colors': 'linear-gradient(-45deg, #000 0%, #0057cd 100%)',
    '--font-color': '#000',
    '--placeholder-color': '#bfbfbf'
  },
  // 海
  sea: { ...imageStyles, '--bg-image-url': `url(${SEA})` },
  // 日出
  sun: {
    ...imageStyles,
    '--bg-image-url': `url(${SUN})`,
    '--lg-colors': 'linear-gradient(-45deg, #ffffff 0%, #8bd1ff 100%)'
  }
};

// 设置背景颜色
export const modifyTheme = (type: string) => {
  for (const style in themeTypes[type]) {
    document?.body?.style.setProperty(style, themeTypes[type][style]);
  }
};
