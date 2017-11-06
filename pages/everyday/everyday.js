Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlHeader: 'https://pinbaihui2017.oss-cn-beijing.aliyuncs.com/',
    commodityList: "",
    page: 1,
    navList: [
      { name: '精选' },
      { name: '卫浴用品' },
      { name: '生活家居' },
      { name: '软装配饰' },
    ],
    num : 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.request({
      url: 'https://designer.pinhui100.com/api/app/dailypush/bestgoodslist',
      data: {
        page: this.data.page
      },
      method: 'POST',
      dataType: 'json',
      success: (res) => {
        this.setData({
          commodityList: res.data.data
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

  },
  
  // 根据不同导航列表显示不同的内容
  onReachBottom: function() {
    var that = this;
    if(this.data.num == 0){
      this.setData({
        pages : 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/dailypush/bestgoodslist',
        data: {
          page: that.data.pages += 1
        },
        method: 'POST',
        dataType: 'json',
        success: function (res) {

          that.setData({
            commodityList: [...that.data.commodityList, ...res.data.data]
          })
        },
      })
    } else if (this.data.num == 1){
      this.setData({
        pages: 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/dailypush/categorygoodslist',
        data: {
          cat_id: 459,
          page: that.data.pages += 1
        },
        method: 'POST',
        dataType: 'json',
        success: function (res) {
          that.setData({
            commodityList: [...that.data.commodityList, ...res.data.data]
          })
        },
      })
    } else if (this.data.num == 2){
      this.setData({
        pages: 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/dailypush/categorygoodslist',
        data: {
          cat_id: 461,
          page: that.data.pages += 1
        },
        method: 'POST',
        dataType: 'json',
        success: function (res) {
          that.setData({
            commodityList: [...that.data.commodityList, ...res.data.data]
          })
        },
      })
    } else if (this.data.num == 3){
      this.setData({
        pages: 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/dailypush/categorygoodslist',
        data: {
          cat_id: 475,
          page: that.data.pages += 1
        },
        method: 'POST',
        dataType: 'json',
        success: function (res) {
          that.setData({
            commodityList: [...that.data.commodityList, ...res.data.data]
          })
        },
      })
    }
    
  },
  // 点击导航选项显示切换类名，并且展示不同给的商品
  changClass(e) {
    console.log(e)
    if (e.currentTarget.id == 0){
      this.setData({
        num: e.currentTarget.id
      })
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/dailypush/bestgoodslist',
        data: {
          page: this.data.page
        },
        method: 'POST',
        dataType: 'json',
        success: (res) => {
          this.setData({
            commodityList: res.data.data
          })
        }
      });
    } else if (e.currentTarget.id == 1){
      this.setData({
        num: e.currentTarget.id
      })
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/dailypush/categorygoodslist',
        data: {
          cat_id: 459,
          page: this.data.page
        },
        method: 'POST',
        dataType: 'json',
        success: (res) => {
          this.setData({
            commodityList: res.data.data
          })
        }
      })
    } else if (e.currentTarget.id == 2){
      this.setData({
        num: e.currentTarget.id
      })
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/dailypush/categorygoodslist',
        data: {
          cat_id: 461,
          page: this.data.page
        },
        method: 'POST',
        dataType: 'json',
        success: (res) => {
          this.setData({
            commodityList: res.data.data
          })
        }
      })
    } else if (e.currentTarget.id == 3){
      this.setData({
        num: e.currentTarget.id
      })
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/dailypush/categorygoodslist',
        data: {
          cat_id: 475,
          page: this.data.page
        },
        method: 'POST',
        dataType: 'json',
        success: (res) => {
          this.setData({
            commodityList: res.data.data
          })
        }
      })
    }
  },
})