/// <reference types="vite/client" />

declare interface Window {
  electronApi: {
    onWinMax: (callback: (status: boolean) => void) => void;
    sendWinMin: () => void;
    sendWinMax: () => void;
    sendWinClose: () => void;
    sendTest: (type: string) => void;
    sendInfo: (value: number) => void;
    onTest: (callback: (value: string) => void) => void;
    onGetInfo: (callback: (value: { id: number; title: string }) => void) => void;
    // 保存主题
    sendSetTheme: (type: string) => void;
    sendGetTheme: () => void;
    sendRemoveTheme: () => void;
    onGetTheme: (callback: (value: string) => void) => void;
  };
}

declare module '*';
