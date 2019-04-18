import {
  HOME_CASUAL,
  HOME_Nav,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_SHOP_LIST,
  SAVE_USER_INFO
} from "./mutation-types";

export default {
  [HOME_CASUAL](state,{ homecasual }) {
    state.homeCasual = homecasual;
  },
  [HOME_Nav](state,{ homenav }) {
    state.homeNav = homenav;
  },
  [HOME_SHOP_LIST](state,{homeshoplist}) {
    state.homeShopList = homeshoplist
  },
  [RECOMMEND_SHOP_LIST](state,{recommendshoplist}) {
    state.recommendShopList.push(...recommendshoplist);
  },
  [SEARCH_SHOP_LIST](state,{searchshoplist}) {
    state.searchShopList = searchshoplist;
  },
  [SAVE_USER_INFO](state, {userinfo}) {
    state.userInfo = userinfo;
  }
}