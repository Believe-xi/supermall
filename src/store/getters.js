export default {
  Cartlength(state) {
    return state.cartList.length;
  },
  cartList(context) {
    return context.cartList
  }
}