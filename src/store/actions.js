export default {
  addCart(context, payload) {
  return new Promise((resolve) =>{
    //1.查看之前数组中是否有该商品
    let oldProduct = context.state.cartList.find(function (item) {
      return item.iid === payload.iid
    })

    //2.判断oldproduct
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit('addCounter', oldProduct)
      resolve('添加成功，在购物车等亲~')
    } else {
      payload.count = 1
      // context.state.cartList.push(payload)
      context.commit('addToCart', payload)
      resolve('添加成功，在购物车等亲~')
    }

  })
  }
}
