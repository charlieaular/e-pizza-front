import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productService } from '../services/product'

const ProductDetail = () => {
  const params = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProductDetail()
  }, [])
  

  const getProductDetail = async () => {
    try {
      const { data } = await productService.getProductDetail(params.id)
      setProduct(data.product)
      console.log({data});
    } catch (error) {
      
    }
  }
  

  return (
    <div className='d-flex d-flex-inline' style={{ margin: "6rem" }}>
      <img src={product.Image} alt={product.Name} style={{ width: "30%" }} />
      <div>
        <h1>{product.Name}</h1>
        <h3>
          <span>${product.Price} / {product.Weight}</span>
        </h3>
        <h3>{product.Description}</h3>
      </div>
    </div>
  )
}

export default ProductDetail