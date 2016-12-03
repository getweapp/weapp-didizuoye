const get = (cmd, params, callback) => {
   wx.showToast({
  title: '加载中...',
  icon: 'loading',
  duration: 2000
})
    wx.request({
        url: 'https://api.getweapp.com/'+cmd,
        data: params,
        success: (res) => {
            wx.hideToast()
            callback(res.data)
        }
    })
}

export default {
    get: get
}