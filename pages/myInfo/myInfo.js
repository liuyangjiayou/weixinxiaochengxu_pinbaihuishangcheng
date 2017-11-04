Page({

  /**
   * 页面的初始数据
   */
  data: {
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
})