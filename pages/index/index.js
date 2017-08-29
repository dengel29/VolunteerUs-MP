// pages/index/index.js
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
},
  loadData: function () {
    let page = this;

    wx.request({
      url: app.globalData.baseUrl + 'api/v1/events/featured',
      method: 'get',
      header: {
        'X-User-Token': wx.getStorageSync('token'),
      },
      success: function (res) {
        console.log(wx.getStorageSync('token'));
        console.log('featured events')
        console.log(res.data)
        page.setData({
          featuredEvents: res.data
        })
      }
    })

    wx.request({
      url: app.globalData.baseUrl + 'api/v1/events',
      method: 'get',
      header: {
        'X-User-Token': wx.getStorageSync('token'),
      },
      success: function(res) {
        console.log(wx.getStorageSync('token'));
        console.log('all events')
        console.log(res.data)
        page.setData({
          events: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.loadData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})