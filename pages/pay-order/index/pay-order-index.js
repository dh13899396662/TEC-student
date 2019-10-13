Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },


  /*
   * goDetail跳转订单详情按钮事件
   *  
   * */
   goDetail:function(){
     wx.navigateTo({
       url: '/pages/pay-order/pay-order-detail/pay-order-detail',
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
   },

  itemChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
  },

  switchNav: function (e) {
    this.setData({
      currentTab: 0
    })
  },

  switchNav1: function (e) {
    this.setData({
      currentTab: 1
    })
  }
})