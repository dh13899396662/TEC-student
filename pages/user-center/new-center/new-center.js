var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  toChangeStudent: function () {
    wx.navigateTo({
      url: '../change-student/change-student',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的'
    })
  },
  onShow: function (options) {
  }
})