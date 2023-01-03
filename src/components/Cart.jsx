import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartService } from '../services/cart'
import { getCartProducts } from '../store/cart'
import CartProduct from './CartProduct'

const Cart = () => {

  const cartProducts = useSelector((state) => state.cart.cartProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartProducts())

  }, [])

  const onClickPay = async () => {
    try {
      const { data } = await cartService.pay()
      dispatch(getCartProducts())

    } catch (error) {

    }

  }

  if (!cartProducts.length) {
    return <></>
  }

  return (
    <div>
      <h3>Your order</h3>
      {cartProducts.map(product => (<CartProduct key={product.ID} product={product} />))}
      <button className='btn btn-outline-success' onClick={onClickPay} >
        Checkout
      </button>
    </div>
  )
}

export default Cart