// // pages/home/home.js
// var bmap = require('../../libs/bmap-wx.min.js');
// var wxMarkerData = []; 
// Page({
//   // getLocation:function(){
//   //   console.log(this.data.rgcData)
//   //   wx.getLocation({
//   //     type: 'wgs84',
//   //     success(res) {
//   //       const latitude = res.latitude
//   //       const longitude = res.longitude
//   //       const speed = res.speed
//   //       const accuracy = res.accuracy
//   //     }
      
//   //   })
//   // },
//   /**
//    * 页面的初始数据
//    */
//   data: {
//     markers: [],
//     latitude: '',
//     longitude: '',
//     rgcData: {} 
//   },
//   makertap: function (e) {
//     var that = this;
//     var id = e.markerId;
//     console.log('wxMarkerData:'+wxMarkerData)
//     that.showSearchInfo(wxMarkerData, id);
//   }, 
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     var that = this;
//     // 新建百度地图对象 
//     var BMap = new bmap.BMapWX({
//       ak: 'rfmzTP2Ic4aBIMGqSUsleaaNDLkBGxDz'
//     });
//     var fail = function (data) {
//       console.log(data)
//     };
//     var success = function (data) {
//       wxMarkerData = data.wxMarkerData;
//       that.setData({
//         markers: wxMarkerData
//       });
//       that.setData({
//         latitude: wxMarkerData[0].latitude
//       });
//       that.setData({
//         longitude: wxMarkerData[0].longitude
//       });
//     }
//     // 发起regeocoding检索请求 
//     BMap.regeocoding({
//       fail: fail,
//       success: success,
//       iconPath: '../../img/marker_red.png',
//       iconTapPath: '../../img/marker_red.png'
//     }); 
//   },
//   showSearchInfo: function (data, i) {
//     console.log('showSearchInfo')
//     var that = this;
//     that.setData({
//       rgcData: {
//         address: '地址：' + data[i].address + '\n',
//         desc: '描述：' + data[i].desc + '\n',
//         business: '商圈：' + data[i].business
//       }
//     });
//   } ,
//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })

// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    rgcData: {}
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'rfmzTP2Ic4aBIMGqSUsleaaNDLkBGxDz'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    // 发起regeocoding检索请求 
    BMap.regeocoding({
      fail: fail,
      success: success,
      iconPath: '../../img/marker_red.png',
      iconTapPath: '../../img/marker_red.png'
    });
  },
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      rgcData: {
        address: '地址：' + data[i].address + '\n',
        desc: '描述：' + data[i].desc + '\n',
        business: '商圈：' + data[i].business
      }
    });
  }

})