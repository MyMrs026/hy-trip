import hyRequst from '../request'

export function getCityAll() {
  return hyRequst.get({
    url: "/city/all"
  })
}