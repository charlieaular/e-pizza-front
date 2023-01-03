import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cartService } from '../../services/cart'
import { getCartProducts } from '../../store/cart'

export const Product = ({ product }) => {
  
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const onClickProduct = () => {
    navigate(`/products/${product.ID}`)
  }

  
  const onClickAdd = async e => {
    e.stopPropagation()


    try {
      const params = {
        product_id: product.ID
      }
      const { data } = await cartService.addProductToCart(params)
      dispatch(getCartProducts())

    } catch (error) {
      
    }

  }

  return (
    <div className="product" onClick={onClickProduct}>
        <img src={product.Image} width="450px" alt="" />
        <p>{product.Name}</p>
        <p>
          <span>${product.Price} / {product.Weight}</span>
        </p>
        <div className='add-to-cart' onClick={onClickAdd} />
      </div>
  )
}
