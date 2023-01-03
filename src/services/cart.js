import api from '../utils/api'

const cartService = {
  addProductToCart: params => api.post(`cart`, params),
  products: () => api.get(`cart/products`),
  deleteProduct: id => api.delete(`cart/products/${id}`),
  pay: params => api.post(`cart/pay`, params),
}

export { cartService }