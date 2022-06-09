// custom-tab-bar/index.js
import {
  storeBindingsBehavior
} from "mobx-miniprogram-bindings";
import {
  store
} from "../store/store";
Component({
  options: {
    styleIsolation: 'shared'
  },
  behaviors: [storeBindingsBehavior],
  data: {
    "list": [{
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "../icons/home.png",
        "selectedIconPath": "../icons/home-o.png"
      },
      {
        "pagePath": "/pages/category/index",
        "text": "分类",
        "iconPath": "../icons/category.png",
        "selectedIconPath": "../icons/category-o.png"
      },
      {
        "pagePath": "/pages/cart/index",
        "text": "购物车",
        "iconPath": "../icons/cart.png",
        "selectedIconPath": "../icons/cart-o.png",
        info: 0
      },
      {
        "pagePath": "/pages/user/index",
        "text": "我的",
        "iconPath": "../icons/my.png",
        "selectedIconPath": "../icons/my-o.png"
      }
    ]
  },

  storeBindings: {
    store,
    fields: {
      cartLength: "sum",
      active: 'activeTabBarIndex',

    },
    actions: {
      updateActive: 'updateActiveTabBarIndex'
    },
  },
  observers: {
    'cartLength': function (val) {
      this.setData({
        'list[2].info': val
      })
    }
  },
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      // this.setData({ active: event.detail })
      this.updateActive(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  },
});