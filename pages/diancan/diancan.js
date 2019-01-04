// pages/diancan/diancan.js
Page({
  //点击不同的菜品，请求的结果
  check($event){
    this.setData({
      num:$event.target.dataset.id
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../img/banner/banner1.png',
      '../../img/banner/banner2.png',
      '../../img/banner/banner3.png'
    ],
    menu:[
      { id: 1,food:"锁鲜装【大盒】"},
      { id: 2, food: "锁鲜装【小盒】" },
      { id: 3, food: "饮品" },
      { id: 4, food: "真空小包装" },
      { id: 5, food: "风味酱" },
      { id: 6, food: "卫龙" },
      { id: 7, food: "锁鲜装【大盒】" },
      { id: 8, food: "锁鲜装【小盒】" },
      { id: 9, food: "饮品" },
      { id: 10, food: "真空小包装" },
      { id: 11, food: "风味酱" },
      { id: 12, food: "卫龙" }
    ],
    num:1
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

  }
})