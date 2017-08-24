//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userevent: 'Hello World',
    userInfo: {},
    events: [
      {
        name: "学习开发微信小程序",
        date: "08/24 - 09/10",
        location: "Chengdu",
        status: "待审核"
      },
      {
        name: "学习开发微信小程序",
        date: "08/24 - 09/10",
        location: "Chengdu",
        status: "通过"
      },
      {
        name: "学习开发微信小程序",
        date: "08/24 - 09/10",
        location: "Chengdu",
        status: "未通过"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
