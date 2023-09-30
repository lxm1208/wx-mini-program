import { request } from "../utils/request"

export function listNav() {
  return request({
    url: "/nav/get",
    method: "POST"
  })
}

export function listNews(data) {
  return request({
    url: '/news/get',
    method: "POST",
    data
  })
}

export function listDetail(data) {
  return request({
    url: '/news/detail',
    method: "POST",
    data
  })
}

export function listProduct(data) {
  return request({
    url: '/product/getlist',
    method: "POST",
    data
  })
}

export function listProDetail(data) {
  return request({
    url: '/product/detail',
    method: "POST",
    data
  })
}

export function queryProduct(data){
  return request({
    url:'/product/getlist',
    method:"POST",
    data
  })
}