// pages/sick/sick.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardlist: [{ cardNum: '', cardName: '课程1' }, { cardNum: '45454545454', cardName: '课程12' }],
    index: 0,
    date: '2019-09-01',
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
  bindTimeChange:function(e){
    this.setData({
      date: e.detail.value
    })
  },
  confirmReport: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否确认请假？',
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