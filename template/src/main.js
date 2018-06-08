{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// mpvue has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import fly from '@/config/flyio'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import filters from '@/filters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#vuex}}import store from '@/vuex/store.js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/vuex}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
App.mpType = 'app'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#vuex}}Vue.prototype.$store = store{{/vuex}}
Vue.prototype.$utils = filters
Vue.prototype.$http = fly
Vue.prototype.$loadTime = 100

Vue.prototype.$pop = (title, icon, duration, success, fail, complete) => {
  wx.showToast({
      title: title,
      icon: icon || 'none',
      duration: duration || 1000,
      success: success || null,
      fail: fail || null,
      complete: complete || null
  })
}
Vue.prototype.$modal = (title, content, success, fail, complete) => {
  wx.showModal({
      title: title || '提示',
      content: content || '',
      success: success || null,
      fail: fail || null,
      complete: complete || null
  })
}

const app = new Vue(App){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
app.$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
