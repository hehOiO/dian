import fetch from '@/tools/fetch'
//获取回复信息
export function get_type_list() {
  return fetch({
    url: '/json/type/list.json',
    method: 'get',
  })
}
