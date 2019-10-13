var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '0',
    typeData: ['全部分类', '艺术类', '编程类', '技术类'],
    time: '0',
    timeData: ['最新时间', '倒序', '正序'],
  },
  toClassDetail() {
    wx.navigateTo({
      url: '../pay-class-detail/pay-class-detail',
    })
  },
  typeChange: function (e) {
    this.setData({
      type: e.detail.value
    })
  },
  timeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '全部课程'
    })
  },
  onShow: function (options) {
  }
})