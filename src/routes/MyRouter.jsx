import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import products from './products'

const MyRouter = () => {
  return (
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/products" />} />

          {products}

          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
  )
}

export default MyRouter