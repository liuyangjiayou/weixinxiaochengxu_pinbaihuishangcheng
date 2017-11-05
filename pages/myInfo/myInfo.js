Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: getApp().globalData.isShow,
    seedPhone: '',
    seedPassword: '',
    myLists : [
      { url: 'https://mhero.pinhui100.com/WebApp/img/mine_production.png', content: '我的作品'},
      { url: 'https://mhero.pinhui100.com/WebApp/img/mine_dynamic.png', content: '我的动态' },
      { url: 'https://mhero.pinhui100.com/WebApp/img/mine_account.png', content: '账户' },
      { url: 'https://mhero.pinhui100.com/WebApp/img/mine_real.png', content: '实名认证' },
      { url: 'https://mhero.pinhui100.com/WebApp/img/mine_quit.png', content: '退出登录' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'tokens',
      success: function(res) {
        if(res.data.token){
          that.setData({
            isShow : !that.data.isShow
          })
        }
      },
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
        url: 'https://designer.pinhui100.com/api/app/user/normal/login',
        data: {
          username: that.data.seedPhone,
          password: that.data.seedPassword
        },
        method: 'POST',
        dataType: 'json',
        success: function (res) {
          if (res.data.status_code == 404){
            wx.showModal({
              content: res.data.message
            })
          } else if (res.data.status_code == 401){
            wx.showModal({
              content: res.data.message
            })
          } else if (res.data.status_code == 500){
            wx.showModal({
              content: res.data.message
            })
          } else{
            // 将后台传来的登录后的token储存在本地
            wx.setStorage({
              key: 'tokens',
              data: res.data,
              success : function(){
                wx.showModal({
                  content: '登陆成功',
                })
                that.setData({
                  isShow: !that.data.isShow
                })
              }
            })
          }
        },
      })
    }else{
      wx.showModal({
        content : '手机号码或者密码不能为空'
      })
    }
  },
  // 这是当客户点击退出的时候我们需要将本地的tokens的值清除
  listEvent(e){
    if (e.currentTarget.id == 4){
      try {
        wx.clearStorageSync()
        this.setData({
          isShow : false,
          seedPhone: '',
          seedPassword: '',
        })
      } catch (e) {
        console.log('你好清除数据失败，错误信息 ：' + e)
      }
    }
  },
})