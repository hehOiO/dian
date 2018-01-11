import fetch from '@/tools/fetch'
export function get_list() {
  return fetch({
    url: '/json/activity/new.json',
    method: 'get',
  })
}

export function get_the_sun_info() {
  return fetch({
    url: '/json/activity/theSunInfo.json',
    method: 'get',
  })
}