import React from 'react'
import { useDispatch } from 'react-redux'
import { cartService } from '../services/cart'
import { getCartProducts } from '../store/cart'

const CartProduct = ({ product }) => {

  const dispatch = useDispatch()

  const deleteProduct = async () => {
    try {
      const { data } = await cartService.deleteProduct(product.ID)
      dispatch(getCartProducts())

    } catch (error) {

    }
  }

  return (
    <div className='cart-product d-flex m-3'>
      <img src={product.Image} style={{ width: "5rem", height: "5rem" }} alt="" />
      <div className='ms-2'>

        <p>{product.Name}</p>
        <p>
          ${product.Price} / {product.Weight}
        </p>
      </div>
      <div className='ms-auto remove-product' onClick={deleteProduct}>×</div>

    </div>
  )
}

export default CartProduct