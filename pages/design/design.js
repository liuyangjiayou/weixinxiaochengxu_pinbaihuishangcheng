Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: getApp().globalData.isShow,
    token : '',
    transmit: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getStorage({
      key: 'tokens',
      success: function (res) {
        if (res.data.token) {
          that.setData({
            isShow: !that.data.isShow,
            token: res.data.token,
          })
          wx.request({
            url: 'https://designer.pinhui100.com/api/app/mood/showlist',
            method: 'POST',
            data: {
              method: 2,
              page_no: 1,
              page_size: 5,
            },
            header: {
              "Authorization": "Bearer " + that.data.token,
              "Content-Type": "application/x-www-form-urlencoded"
            },
            dataType: 'json',
            success: function (res) {
              console.log(res.data)
              if(res.data.errno == 0){
                  
              }else{
                console.log(res.data.data.msg)
              }
            }
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
    
  }
})