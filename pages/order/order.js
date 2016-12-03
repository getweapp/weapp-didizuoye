import event from '../../utils/event'
import api from '../../utils/api'
import { formatTime } from '../../utils/util'

Page({
  data:{
    teacher: {
      avatar: '../../images/teacher.png',
      name: '选择老师'
    },
    address: '定位中，请稍后...',
    date: formatTime(new Date(), 1),
    time: formatTime(new Date(), 2)
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
   bindViewSpeak: function() {
    wx.navigateTo({
      url: '../speak/speak'
    })
  },
  chooseTime() {
     wx.navigateTo({
      url: './chooseTime/chooseTime'
    })
  },
  chooseAddress() {
     wx.navigateTo({
      url: './chooseAddress/chooseAddress'
    })
  },
  chooseTeacher() {
     wx.navigateTo({
      url: '../teachers/teachers'
    })
  },
  submit() {
    wx.showModal({
  title: '提示',
  content: '恭喜你，预约成功！',
  showCancel: false,
  success: function(res) {
    if (res.confirm) {
      console.log('提交预约数据')
     wx.navigateBack(getCurrentPages())
    }
  }
})
  },
  onLoad( options ) {
    console.log(options)
    if(options.teacherId){
      api.get('vendor/didizuoye/teacher', {id: options.teacherId}, (data) => {
        this.setData({
        teacher: {
          avatar: data.avatar,
          name: data.name
        }
      })
      })
      
    }
    event.on('address', (address) => {
      this.setData({
        address: address
      })
    })
    event.on('orderDate', (date) => {
      console.log(date)
      this.setData({
        date: date
      })
    })
    event.on('orderTime', (time) => {
      console.log(time)
      this.setData({
        time: time
      })
    })
    wx.getLocation({
  type: 'wgs84',
  success: (res) => {
    api.get('engine/map/geocoder', {
      latitude: res.latitude,
      longitude: res.longitude
    }, (data)=>{
      console.log(data)
      this.setData({
        address: data.result.address
      })
    })
  }
})
  }
})