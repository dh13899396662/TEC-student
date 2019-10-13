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

  classNotice:function(){
    wx.navigateTo({
      url: '../notice/notice',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  stopNotice:function(){
    wx.navigateTo({
      url: '../notice/notice',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  goCenter:function(){
    wx.navigateTo({
      url: '../center/center-index/center-index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  goCourse:function(){
    wx.navigateTo({
      url: '../course/course',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  goClass:function(){
    wx.navigateTo({
      url: '../class/class',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  goRecord:function(){
    wx.navigateTo({
      url: '../addStudent/addStudent',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  goatlas:function(){
    wx.navigateTo({
      url: '../../atlas/atlas',
    })
  },

  gocomment:function(){
    wx.navigateTo({
      url: '../../comment/comment',
    })
  },

  gotimetable:function(){
    wx.navigateTo({
      url: '../../timetable/timetable',
    })
  },

  goreport:function(){
    wx.navigateTo({
      url: '../../report/report',
    })
  },

  gosick:function(){
    wx.navigateTo({
      url: '../../sick/sick',
    })
  },
})