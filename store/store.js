import {
  observable,
  action
} from "mobx-miniprogram";

export const store = observable({
  // 数据字段
  cartLength: 0,
  activeTabBarIndex: 0,
  // 计算属性
  get sum() {
    return this.cartLength
  },

  // actions
  updateActiveTabBarIndex: action(function (index) {
    this.activeTabBarIndex = index
  }),
  updataCartLength: action(function () {
    const cart = wx.getStorageSync("cart") || [];
    this.cartLength = cart.length

  })


});