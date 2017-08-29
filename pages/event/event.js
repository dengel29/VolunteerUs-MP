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
    this.setData({
      event_id: options.id
    })
    this.loadData();
    
  },

  loadData: function(){
    wx.showLoading({
      title: '加载中',
    })
    let page = this;

    wx.request({
      url: app.globalData.baseUrl + 'api/v1/events/' + page.data.event_id,
      method: 'get',
      header: {
        'X-User-Token': wx.getStorageSync('token'),
      },

      success: function (res) {
        wx.hideLoading()

        event = res.data;

        let status_in_chinese = null;

        if (event.status == 'pending') {
          status_in_chinese = "正在审核中";
        } else if (event.status == 'declined') {
          status_in_chinese = "很抱歉 审核没有通过，看看其他的活动！";
        } else if (event.status == 'accepted') {
          status_in_chinese = "审核成功！主办方会联系您！";
        } else {
          status_in_chinese = 'panic! illegal status!'
        };

        page.setData({
          event: event,
          event_owner: event.id == wx.getStorageSync('currentUserId'),
          applied: event.status,
          status_in_chinese: status_in_chinese
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