import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getHRecommendShopList,
  getSearchShopList,
  getUserInfo
} from "../api";

import {
  HOME_CASUAL,
  HOME_Nav,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_SHOP_LIST,
  SAVE_USER_INFO
} from "./mutation-types";

export default {
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message})
  },
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    commit(HOME_Nav, {homenav: result.message})
  },
  async reqHomeShopList({commit}) {
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST,{homeshoplist: result.message})
  },
  async reqRecommendShopList({commit},params) {
    let result = await getHRecommendShopList(params);
    commit(RECOMMEND_SHOP_LIST,{recommendshoplist: result.message})
    params.callback && params.callback();
  },
  async reqSearchShopList({commit}) {
    let result = await getSearchShopList();
    commit(SEARCH_SHOP_LIST,{searchshoplist: result.message})
  },
  syncSaveUserInfo({commit}, userinfo) {
    commit(SAVE_USER_INFO,{userinfo})
  },
  async asyncSaveUserInfo({commit}) {
    let result = await getUserInfo();
    console.log(result);
    if(result.success_code === 200) {
      commit(SAVE_USER_INFO,{userinfo: result.user_info})
    }
  }

}