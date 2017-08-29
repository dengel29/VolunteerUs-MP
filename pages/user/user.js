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
      url: ''
    })
  },
  onLoad: function () {
    console.log('onLoad')
    this.loadData();

  },

  onPullDownRefresh: function () {
    this.loadData();
  },

  loadData: function() {
    let page = this;

    wx.showLoading({
      title: '加载中',
    })

    app.getUserInfo(function (userInfo) {
      page.setData({
        userInfo: userInfo
      })
    });

    wx.request({
      url: app.globalData.baseUrl + 'api/v1/user/events',
      method: 'get',
      header: {
        'X-User-Token': wx.getStorageSync('token'),
      },
      success: function (res) {
        wx.hideLoading()
        console.log(wx.getStorageSync('token'));

        console.log(res.data)
        page.setData({
          events: res.data
        })
      }
    })
  }
})
