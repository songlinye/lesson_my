// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
      map: null,
      index: 0,
      menu_type:0,
      func1: [
        {
          id: 1,
          url: "/image/011.jpg",
          name: "打车"
        },
        {
          id: 2,
          url: "/image/012.jpg",
          name: "代驾"
        },
        {
          id: 3,
          url: "/image/013.jpg",
          name: "青桔骑行"
        },
        {
          id: 4,
          url: "/image/014.jpg",
          name: "顺风车"
        },
        {
          id: 5,
          url: "/image/015.jpg",
          name: "优惠加油"
        },
        {
          id: 6,
          url: "/image/021.jpg",
          name: "特价拼车"
        },
        {
          id: 7,
          url: "/image/022.jpg",
          name: "远途拼车"
        },
        {
          id: 8,
          url: "/image/023.jpg",
          name: "天天神券"
        },
        {
          id: 9,
          url: "/image/024.jpg",
          name: "借钱"
        },
        {
          id: 10,
          url: "/image/025.jpg",
          name: "省钱套餐"
        },
        
      ],
      func2: [
        {
          id: 11,
          url: "/image/111.jpg",
          name: "搬家"
        },
        {
          id: 12,
          url: "/image/112.jpg",
          name: "专车"
        },
        {
          id: 13,
          url: "/image/113.jpg",
          name: "核酸检测"
        },
        {
          id: 14,
          url: "/image/114.jpg",
          name: "消赚现金"
        },
        {
          id: 15,
          url: "/image/115.jpg",
          name: "公交"
        },
        {
          id: 16,
          url: "/image/121.jpg",
          name: "走路赚钱"
        },
        {
          id: 17,
          url: "/image/122.jpg",
          name: "天天有赚"
        },
        {
          id: 18,
          url: "/image/123.jpg",
          name: "守护候鸟"
        },
        {
          id: 19,
          url: "/image/124.jpg",
          name: "养券大师"
        },
        {
          id: 20,
          url: "/image/125.jpg",
          name: "充值中心"
        },
        {
          id: 21,
          url: "/image/131.jpg",
          name: "滴滴果园"
        },
        {
          id: 22,
          url: "/image/132.jpg",
          name: "小桔充电"
        },
        {
          id: 23,
          url: "/image/133.jpg",
          name: "助老打车"
        },
        {
          id: 24,
          url: "/image/134.jpg",
          name: "车品商城"
        },
        {
          id: 25,
          url: "/image/135.jpg",
          name: "保险"
        },
        {
          id: 26,
          url: "/image/141.jpg",
          name: "严选车品"
        },
        {
          id: 27,
          url: "/image/142.jpg",
          name: "路况查询"
        }
        
      ],
      rows: [
        { id: 1,
          welfares:[
            {
              ids: 1,
              title: "8元打车红包",
              sub_title: "快车/出租车可用",
              url: "/image/welfare0.jpg",
              qiang: "点我抢>"
            },
            {
              ids: 2,
              title: "天天抢神券",
              sub_title: "打车最高减15元",
              url: "/image/welfare0.jpg",
              qiang: "点我抢>"
            },
            {
              ids: 3,
              title: "10元立减券",
              sub_title: "抢打车神券",
              url: "/image/welfare0.jpg",
              qiang: "点我抢>"
            },
          ]
        },
        { id: 2,
          welfares:[
            {
              ids: 4,
              title: "省15元打车费",
              sub_title: "赢福利金抵车费",
              url: "/image/welfare0.jpg",
              qiang: "点我抢>"
            },
            {
              ids: 5,
              title: "成为滴滴司机",
              sub_title: "享30元加油券包",
              url: "/image/welfare0.jpg",
              qiang: "立即加入>"
            },
            {
              ids: 6,
              title: "闯关领红包",
              sub_title: "领30元红包",
              url: "/image/welfare0.jpg",
              qiang: "立即领取>"
            },
          ]
        },
      ],
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

  // 滑动事件
  change(event) {      // 函数定义用冒号
    // console.log(event)
    let current = event.detail.current;
    this.setData({
      menu_type: current
    })
  },

  onShow() {
    this.data.map = wx.createMapContext('myMap');
  },

  onLoad() {
    wx.showLoading({
      title: '加载中...',
    })
    wx.getLocation({
      type:'gcj02',
      success:(res) => {
       // if (res.statusCode === 200) {    //  getLocation 没有状态码
        wx.hideLoading();
        let { latitude, longitude} = res;
        //console.log(latitude,longitude)
        this.setData({
          longitude: longitude,
          latitude: latitude
        })
     // }
      }
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
