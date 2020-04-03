import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
//
// let totalNums = []
//
// const nums1 =[20,11,222]
// const nums2 =[111,22,333]
//
// // for(let n of nums1){
// //   totalNums.push(n)
// // }
//
// totalNums.push(...nums1)
// totalNums.push(...nums2)
