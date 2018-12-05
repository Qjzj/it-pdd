import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getHRecommendShopList
} from "../api";

import {
  HOME_CASUAL,
  HOME_Nav,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST
} from "./mutation-types";

export default {
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message.data})
  },
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    commit(HOME_Nav, {homenav: result.message.data})
  },
  async reqHomeShopList({commit}) {
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST,{homeshoplist: result.message.goods_list})
  },
  async reqRecommendShopList({commit}) {
    let result = await getHRecommendShopList();
    commit(RECOMMEND_SHOP_LIST,{recommendshoplist: result.message.data})
  }
}