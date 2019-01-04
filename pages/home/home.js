var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  waimai(){
    wx.navigateTo({
      url: '/pages/diancan/diancan',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getLocation:function(){
    this.choAddr();
  },
  choAddr:function(){
    var that = this;
    //promise执行异步函数
    function getLoac() {
      return new Promise(function (resolve, reject) {
        wx.getLocation({
          type: 'wgs84',//gps坐标
          success(res) {
            resolve(res)
          }
        });
      })
    }
    function changePot() {
      return new Promise(function (resolve, reject) {
        //将精度和维度转化为地址坐标
        var demo = new QQMapWX({
          key: '2NFBZ-A57WP-3JGDC-L3ZUL-TLMCJ-HNF7N' // 必填
        });
        demo.reverseGeocoder({
          location: {
            latitude: that.data.latitude,
            longitude: that.data.longitude
          },
          coord_type: 1,//1为gps坐标
          success: function (res) {
            that.setData({
              locationString: res.result.formatted_addresses.recommend
            })
            // resolve(res);
          },
          fail: function (res) {
            //console.log(res);
          },
          complete: function (res) {
            //console.log(res);
          }
        });
      })
    }

    getLoac()
      .then((res) => {//promise函数异步调用
        const latitude = res.latitude
        const longitude = res.longitude
        that.setData({
          latitude,
          longitude
        });
        changePot();
        // return changePot(); //后面继续加then，需要return出去。否则不需要
      })
    // .then((res)=>{
    //   console.log(res);
    // })
  },
  /**
   * 页面的初始数据
   */
  data:{
    latitude:'',
    longitude:'',
    locationString:'',
    imgUrls: [
      '../../img/banner/banner1.png',
      '../../img/banner/banner2.png',
      '../../img/banner/banner3.png'
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //初始化获取精度和纬度坐标
  onLoad: function (options) {
    this.choAddr();
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