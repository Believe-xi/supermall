import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'
export default {
  addCart(context, playload) {
    return new Promise((resolve, reject) => {
      let product = context.state.cartList.find((item) => item.iid == playload.iid)
      if (product) {
        context.commit(ADD_COUNTER, product)
        resolve('购物车商品数量+1')
      } else {
        playload.count = 1
        context.commit(ADD_TO_CART, playload)
        resolve('添加到购物车')

      }
    })
  }
}