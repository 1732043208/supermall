export default{
  //mutations中唯一的目的就是修改state中状态
  //mutations最主要的作用就是可以做跟踪
  //mutations中的每个方法尽可能完成的事件比较单一一点
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
