import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'
export default {
  [ADD_COUNTER](state, playload) {
    playload.count++;
  },
  [ADD_TO_CART](state, playload) {
    playload.checked = true
    state.cartList.push(playload)
  }
}