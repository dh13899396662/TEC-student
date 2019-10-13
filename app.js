//app.js
App({
  globalData: {
    userInfo: null,
    requestUrl: "http://orangepi.cross.echosite.cn/jiaofei/wxa", //体验版接口地址等
    // requestImgurl: "http://henji409.cross.echosite.cn/mingpian/wxa/",
    // appid: "wxe3b16e022e664feb",
    user: null,
    sessionId: '',
    isNew: true,
    showLogin: false,
  },

  onLaunch: function () {

  },
  readySessionKey: function () {
    var that = this;
    wx.showLoading({
      title: '',
    })
    //由于需要wx.login返回后才能加载后续，使用promise回调
    return new Promise(function (resolve, reject) {
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          console.log(res);
          wx.request({
            url: getApp().globalData.requestUrl + '/user/login',
            type: "POST",
            data: {
              code: res.code
            },
            success(res) {
              getApp().globalData.sessionId = res.data.sessionId;
              getApp().globalData.isNew = res.data.isNew;
              if (res.data.isNew) {
                getApp().network.toLogins();
              }
              resolve();
            }
          })
        }
      }),
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  console.log(res);

                  getApp().globalData.userInfo = res.userInfo;
                  wx.hideLoading();
                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (that.userInfoReadyCallback) {
                    that.userInfoReadyCallback(res);
                  }
                }
              })
            } else if (!res.authSetting['scope.userInfo']) {
              console.log(" wx.getSetting sdfsdf");
              getApp().network.toLogins();
            }
          }
        })
      wx.hideLoading()
    })

  },

  network: require('utils/network.js')
})
