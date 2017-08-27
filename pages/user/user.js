//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    events: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    let page = this;
    wx.request({
      url: 'https://volunteer-us.shanghaiwogeng.com/api/v1/user/events',
      method: 'get',
      header: {
        'X-User-Token': wx.getStorageSync('token'),
      },
      success: function (res) {
        console.log(wx.getStorageSync('token'));

        console.log(res.data)
        page.setData({
          events: res.data
        })
      }
    })
  },
})
