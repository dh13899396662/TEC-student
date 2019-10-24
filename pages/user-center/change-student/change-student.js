var app = getApp()
import * as api from '../../../api/index.js'
import * as xx from '../../../common/wx.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowStudent: {
      sId: 1,
      name: '张二星'
    },
    list: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '学生切换'
    })
    this.loadMyStudents()
  },
  loadMyStudents () {
    xx.load()
    api.loadMyStudents().then(res => {
      if (res.data.retCode === xx.ERRCODE.OK) {
        res.data.retMsg.forEach(item => {
          item.avatarUrl = xx.getCookie('avatarUrl')
        })
        this.setData({
          list: res.data.retMsg
        })
      } else xx.toast(res.data.retMsg)
    })
    xx.hide()
  },
  addStudent () {
    xx.navTo("/pages/user-center/addStudent/addStudent")
  },
  onShow: function (options) {
  }
})