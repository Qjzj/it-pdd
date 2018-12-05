import ajax from './ajax'

const BASE_URL = 'http://127.0.0.1:3000';


// 1 请求首页的轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + '/api/homecasual');
// 2 请求首页导航数据
export const getHomeNav = ()=>ajax(BASE_URL + '/api/homenav');
// 3 请求首页商品是数据
export const getHomeShopList = ()=>ajax(BASE_URL + '/api/homeshoplist');
//  3 请求推荐列表数据
export const getHRecommendShopList = ()=>ajax(BASE_URL + '/api/recommendshoplist');