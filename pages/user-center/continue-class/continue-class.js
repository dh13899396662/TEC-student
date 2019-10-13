var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'coureInfo',
      success: function(res) {
        console.log(res.data)
        that.setData({
          Lists: res.data,
        });
      },
    })
  },


})