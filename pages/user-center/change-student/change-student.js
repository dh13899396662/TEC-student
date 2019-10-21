var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowStudent: {
      sId: 1,
      name: '张二星'
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '学生切换'
    })
  },
  onShow: function (options) {
  }
})