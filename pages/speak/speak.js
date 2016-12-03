Page({
  data:{
    wave: 'wave',
    tips: '点击开始录音'
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail)
  },
  formReset() {
    console.log('form发生了reset事件')
  },
  speak() {
      if(this.data.wave == 'wave'){
          this.setData({
              wave: 'wave ripple',
              tips: '点击结束'
          })
      }else{
        this.setData({
          wave: 'wave',
          tips: '点击开始录音'
        })
      }
  }
})