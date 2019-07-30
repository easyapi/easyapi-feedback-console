import axios from 'axios'
import router from '../router/index'
import Cookies from 'js-cookie'

//request header 根据需求添加
// axios.defaults.baseURL = 'http://test.178lottery.com';
// axios.defaults.headers.post['encryptDisable'] = true;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  //部署注销↓-----
  // Cookies.set('authenticationToken', "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoeWZAYmFuZ3F1LmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1NjUyNjg2NzV9.S1lGzJ-W0qJBtDWN_XL8jdw4vhTBKpZnh7woZCYvt7TQrNiUMlOaAEg27lTEnlpPqVLf3NIHu4B18aFEJx3AQQ")
  //部署注销↑-----
  // let token = Cookies.get('authenticationToken')

  //全局加Token
  console.log(token)
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  } else {
    location.href = 'https://account.easyapi.com/login' // 如果没有authToken存在
  }
  return config;
}, function (error) {
  // 对请求错误做些什么

  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  console.log(response)
  // 对响应数据做点什么
  if (response.data.errorCode === 24 && response.data.errorMsg === "需要登录") {
    setTimeout(() => {
      location.href = 'https://account.easyapi.com/login'
    }, 1500)

  } else {
    return response;
  }

}, function (error) {
  console.log(error)
  // 对响应错误做点什么
  if (error.response.data.code == -9) {
    // 处理-9用户信息不存在
    window.location.href = "https://account.easyapi.com/login";
  } else if (error.response.data.code == -8) {
    // 处理-8无团队信息
    window.location.href = "https://team.easyapi.com?from=http://fapiao.easyapi.com/console/";
  } else if (error.response.data.code == -7) {
    // 处理-7认证失败
    router.push(`/unavailable`)
  } else if (error.response.data.code == -6) {
    // 处理-6服务未订购
    router.push(`/unavailable`)
  } else if (error.response.data.code == -5) {
    // 处理-5服务已过期
    router.push(`/unavailable`)
  } else if (error.response.data.code == -4) {
    // 处理-4服务使用次数不足
    router.push(`/unavailable`)
  } else if (error.response.data.code == -3) {
    this.$router.push(`/unavailable`)
    // 处理-3团队账户余额不足
  } else {
    return Promise.reject(error);
  }
});

export default axios
