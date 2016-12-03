
Page({
  data: {
    width: 0,
    height: 0,
    markers: [/*{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园zz',
      desc: '我现在的位置'
    }*/],
    covers: [{
      latitude: 23.099794,
      longitude: 113.324520,
      iconPath: '../../images/teacher.png'
    }, {
      latitude: 23.099298,
      longitude: 113.324129,
      iconPath: '../../images/teacher.png'
    }]
  },
  //事件处理函数
  goParents() {
    wx.navigateTo({
      url: '../parents/parents'
    })
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../teachers/teachers'
    })
  },
  bindViewOrder() {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  onLoad() {

    console.log('onLoad')
    var that = this
    wx.getSystemInfo({
  success: function(res) {
    that.setData({
      width: res.windowWidth,
      height: res.windowHeight-55
    })
  }
})
  
  }
})
