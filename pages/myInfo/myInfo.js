Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow : false,
    seedPhone: '',
    seedPassword: ''
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
  // 点击免费注册时候跳转
  goToSign() {
    wx.navigateTo({
      url: '../signIn/signIn'
    })
  },
  // 获取客户输入的电话号码
  seedPhone(e) {
    this.setData({
      seedPhone: e.detail.value,
    })
  },
  // 获取客户输入的密码
  seedPassword(e) {
    this.setData({
      seedPassword: e.detail.value,
    })
  },
  // 跳转到重置密码页
  goToSetPassword(){
    wx.navigateTo({
      url: '../setPassword/setPassword'
    })
  },
  // 登录完成并且拿到token
  loginEnd(){
    var that = this;
    if (this.data.seedPhone && this.data.seedPassword){
      wx.request({
        url: 'https://designer.pinhui100.com/api/user/login',
        data: {
          designer_phone: this.data.seedPhone,
          designer_password: this.data.seedPassword
        },
        method: 'POST',
        dataType: 'json',
        success: function (res) {
          console.log(res.data)
        },
      })
    }else{
      wx.showModal({
        content : '手机号码或者密码不能为空'
      })
    }
  },
})