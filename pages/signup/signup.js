// pages/signup/signup.js
var app = getApp()

Page({
  formSubmit: function(e) {
    let page = this;

    wx.showLoading({
      title: '加载中',
    })

    let formData = e.detail.value;

    console.log(formData);

    wx.request({
      url: app.globalData.baseUrl + 'api/v1/events/' + page.data.event_id + '/actions/apply',
      method: 'post',
      data: formData,
      header: {
        'X-User-Token': wx.getStorageSync('token'),
      },
      success: function (res) {
        wx.hideLoading()
        console.log('applied!');

        wx.switchTab({
          url: '../user/user',
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    event_id: null,
    name: null,
    email: null,
    phone_number: null,
    age: null,
    university: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(options);
    this.setData({
      event_id: options.id
    })
  },

  
})