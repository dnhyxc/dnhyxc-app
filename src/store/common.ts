import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
  state: () => ({
    keyword: ''
  }),
  actions: {
    setKeyword(value: string) {
      this.keyword = value;
    },

    clearKeyword() {
      this.keyword = '';
    }
  }
});
