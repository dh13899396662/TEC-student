var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: {
      dot: true
    },
    noticeData: [{
      id: '1',
      title: '70年,教育与共和国砥砺同行'
    }, {
      id: '2',
      title: '以务实举措抓好主题教育 烟台市将问政烟台作为重要抓手'
    }],
    school: 0,
    schoolData: ['新疆大学喀什东路北校区', '新疆师范大学新医路校区'],
  },
  toClassDetail() {
    wx.navigateTo({
      url: '../pay-class-detail/pay-class-detail',
    })
  },
  schoolChange (e) {
    this.setData({
      school: e.detail.value
    })
  },
  toClassList() {
    wx.navigateTo({
      url: '../pay-class-list/pay-class-list',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  onShow: function (options) {
  }
})