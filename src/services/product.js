import api from '../utils/api'

const productService = {
  getProductByCategory: category => api.get(`products/category/${category}`),
  getProductDetail: idProduct => api.get(`products/${idProduct}`),
}

export { productService }