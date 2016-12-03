import api from '../../../utils/api'
import event from '../../../utils/event'

Page({
  data: {
    addresses:[]
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  choose(e) {
    event.set('address', e.target.dataset.address)
    wx.navigateBack()
  },
  onLoad() {
    wx.getLocation({
  type: 'wgs84',
  success: (res) => {
    api.get('engine/map/geocoder', {
      latitude: res.latitude,
      longitude: res.longitude
    }, (data)=>{
      console.log(data)
      this.setData({
        addresses: data.result.pois
      })
    })
  }
})
    
  }
})
