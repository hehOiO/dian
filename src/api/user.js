import fetch from '@/tools/fetch'
//获取收货地址
export function get_address() {
  return fetch({
    url: '/json/user/address.json',
    method: 'get',
  })
}
//获取我的晒单信息
export function get_my_the_sun_info(){
  return fetch({
    url: '/json/user/theSunInfo.json',
    method: 'get',
  })
}
//获取我的消息
export function get_notice_list(){
  return fetch({
    url: '/json/user/notice.json',
    method: 'get',
  })
}
