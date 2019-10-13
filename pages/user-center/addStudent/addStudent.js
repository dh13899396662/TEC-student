// pages/user-center/addStudent/addStudent.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexs: [{ name: 'male', value: '男', checked: 'true' },{ name: 'female', value: '女' }],
    stu_birthDay: '2016-09-01',
    stu_sex: '男'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //完成输入
  register:function(){
     var that = this;
     console.log(that.data)
     var datas = that.data;
    app.network.ajax({
      url: 'school/register',
      params: {
        stu_name: datas.stu_name,
        stu_sex: datas.stu_sex,
        stu_birthDay: datas.stu_birthDay,
        stu_fatherName: datas.stu_fatherName,
        stu_fatherJob: datas.stu_fatherJob,
        stu_fatherTel: datas.stu_fatherTel,
        stu_motherName: datas.stu_motherName,
        stu_motherJob: datas.stu_motherJob,
        stu_motherTel: datas.stu_motherTel,
      },
      success(res) {
        
        wx.navigateBack({
          
        })
      },
      error(err) {
      }
    })
  },
  //输入
  bindstu_name: function(e){
    var that = this;
    that.setData({
      stu_name: e.detail.value
    })
  },
  //输入
  bindstu_fatherName: function (e) {
    var that = this;
    that.setData({
      stu_fatherName: e.detail.value
    })
  },
  //输入
  bindstu_fatherTel: function (e) {
    var that = this;
    that.setData({
      stu_fatherTel: e.detail.value
    })
  },
  //输入
  bindstu_fatherJob: function (e) {
    var that = this;
    that.setData({
      stu_fatherJob: e.detail.value
    })
  },
  //输入
  bindstu_motherName: function (e) {
    var that = this;
    that.setData({
      stu_motherName: e.detail.value
    })
  },
  //输入
  bindstu_motherTel: function (e) {
    var that = this;
    that.setData({
      stu_motherTel: e.detail.value
    })
  },
  //输入
  bindstu_motherJob: function (e) {
    var that = this;
    that.setData({
      stu_motherJob: e.detail.value
    })
  },
//切换生日
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      stu_birthDay: e.detail.value
    })
  },
  changeSex:function(e){
    console.log(e.detail.value)
    this.setData({
      stu_sex: e.detail.value
    })
  },
})