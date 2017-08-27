// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // events: [
    //   {
    //     id: 1,
    //     title: "学习开发微信小程序",
    //     date: "08/24 - 09/10",
    //     location: "Chengdu"
    //   },
    //   {
    //     id: 2,
    //     title: "学习开发微信小程序",
    //     date: "08/24 - 09/10",
    //     location: "Chengdu"
    //   },
    //   {
    //     id: 3,
    //     title: "学习开发微信小程序",
    //     date: "08/24 - 09/10",
    //     location: "Chengdu"
    //   }
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let page = this;
    wx.request({
      url: 'https://volunteer-us.shanghaiwogeng.com/api/v1/events',
      method: 'get',
      header: {
        'X-User-Token': wx.getStorageSync('token'),
      },
      success: function(res) {
        console.log(wx.getStorageSync('token'));

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