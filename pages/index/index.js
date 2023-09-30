//Page Object
import { formatNum, formatTime } from "../../utils/commont.js"
import { listNav, listNews } from "../../api/apis"
Page({
  data: {
    navArr: [],
    newsArr: []
  },
  //options(Object)
  onLoad: function (options) {
    this.getNavData();
    this.getNewsData();
  },
  //获取导航
  getNavData() {
    listNav().then(res => {
      console.log(res);
      this.setData({
        navArr: res.data
      })
    })
  },
  //获取新闻
  getNewsData() {
    listNews({
      limit: 3,
      hot: true
    }).then(res => {
      res.data.forEach(item => {
        item.view_count = formatNum(item.view_count)
        item.publish_date = formatTime(item.publish_date, 5)
      })
      this.setData({
        newsArr: res.data
      })
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});