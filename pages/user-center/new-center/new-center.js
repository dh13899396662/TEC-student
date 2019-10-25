var app = getApp()
import * as xx from '../../../common/wx.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: xx.getCookie('avatarUrl')
  },
  toChangeStudent: function () {
    wx.navigateTo({
      url: '../change-student/change-student',
    })
  },
  myInfo () {
    xx.navTo('/pages/user-center/my-info/my-info')
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