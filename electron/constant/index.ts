import { BrowserWindow, Tray } from 'electron';
import Store from 'electron-store';

export const PORT = 9012;

export const DOMAIN = 'http://101.43.50.15:9116';

export const globalInfo: {
  mainWin: BrowserWindow | null;
  tray: Tray | null;
  // 控制是否退出
  willQuitApp: boolean;
  store: Store | null;
} = {
  mainWin: null,
  tray: null,
  willQuitApp: false,
  store: null
};
