//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: function(res) {
        if (res.code) {
          wx.request({
            success: function (res) {
              try {
                console.log(res.data)
                wx.setStorageSync('token', res.data.authentication_token)
                wx.setStorageSync('currentUserId', res.data.id)
              } catch (e) {
                console.log("didnt set storge")
              }
            },
            url: 'https://volunteer-us-forresty.herokuapp.com/api/v1/users',
            method: "post",
            data: {
              code: res.code,
            }
          })    
        } else {
          console.log('error' + res.errMsg)
        }
      }
    })
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
