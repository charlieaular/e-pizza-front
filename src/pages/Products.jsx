import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { productService } from "../services/product"
import { Product } from "./components/Product"

const Products = () => {

  const categorySelected = useSelector((state) => state.category.categorySelected)
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductByCategory()
  
  }, [categorySelected])

  const getProductByCategory = async () => {
    try {
      const { data } = await productService.getProductByCategory(categorySelected)
      setProducts(data.products)
    } catch (error) {
      
    }
  }

  return (
    <div className="products">
      { products.map(product => (<Product key={product.ID} product={product} />)) }
    </div>
  )
}

export default Products