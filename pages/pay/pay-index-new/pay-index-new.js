import * as api from '../../../api/index.js'
import * as xx from '../../../common/wx.js'

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: {
      dot: true
    },
    noticeData: [],
    school: 0,
    schoolData: ['新疆大学喀什东路北校区', '新疆师范大学新医路校区'],
    list: []
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
  onLoad () {
    this.queryNotices()
    this.getStudentCourses()
  },
  queryNotices() {
    api.notices(this.data.noticeParams).then(res => {
      if (res.data.retCode === xx.ERRCODE.OK) {
        this.setData({
          noticeData: res.data.retMsg.list
        })
        console.log(this.data.noticeData)
      }
    }).catch(ret => {
      throw Error(ret)
    })
  },
  getStudentCourses () {
    xx.load()
    api.getStudentCourses({ pageNumber: 1, pageSize: 3, sortField: '', sortMethord: ''}).then(res => {
      if (res.data.retCode === xx.ERRCODE.OK) {
        this.setData({
          list: res.data.retMsg.list
        })
      }
    })
    xx.hide()
  },
  getMyCouplan() {
    api.myCouplan().then(res => {
      if (res.data.retCode === xx.ERRCODE.OK) {
        this.setData({
          curriculumData: res.data.retMsg.list
        })
      }
      console.log(res)
    }).catch(ret => {
      console.log(ret)
    })
  },
  // 前往公告详情
  toNoticeDetail: function (e) {
    let index = e.target.dataset.index;
    let data = JSON.stringify(this.data.noticeData)
    xx.navTo(`/pages/noticelist/noticelist?noticeData=${data}`)
  },
  onShow: function (options) {
  }
})