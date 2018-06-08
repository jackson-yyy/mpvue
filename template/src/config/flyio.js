let Fly = require("flyio/dist/npm/wx")
let fly = new Fly

const IS_DEV = process.env.NODE_ENV !== 'production'
const API_ROOT = IS_DEV ? '' : ''

fly.config = {
    baseURL: API_ROOT,
    timeout: '6000'
}

//添加请求拦截器
fly.interceptors.request.use((request) => {
    //给所有请求添加自定义header
    try {
        let token = wx.getStorageSync('token')
        if (token) {
            request.headers["Authorization"] = token
        }
    } catch (e) {
        // Do something when catch error
    }
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    function(response) {
        //只将请求结果的data字段返回
        return response.data
    },
    function(err) {
        return Promise.reject(err)
    }
)

export default fly