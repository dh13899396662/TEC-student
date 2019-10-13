var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Lists:[],
    payIndex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.removeStorage({
      key: 'coureInfo',
      success: function(res) {},
    })
  },
  onShow: function (options) {
    var that = this;
    if(!app.globalData.sessionId){
      app.readySessionKey().then(function(res){
        that.getUserInfo();
        that.queryCourses();
      })
    }else{
      that.getUserInfo();
      that.queryCourses();
    }
  },
//getUserInfo
  getUserInfo:function(){
    var that = this;
    app.network.ajax({
      url: 'school/loadDefaultStudent',
      params: {
      },
      success(res) {
        console.log(res)
        wx.setStorage({
          key: 'UserInfos',
          data: res,
        })
      },
      error(err) {

      }
    })
  },
  //查课
  queryCourses:function(){
    var that = this;
    app.network.ajax({
      url: 'school/queryCourses',
      params: {
        pageNumber: '1',
        pageSize: '5',
        sortField: '',
        sortMethord: 'asc'
      },
      success(res) {
        that.setData({
          Lists: res.list,
          totalNums: res.totalRow
        })
      },
      error(err) {
      }
    })
  },
  changPay:function(event){
    this.setData({
      payIndex:event.detail.current
    })
  },

  gopay:function(e){
    var that = this;
    console.log(e.currentTarget.dataset.indexs)
    wx.setStorage({
      key: 'coureInfo',
      data: that.data.Lists[e.currentTarget.dataset.indexs],
    })
    wx.navigateTo({
      url: '../signUp/signUp',
    })
  },
  goNoticeList:function(){
    var that = this;
    wx.navigateTo({
      url: '../../noticelist/noticelist',
    })
  },
})