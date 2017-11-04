Page({

  /**
   * 页面的初始数据
   */
  data: {
    setPassword: '',
    setPhone: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  // 获取客户的手机号码
  setPassword(e) {
    this.setData({
      setPassword: e.detail.value
    })
  },
  // 获取客户的新密码
  setPhone(e) {
    this.setData({
      setPhone: e.detail.value
    })
  },
  setPasswordEnd(){
    if (this.data.setPhone && this.data.setPassword){
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/user/findpassword/reset',
        data: {
          phone: this.data.setPhone,
          password: this.data.setPassword,
        },
        method: 'POST',
        dataType: 'json',
        success: function (res) { 
          wx.showToast({
            title : res.data.message
          })
          setTimeout(function(){
            wx.switchTab({
              url : '../myInfo/myInfo'
            })
          },1000)
        },
      })
    }else{
      wx.showModal({
        content: '电话或密码不能为空',
      })
    }
    
  }
})