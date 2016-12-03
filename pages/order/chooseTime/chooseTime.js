import event from '../../../utils/event'
import { formatTime } from '../../../utils/util'

Page({
  data: {
    date: formatTime(new Date(), 1),
    time: formatTime(new Date(), 2)
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
    event.set('orderDate', e.detail.value)
  },
  bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    })
    event.set('orderTime', e.detail.value)
  }
})
