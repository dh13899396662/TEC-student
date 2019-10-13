var app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageSize: 5,
    pageNumber: 1,
    Lists: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getList();
    that.getUserInfos();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  getUserInfos:function(){
    var that = this;
    wx.getStorage({
      key: 'UserInfos',
      success: function(res) {
        console.log(res.data)
        that.setData({
          UserInfo: res.data,
        })
      },
    })
  },
  goContinue:function(e){
    var that = this;
    // wx.setStorage({
    //   key: 'coureInfo',
    //   data: that.data.Lists[e.currentTarget.dataset.indexs],
    // })
    wx.navigateTo({
      url: '../continue-class/continue-class'
    })
  },

  callPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '13579969729',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //分页方法
  getList: function () {
    var that = this;
    var pageNumber = that.data.pageNumber;
    var pageSize = that.data.pageSize;
    app.network.ajax({
      url: 'school/queryCourses',
      params: {
        pageNumber: pageNumber,
        pageSize: pageSize,
        sortField: '',
        sortMethord: 'asc'
      },
      success(res) {
          var Lists = that.data.Lists;
          console.log(res)
          var reqLists = res.list;
          if (reqLists.length == 0) {
            wx.showToast({
              title: "没有更多的数据了...",
              icon: 'none',
              duration: 1000
            });
            if (pageNumber > 1) {
              that.setData({
                pageNumber: --pageNumber
              });
            }
            return;
          }
          that.setData({
            Lists: Lists.concat(reqLists)
          });
      },
      error(err) {
        wx.showToast({
          title: res.data.retMsg,
          icon: 'none',
          duration: 1000
        });
        if (pageNumber > 1) {
          that.setData({
            pageNumber: --pageNumber
          });
        }
      }
    })
  },
  //上拉分页,将页码加1，然后调用分页函数getList()
  onReachBottom: function () {
    var that = this;
    var pageNumber = that.data.pageNumber;
    that.setData({
      pageNumber: ++pageNumber
    });
    setTimeout(function () {
      wx.showToast({
        title: '加载中..',
      }),
        that.getList();
      that.setData({
        title: "数据加载完毕"
      })
    }, 1000)
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    var that = this;
    //下拉刷新，将pageNumber和pageSize分别设置成1和5，并初始化数据，让数据重新通过loadRoom()获取
    that.setData({
      pageNumber: 1,
      pageSize: 5,
      Lists: []
    })
    that.getList();
    wx.stopPullDownRefresh();
  },
})