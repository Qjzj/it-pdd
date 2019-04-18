import ajax from './ajax'

// const BASE_URL = 'http://127.0.0.1:3000';
const BASE_URL = '/api';

// 1 请求首页的轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + '/api/homecasual');
// 2 请求首页导航数据
export const getHomeNav = ()=>ajax(BASE_URL + '/api/homenav');
// 3 请求首页商品是数据
export const getHomeShopList = ()=>ajax(BASE_URL + '/api/homeshoplist');
// 4 请求推荐列表数据
export const getHRecommendShopList = (params)=>ajax(BASE_URL + '/api/recommendshoplist',params);
// 5 请求搜索页面数据
export const getSearchShopList = () => ajax(BASE_URL + '/api/searchlist');
// 6 发送手机验证码
export const getPhoneCode = (phone) => ajax(BASE_URL + '/api/phonecaptcha',{phone});
// 7 手机验证码登录
export const postPhoneLogin = (phone, phoneCaptcha) => ajax(BASE_URL + '/api/phonelogin', {phone,phoneCaptcha},"POST");
// 8 手机密码登录
export const postPwdLogin = (title, pwd, imgCaptcha) => ajax(BASE_URL + '/api/pwdlogin', {title, pwd, imgCaptcha},"POST");

export const getUserInfo = () => ajax(BASE_URL + '/api/getuserinfo');