import axios from 'axios'
import Vue from 'vue'
import router from '@/router'
import { Toast } from 'mint-ui';
// 创建axios实例
const service = axios.create({
  baseURL: '', // api的base_url
  timeout: 15000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    config.headers['X-Token'] ='XXX123456' // 让每个请求携带自定义token 请根据实际情况自行修改
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
	/**
	* code为非20000是抛错 可结合自己业务进行修改
	*/
    const res = response.data
    if (res.code !== 200) {
		Toast({
		  message: res.msg,
		  iconClass: 'icon icon-error',
		});
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
	Toast({
	  message: '网络异常',
	  iconClass: 'icon icon-error'
	});
    return Promise.reject(error)
  }
)

export default service