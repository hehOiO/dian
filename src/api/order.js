import fetch from '@/tools/fetch'
export function get_myorder_list() {
  return fetch({
    url: '/json/order/myorder.json',
    method: 'get',
  })
}
