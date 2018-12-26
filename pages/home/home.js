var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  getLocation:function(){
    var that=this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        that.setData({
          latitude,
          longitude
        });
        console.log(that.data)
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data:{
    latitude:'',
    longitude:'',
    locationString:'11'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //初始化获取精度和纬度坐标
  onLoad: function (options) {
    var that = this;
    //promise执行异步函数
    function getLoac(){
      return new Promise(function(resolve,reject){
        wx.getLocation({
          type: 'wgs84',
          success(res) {
            resolve(res)
          }
        });
      })
    }
    function changePot(){ 
      return new Promise(function(resolve,reject){
        //将精度和维度转化为地址坐标
        var demo = new QQMapWX({
          key: '2NFBZ-A57WP-3JGDC-L3ZUL-TLMCJ-HNF7N' // 必填
        });
        demo.reverseGeocoder({
          location: {
            latitude: that.data.latitude,
            longitude: that.data.longitude
          },
          success: function (res) {
            console.log(res.result.address);
            that.setData.locationString = res.result.address;
            console.log(that.setData.locationString)
            resolve(res);
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
    }).then((res)=>{
      console.log('then'+res);
    })
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