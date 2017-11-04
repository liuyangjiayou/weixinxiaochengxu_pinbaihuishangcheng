Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked : true,
    phone : '',
    aothCode : '',
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
  // 获取输入的手机号
  bindKeyInput(e){
    this.setData({
      phone: e.detail.value
    });
  },
  // 发送验证码短息
  seedAuthCode(){
    wx:wx.request({
      url: 'https://designer.pinhui100.com/api/app/user/register/sendcode',
      data: {
        phone:this.data.phone
      },
      method: 'POST',
      dataType: 'json',
      success: (res)=>{
        if (res.data.status_code == 501){
          wx.showToast({
            title: res.data.message
          })
        } else if (res.data.status_code == 503){
          wx.showToast({
            title: res.data.message
          })
        } else if (res.data.status_code == 404){
          wx.showToast({
            title: res.data.message
          })
        } else if (res.data.status_code == 200){
          wx.showToast({
            title: res.data.message
          })
        }
      },
    })
  },
  // 这是获取到客户收到的验证码
  importCode(e){
    this.setData({
      aothCode: e.detail.value
    })
  },
  // 这是完成注册
  signInEnd(){
    console.log('test')
    wx:wx.request({
      url: 'https://designer.pinhui100.com/api/app/user/register/checkcode',
      data: {
        phone: this.data.phone,
        code: this.data.aothCode
      },
      method: 'POST',
      dataType: 'json',
      success: function(res) {
        if (res.data.status_code == 200){
          wx.showToast({
            title: res.data.message,
          }),
          setTimeout(function(){
            wx.switchTab({
              url: '../myInfo/myInfo'
            })
          },1000)
        }else{
          wx.showToast({
            title: res.data.message
          })
        }
      },
    })
  }
})