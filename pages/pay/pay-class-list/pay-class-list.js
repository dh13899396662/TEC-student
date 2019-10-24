var app = getApp()
import * as api from '../../../api/index.js'
import * as xx from '../../../common/wx.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,
    typeData: ['全部分类', '艺术类', '编程类', '技术类'],
    time: '0',
    timeData: ['最新时间', '倒序', '正序'],
    list: [],
    params: { 
      pageNumber: 1,
      pageSize: 20,
      sortField: '',
      sortMethord: '',
      course_type: ''
      },
    totalPage: undefined
  },
  toClassDetail(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    let data = JSON.stringify(this.data.list[index])
    wx.navigateTo({
      url: '../pay-class-detail/pay-class-detail?data=' + data,
    })
  },
  typeChange: function (e) {
    console.log(e)
    let course_type = 'params.course_type'
    this.setData({
      type: e.detail.value,
      [course_type]: this.data.typeData[e.detail.value].dict_value
    })
    this.getStudentCourses()
  },
  timeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryDicts()
    this.getStudentCourses()
    wx.setNavigationBarTitle({
      title: '全部课程'
    })
  },
  queryDicts () {
    api.queryDicts().then(res => {
      if (res.data.retCode === xx.ERRCODE.OK) {
        res.data.retMsg.unshift({
          dict_label: '全部分类',
          dict_value: ''
        })
        this.setData({
          typeData: res.data.retMsg
        })
        console.log(this.data.typeData)
      } else {
        xx.toast(res.data.retMsg)
      }
    })
  },
  getStudentCourses() {
    xx.load()
    api.getStudentCourses(this.data.params).then(res => {
      if (res.data.retCode === xx.ERRCODE.OK) {
        this.setData({
          totalPage: res.data.retMsg.totalPage
        })
        res.data.retMsg.list.forEach(item => {
          if (item.course_imgs) {
            item.course_imgs = item.course_imgs.slice(0, -1)
            item.course_imgs = item.course_imgs.split(',')
          }
        })
        let list = [...this.data.list, ...res.data.retMsg.list]
        this.setData({
          list
        })
        console.log(this.data.list)
      }
    })
    xx.hide()
  },
  onReachBottom () {
    let pageNumber = this.data.params.pageNumber + 1
    if (pageNumber > this.data.totalPage) return
    let value = 'params.pageNumber'
    this.setData({
      [value]: pageNumber
    })
    this.getStudentCourses()
  },
  onShow: function (options) {
  }
})