import util from '../../utils/util'
import api from '../../utils/api'


Page({
  data:{
    sort: 'sort',
    filters: {sort:'active'},
    teachers: [],
    height: 0
  },
  filter(e) {
    console.log(e.target.dataset)
    const filters = {
      sort: '',
      distance: '',
      praise: '',
      price: ''
    }
    filters[e.target.dataset.sort] = 'active'
    this.setData({
      filters: filters,
      teachers: []
    })
    this.update(e.target.dataset.sort)
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail)
  },
  formReset() {
    console.log('form发生了reset事件')
  },
  bindViewTeacher(e) {
    wx.navigateTo({
      url: '../teacher/teacher?id='+e.target.dataset.id
    })
  },
  update(sort) {
    api.get('vendor/didizuoye/teachers', {sort: sort}, (data) => {
    this.setData({
      teachers: this.data.teachers.concat(data)
    })
  })
  },
  loadMore() {
    this.update(this.data.sort)
  },
  onLoad(options) {
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