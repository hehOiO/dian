import fetch from '@/tools/fetch'
//获取回复信息
export function get_replay_list() {
  return fetch({
    url: '/json/post/replay.json',
    method: 'get',
  })
}
