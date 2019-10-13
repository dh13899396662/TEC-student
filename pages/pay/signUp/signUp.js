// pages/pay/signUp/signUp.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectClassindex:0,
    selectStudentindex: 0,
    classList: [{ names: "语文课" }, { names: "数学课" }, { names: "英语课" }],
    studentList: [{ names: "小王" }, { names: "小二王" }, { names: "小三王" }],
    checkedRead: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'coureInfo',
      success: function (res) {
        console.log(res.data)
        that.setData({
          coureInfo: res.data,
        });
      },
    });
    wx.getStorage({
      key: 'UserInfos',
      success: function (res) {
        console.log(res.data)
        that.setData({
          UserInfos: res.data,
        });
      },
    })
  },
//切换课程选择
  changeClass: function(e){
    this.setData({
      selectClassindex: e.detail.value
    })
  },
  //切换学生选择
  changStudent: function (e) {
    this.setData({
      selectStudentindex: e.detail.value
    })
  },
  //添加学生
  addStudents:function(){
    var that = this;
    wx.navigateTo({
      url: '../../user-center/addStudent/addStudent',
    })
  },
//阅读须知
  changes:function(){
    var that = this;
    that.setData({
      checkedRead: !that.data.checkedRead
    })
  },

//须知内容
showActions:function(){
  var that = this;
  wx.showModal({
    title: '报名须知',
    content: '1.报名制度\n' + '2.请假制度\n' + '3.转班制度\n' + '4.插班制度\n',
    confirmText:'我同意',
    cancelText:'不同意',
    success(res) {
      if (res.confirm) {
        that.setData({
          checkedRead: true
        })
      } else if (res.cancel) {
        that.setData({
          checkedRead: false
        })
      }
    }
  })
},

confirmButtons:function(){
  var that = this;
  app.network.ajax({
    url: 'school/selectCourse',
    params: {
      cids: that.data.coureInfo.class_id
    },
    success(res) {
      console.log(res)
    },
    error(err) {
    }
  })


  wx.navigateTo({
    url: '../pay-page/pay-page',
  })
},
//获取用户手机号
  getPhoneNumbers:function(e) {
    var that = this;
    console.log(e)
    app.network.ajax({
      url: 'user/deciphering',
      params: {
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
      },
      success(res) {
        that.setData({
          phones: res.attrs.phoneNumber
        })
      },
      error(err) {
        wx.showToast({
          title: '获取失败',
          icon: "none"
        })
      }
    })
  },


})