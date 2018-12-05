import {
  HOME_CASUAL,
  HOME_Nav,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST
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
    state.recommendShopList = recommendshoplist;
  }
}