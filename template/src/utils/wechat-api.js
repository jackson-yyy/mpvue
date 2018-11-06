export function navTo(url, type, success, fail, complete) {
    switch (type) {
        case 'navigate':
            wx.navigateTo({
                url,
                success,
                fail,
                complete
            })
            break
        case 'redirect':
            wx.redirectTo({
                url,
                success,
                fail,
                complete
            })
            break
        case 'reLaunch':
            wx.reLaunch({
                url,
                success,
                fail,
                complete
            })
            break
        case 'switchTab':
            wx.switchTab({
                url,
                success,
                fail,
                complete
            })
            break
        default:
            wx.navigateTo({
                url,
                success,
                fail,
                complete
            })
    }

}

export function navBack(index) {
    wx.navigateBack({
        delta: index ? index : 1
    })
}

export function loading(title, mask, success, fail, complete) {
    wx.showLoading({
        title,
        mask: mask || false,
        success: success || null,
        fail: fail || null,
        complete: complete || null
    })
}

export function hideLoading() {
    wx.hideLoading()
}

export function hideToast() {
    wx.hideToast()
}

export function toast(title, icon, duration, success, fail, complete) {
    wx.showToast({
        title: title,
        icon: icon || 'none',
        duration: duration || 1000,
        success: success || null,
        fail: fail || null,
        complete: complete || null
    })
}

export function modal(title, content, confirm, cancel, fail, complete) {
    wx.showModal({
        title: title || '提示',
        content: content || '',
        success: res => {
            if (res.confirm) {
                confirm ? confirm() : ''
                console.log('用户点击确定')
            } else if (res.cancel) {
                cancel ? cancel() : ''
                console.log('用户点击取消')
            }
        },
        fail: fail || null,
        complete: complete || null
    })
}

export function actionSheet(itemList, itemColor, success, fail, complete) {
    wx.showActionSheet({
        itemList: itemList,
        success: function(res) {
            success ? success(res.tapIndex) : ''
        },
        fail: function(res) {
            fail ? fail() : ''
        },
        complete: function(res) {
            complete ? complete() : ''
        }
    })
}

export function chooseImage(data) {
    let {
        maxCount: count
    } = data
    return new Promise((resolve, reject) => {
        wx.chooseImage({
            count, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success(res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                //   var tempFilePaths = res.tempFilePaths
                // console.log(res.tempFilePaths)
                resolve(res.tempFilePaths)
            },
            fail(err) {
                reject(err)
            },
            complete(res) {
                // console.log(res)
            }
        })
    });

}

export function previewImage({
    current,
    urls = [current]
}) {

    wx.previewImage({
        current,
        urls
    })
}

export function uploadFile(data) {
    let {
        filePath,
        serverUrl: url
    } = data
    return new Promise((resolve, reject) => {
        wx.uploadFile({
            url: process.env.API_ROOT + '/api/File/xcxUpload',
            filePath,
            name: 'file',
            success(r) {
                let res = JSON.parse(r.data)
                if (res.msg === 'SUCCESS') {
                    return resolve(res.data.url)
                }
                reject()
            },
            fail(err) {
                console.log(err)
                reject(err)
            },
            complete(res) {
                // console.log(res)
            }
        })
    })

}

export function requestPayment(data) {
    return new Promise((resolve, reject) => {
        wx.requestPayment({
            ...data,
            'success': function(res) {
                toast('支付成功')
                resolve(res)
            },
            'fail': function(res) {
                toast('支付失败')
                reject(res)
            }
        })
    });
}

export function setClipboardData(data) {
    wx.setClipboardData({
        data: data,
        success: function(res) {
            toast('内容已复制到剪贴板')
        }
    })
}