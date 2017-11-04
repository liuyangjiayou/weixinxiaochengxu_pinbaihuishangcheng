
const app = getApp()
Page({
  data: {
    urlHeader: 'https://pinbaihui2017.oss-cn-beijing.aliyuncs.com/',
    navList : '',
    commodityList : '',
    pages : 1,
    _isShow : false
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
    wx:wx.request({
      url: 'https://designer.pinhui100.com/api/app/index/getgoods',
      data: {
        id : '458',
        page : that.data.pages += 1
      },
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        that.setData({
          commodityList: [...that.data.commodityList,...res.data]
        })
      },
    })
  }
})
