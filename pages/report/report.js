// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardlist: [{ cardNum: '123456132465', cardName: '门禁卡1' }, { cardNum: '45454545454', cardName: '门禁卡2' } ],
    index: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindPickerChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  confirmReport:function(){
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否确认挂失？',
      showCancel: true,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
})