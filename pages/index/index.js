
const app = getApp()
Page({
  data: {
    urlHeader: 'https://pinbaihui2017.oss-cn-beijing.aliyuncs.com/',
    navList : '',
    commodityList : '',
    pages : 1,
    _isShow : false,
    num : 0
  },
  onLoad: function () {
    var that = this;
    // 获取首页导航列表
    wx.request({
      url: 'https://designer.pinhui100.com/api/app/index/categories',
      method : 'GET',
      dataType : 'json',
      success : (res)=>{
        this.setData({
          navList : res.data
        })
      }
    }),
    // 获取首页分页列表
    wx.request({
      url: 'https://designer.pinhui100.com/api/app/index/getgoods',
      method : 'GET',
      dataType : 'json',
      data : {
        id: 458,
        page : that.data.pages
      },
      success : function(res){
        that.setData({
          commodityList : res.data
        })
      }
    })
  },
  // 首页的下来刷新的时间函数；
  onReachBottom : function(){
    var that = this;
    if(this.data.num == 0){
      that.setData({
        page : 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        data: {
          id: '458',
          page: that.data.pages += 1
        },
        method: 'GET',
        dataType: 'json',
        success: function (res) {
          that.setData({
            commodityList: [...that.data.commodityList, ...res.data]
          })
        },
      })
    } else if (this.data.num == 1){
      that.setData({
        page: 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        data: {
          id: '459',
          page: that.data.pages += 1
        },
        method: 'GET',
        dataType: 'json',
        success: function (res) {
          that.setData({
            commodityList: [...that.data.commodityList, ...res.data]
          })
        },
      })
    } else if (this.data.num == 2){
      that.setData({
        page: 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        data: {
          id: '462',
          page: that.data.pages += 1
        },
        method: 'GET',
        dataType: 'json',
        success: function (res) {
          that.setData({
            commodityList: [...that.data.commodityList, ...res.data]
          })
        },
      })
    } else if (this.data.num == 3){
      that.setData({
        page: 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        data: {
          id: '461',
          page: that.data.pages += 1
        },
        method: 'GET',
        dataType: 'json',
        success: function (res) {
          that.setData({
            commodityList: [...that.data.commodityList, ...res.data]
          })
        },
      })
    } else if (this.data.num == 4){
      that.setData({
        page: 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        data: {
          id: '465',
          page: that.data.pages += 1
        },
        method: 'GET',
        dataType: 'json',
        success: function (res) {
          that.setData({
            commodityList: [...that.data.commodityList, ...res.data]
          })
        },
      })
    } else if (this.data.num == 5){
      that.setData({
        page: 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        data: {
          id: '473',
          page: that.data.pages += 1
        },
        method: 'GET',
        dataType: 'json',
        success: function (res) {
          that.setData({
            commodityList: [...that.data.commodityList, ...res.data]
          })
        },
      })
    } else if (this.data.num == 6){
      that.setData({
        page: 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        data: {
          id: '474',
          page: that.data.pages += 1
        },
        method: 'GET',
        dataType: 'json',
        success: function (res) {
          that.setData({
            commodityList: [...that.data.commodityList, ...res.data]
          })
        },
      })
    } else if (this.data.num == 7){
      that.setData({
        page: 1
      })
      wx: wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        data: {
          id: '475',
          page: that.data.pages += 1
        },
        method: 'GET',
        dataType: 'json',
        success: function (res) {
          that.setData({
            commodityList: [...that.data.commodityList, ...res.data]
          })
        },
      })
    }
  },
  // 跳转到每日推界面
  goToEveryDay(){
    wx.navigateTo({
      url: '../everyday/everyday',
    })
  },
  // 跳转到惠生活
  goToHuiShengHuo(){
    wx.navigateTo({
      url: '../huishenghuo/huishenghuo',
    })
  },
  // 实现分类的列表展示
  changClass(e){
    var that = this;
    if (e.currentTarget.id == 0){
      that.setData({
        num: e.currentTarget.id
      });
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        method: 'GET',
        dataType: 'json',
        data: {
          id: 458,
          page: that.data.pages
        },
        success: function (res) {
          that.setData({
            commodityList: res.data
          })
        }
      })
    } else if (e.currentTarget.id == 1){
      that.setData({
        num: e.currentTarget.id
      });
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        method: 'GET',
        dataType: 'json',
        data: {
          id: 459,
          page: that.data.pages
        },
        success: function (res) {
          that.setData({
            commodityList: res.data
          })
        }
      })
    } else if (e.currentTarget.id == 2){
      that.setData({
        num: e.currentTarget.id
      });
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        method: 'GET',
        dataType: 'json',
        data: {
          id: 462,
          page: that.data.pages
        },
        success: function (res) {
          that.setData({
            commodityList: res.data
          })
        }
      })
    } else if (e.currentTarget.id == 3){
      that.setData({
        num: e.currentTarget.id
      });
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        method: 'GET',
        dataType: 'json',
        data: {
          id: 461,
          page: that.data.pages
        },
        success: function (res) {
          that.setData({
            commodityList: res.data
          })
        }
      })
    } else if (e.currentTarget.id == 4) {
      that.setData({
        num: e.currentTarget.id
      });
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        method: 'GET',
        dataType: 'json',
        data: {
          id: 465,
          page: that.data.pages
        },
        success: function (res) {
          that.setData({
            commodityList: res.data
          })
        }
      })
    } else if (e.currentTarget.id == 5) {
      that.setData({
        num: e.currentTarget.id
      });
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        method: 'GET',
        dataType: 'json',
        data: {
          id: 473,
          page: that.data.pages
        },
        success: function (res) {
          that.setData({
            commodityList: res.data
          })
        }
      })
    } else if (e.currentTarget.id == 6) {
      that.setData({
        num: e.currentTarget.id
      });
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        method: 'GET',
        dataType: 'json',
        data: {
          id: 474,
          page: that.data.pages
        },
        success: function (res) {
          that.setData({
            commodityList: res.data
          })
        }
      })
    } else if (e.currentTarget.id == 7) {
      that.setData({
        num: e.currentTarget.id
      });
      wx.request({
        url: 'https://designer.pinhui100.com/api/app/index/getgoods',
        method: 'GET',
        dataType: 'json',
        data: {
          id: 475,
          page: that.data.pages
        },
        success: function (res) {
          that.setData({
            commodityList: res.data
          })
        }
      })
    } 
  }
})
