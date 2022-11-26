// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    latitude: 39.908860,
    longitude: 116.397390,
    markers:[],
   // markers:[
   //   {
    //    id: 1,
    //    iconPath:"/images/map-bicycle.png",
   //     "callout": {
   //       content:"有车",
   //       display:'ALWAYS'
   //     },
    //    latitude: 28.68100,
    //    longitude: 115.9618
    //  },
   //   {
   //     id: 2,
    //    iconPath:"/images/map-bicycle.png",
    //    "callout": {
    //      content:"有车",
     //     display:'ALWAYS'
   //     },
    //    latitude: 28.68300,
   //     longitude: 115.9618
   //   }
  //  ],
    map: null
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toReset() {
    this.data.map.moveToLocation();
  },
  // 生命周期
  onShow() {
    // 资源都加载完了， 显示在我们面前
    // map 可见
    this.data.map = wx.createMapContext('myMap');
  },  //  onLoad  在  onShow  前面
  onLoad() {
   wx.showLoading({
     title:'加载中...'
   })
   wx.getLocation({
     type:'gcj02',
     // 箭头函数  可以不用写 function
     success: (res) => {
       wx.hideLoading()
      // console.log(res,'////')
      // es6 的解构  数据 json
      // es6 提供的一种漂亮的语法       数据  一部分  解析出来  并成为我们的局部变量
      let { latitude, longitude} = res;  //json   相当于下面两行
       //  let latitude = res.latitude;
       //  let longitude = res.longitude;
       this.setData({
         latitude: latitude,
         longitude: longitude
       })
       this.tocreate(res);
     }
   })
  },
  // 附近的车
  tocreate(res) {
    let ran = Math.ceil(Math.random()*20 + 5);
    console.log(ran);
    let markers = [];
    for (let i = 0; i < ran; i++) {
      let obj = {
        id: i,
        iconPath: '/images/map-bicycle.png',
        callout: {},
        latitude: this.data.latitude + Math.random() /1000,
        longitude: this.data.longitude + Math.random() /1000,
        width: 52,
        height: 30
      } 
      markers.push(obj)
    }
    this.setData({
      markers: markers
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
