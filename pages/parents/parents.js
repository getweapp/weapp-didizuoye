import api from '../../utils/api'

Page({
  data:{
    // text:"这是一个页面"
    moments: [],
    height: 0
  },
  update() {
    api.get('vendor/didizuoye/parents', {}, (data) => {
    this.setData({
      moments: this.data.moments.concat(data)
    })
  })
  },
  loadMore(e) {
   this.update()
  },
  onLoad(options) {
    // 页面初始化 options为页面跳转所带来的参数
     wx.getSystemInfo({
  success: (res) => {
    this.setData({
      height: res.windowHeight
    })
  }
})

  this.update()

  }
})