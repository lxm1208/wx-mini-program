// components/xzs-header/xzs_header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转到搜索页面
    clickSearch(){
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }
})
