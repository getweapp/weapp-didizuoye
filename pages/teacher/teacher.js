import api from '../../utils/api'

Page({
  data:{
    teacherId: '',
    avatar: '',
    name: '',
    comment: ''
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail)
  },
  formReset() {
    console.log('form发生了reset事件')
  },
  order() {
    wx.redirectTo({
      url: '../order/order?teacherId='+this.data.teacherId
    })
  },
  onLoad(options) {
    console.log(options)
    this.setData({
      teacherId: options.id
    })
    api.get('vendor/didizuoye/teacher', {id: options.id}, (data) => {
        this.setData({
          avatar: data.avatar,
          name: data.name,
          comment: data.comment
      })
  })
  }
})