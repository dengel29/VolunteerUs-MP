// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    events: [
      {
        id: 1,
        name: "学习开发微信小程序",
        date: "08/24 - 09/10",
        location: "Chengdu"
      },
      {
        id: 2,
        name: "学习开发微信小程序",
        date: "08/24 - 09/10",
        location: "Chengdu"
      },
      {
        id: 3,
        name: "学习开发微信小程序",
        date: "08/24 - 09/10",
        location: "Chengdu"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var selectedEvent;

    for (var index in this.data.events) {
      if (!selectedEvent) {
        var event = this.data.events[index];
        if (event.id == parseInt(options.id)) {
          selectedEvent = event;
        }
      }
    }

    this.setData({
      id: options.id,
      event: selectedEvent
    })

    // wx.request({
    //   url: 'http://localhost:3000/api/v1/events/' + options.id,
    // })
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