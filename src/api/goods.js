import fetch from '@/tools/fetch'
export function get_list() {
  return fetch({
    url: '/json/goods/all.json',
    method: 'get',
  })
}
//获取推荐数据
export function get_recommend_list(){
  return fetch({
    url: '/json/goods/recommend.json',
    method: 'get',
  })	
}
//获取购物车数据
export function get_shop_car_list(){
  return fetch({
    url: '/json/goods/shopCar.json',
    method: 'get',
  })	
}
//获取商品详细数据
export function fetch_goods_data(){
  return fetch({
    url: '/json/goods/detail.json',
    method: 'get',
  })  
}
//获取秒开专区商品数据
export function get_fast_goods_data(){
  return fetch({
    url: '/json/goods/fastData.json',
    method: 'get',
  })  
}