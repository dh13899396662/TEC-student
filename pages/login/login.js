//login.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) { //点击登陆按钮
    wx.showLoading({
      title: '',
    })
    wx.login({
      success(res) { //获取用户信息,获取code的那个接口
        // wx.showLoading({
        //     title: '加载中',
        //     mask: true,
        // })
        if (res.code) { //code传到后台去,获取sessionId
          wx.request({
            url: app.globalData.requestUrl + '/user/login',
            method: "POST",
            data: {
              code: res.code
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            success(res) {
              app.globalData.sessionId = res.data.sessionId;
              app.globalData.isNew = res.data.isNew; //是否是新用户
              if (app.globalData.isNew) { //新用户,往后台传
                wx.getUserInfo({
                  success(res) {
                    console.log(res)
                    wx.request({
                      url: app.globalData.requestUrl + '/user/info',
                      header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        'wxa-sessionid': getApp().globalData.sessionId,
                      },
                      method: "POST",
                      data: {
                        signature: res.signature,
                        rawData: res.rawData,
                        iv: res.iv,
                        encryptedData: res.encryptedData
                      },
                      success(res) {
                        wx.hideLoading()
                        wx.navigateBack({

                        })
                        // wx.getStorage({
                        //     key: 'prePageUrl',
                        //     success(res) {
                        //         if (res.data.params) {
                        //             wx.navigateTo({
                        //                 url: '/' + res.data.url + '?vsinfos=' + res.data.params,
                        //             })
                        //         } else {
                        //             wx.navigateTo({
                        //                 url: '/' + res.data.url,
                        //             })
                        //         }
                        //     }
                        // })
                      }
                    })
                  }
                })
              } else {
                wx.hideLoading()
                wx.navigateBack({

                })
                // wx.getStorage({
                //     key: 'prePageUrl',
                //     success(res) {
                //         if (res.data.params){
                //             wx.navigateTo({
                //                 url: '/' + res.data.url + '?vsinfos=' + res.data.params,
                //             })
                //         }else{
                //             wx.navigateTo({
                //                 url: '/' + res.data.url,
                //             })
                //         }
                //     }
                // })
              }
            }
          })
        } else {}
      }
    })
  }
})

// 接口调用方式

// app.network.ajax({
//   url: 'mingpian/wxa/card/myFans',
//   params: {

// },
//   success(res) {
//     
//   },
//   error(err) {
//   }
// })