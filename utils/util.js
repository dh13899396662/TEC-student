const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//请求封装
function getReq(url,header, cb) {
  wx.showLoading({
    title: '加载中',
    mask: true,
  })
  wx.request({
    url: url,
    method: 'get',
    header: {
      'wxa-sessionid': header
    },
    success: function (res) {
      if (res.data.retCode == '000000'){
        wx.hideLoading();
        return typeof cb == "function" && cb(res.data)
      } else if (res.data.retCode == '000004  '){
        logins();
      }else{
        wx.hideLoading();
        wx.showToast({
          title: res.data.retMsg,
          icon: 'none',
          duration: 1000
        });
      }
     
    },
    fail: function () {
      wx.hideLoading();
      wx.showModal({
        title: '网络错误',
        content: '网络错误,请重试',
        showCancel: false
      })
      return typeof cb == "function" && cb(false)
    }
  })
}
function logins(){
  var that = this;
  // 登录
  wx.login({
    success: res => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      wx.request({
        url: getApp().globalData.requestUserUrl + 'login',
        method: "POST",
        data: {
          code: res.code
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success(res) {
          getApp().globalData.sessionId = res.data.sessionId;
          getApp().globalData.isNew = res.data.isNew;
        }
      })
    }
  })
}
function getDataReq(url, data, header, cb) {
  wx.showLoading({
    title: '加载中',
    mask: true,
  })
  wx.request({
    url: url,
    method: 'get',
    data: data,
    header: {
      'wxa-sessionid': header
    },
    success: function (res) {
      if (res.data.retCode == '000000') {
        wx.hideLoading();
        return typeof cb == "function" && cb(res.data)
      } else if (res.data.retCode == '000004') {
        logins();
      }else {
        wx.hideLoading();
        wx.showToast({
          title: res.data.retMsg,
          icon: 'none',
          duration: 1000
        });
      }

    },
    fail: function () {
      wx.hideLoading();
      wx.showModal({
        title: '网络错误',
        content: '网络错误,请重试',
        showCancel: false
      })
      return typeof cb == "function" && cb(false)
    }
  })
}

function postReq(url,data,header, cb) {
  wx.showLoading({
    title: '加载中',
    mask: true,
  })
    wx.request({
      url: url,
      header: {
        'wxa-sessionid': header,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
      method: 'post',
      success: function (res) {
        if (res.data.retCode == '000000') {
          wx.hideLoading();
          return typeof cb == "function" && cb(res.data)
        } else if (res.data.retCode == '000004') {
          logins();
        } else {
          wx.hideLoading();
          wx.showToast({
            title: res.data.retMsg,
            icon: 'none',
            duration: 1000
          });
        }
      },
      fail: function (res) {
        wx.hideLoading();
        wx.showToast({
          title: res.data.retMsg,
          icon: 'none',
          duration: 1000
        });
        return typeof cb == "function" && cb(false)
      }
    })

}
function getReqList(url, data, header, cb) {
  wx.showLoading({
    title: '加载中',
    mask: true,
  })
  wx.request({
    url: url,
    method: 'get',
    data: data,
    header: {
      'wxa-sessionid': header
    },
    success: function (res) {
      if (res.data.retCode == '000000') {
        wx.hideLoading();
      } else if (res.data.retCode == '000004') {
        logins();
      } else {
        wx.hideLoading();
        wx.showToast({
          title: res.data.retMsg,
          icon: 'none',
          duration: 1000
        });
      }
      return typeof cb == "function" && cb(res)
    },
    fail: function () {
      wx.hideLoading();
      wx.showModal({
        title: '网络错误',
        content: '网络错误,请重试',
        showCancel: false
      })
      return typeof cb == "function" && cb(false)
    }
  })
}
function toLocaleDateStrings(data){
  var myData = new Date(data);
  var years = myData.getFullYear();
  var months = (myData.getMonth() + 1) < 10 ? '0' + (myData.getMonth() + 1): (myData.getMonth() + 1);
  var days = myData.getDate() < 10 ? '0' + myData.getDate() : myData.getDate();
  return years + '-' + months + '-' + days;
}
function showToast(msg){
    wx.showToast({
        title: msg,
        icon: 'none',
        duration: 1000
    });
}
module.exports = {
    getReq: getReq,
    postReq: postReq,
    getDataReq: getDataReq,
    formatTime: formatTime,
    getReqList: getReqList,
    toLocaleDateStrings: toLocaleDateStrings,
    showToast: showToast
}  
