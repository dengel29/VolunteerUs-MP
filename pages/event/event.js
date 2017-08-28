// pages/event/event.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    event: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = this;

    wx.request({
      url: app.globalData.baseUrl + 'api/v1/events/' + options.id,
      method: 'get',
      header: {
        'X-User-Token': wx.getStorageSync('token'),
      },
      success: function (res) {
        console.log('got event data!');
        console.log(wx.getStorageSync('token'));

        console.log(res.data)
        page.setData({
          event: res.data
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