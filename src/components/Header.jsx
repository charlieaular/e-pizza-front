import { useDispatch, useSelector } from 'react-redux'
import { setCategorySelected } from '../store/category'

const Header = () => {

  const dispatch = useDispatch()
  const categorySelected = useSelector((state) => state.category.categorySelected)


  const onClickCategory = e => {
    dispatch(setCategorySelected(e.target.tabIndex + 1))
  }

  return (
    <header>
      <div className='header'>

        <div className='d-flex d-inline-flex'>

          <div className='align-items-center d-flex fw-bold phones'>
            <a href="#" className='text-decoration-none mx-1 text-dark'>067 123-45-67</a>
            <a href="#" className='text-decoration-none mx-1 text-dark'>067 123-45-67</a>
          </div>
          <div className='d-flex d-inline-flex'>
            <a href="#" className='messenger' style={{ backgroundColor: "#27a6e6", backgroundImage: "url(/icons/messenger_telegram.svg)" }}></a>
            <a href="#" className='messenger' style={{ backgroundColor: "#9069ae", backgroundImage: "url(/icons/messenger_viber.svg)" }}></a>
            <a href="#" className='messenger' style={{ backgroundColor: "#00e676", backgroundImage: "url(/icons/messenger_whatsapp.svg)" }}></a>
          </div>
        </div>
      </div>
      <div className='d-flex mt-5 mx-5'>
        <img src="/images/logo.png" alt="" style={{ width: "10rem", }} />
        <div className='ms-4 my-auto'>
          <div style={{ fontSize: "2.5rem", fontWeight: "700" }}>Sr Pizza</div>
          <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>cocina italiana adaptada</div>
        </div>
        <div className='align-items-center d-flex ms-auto'>
          <span role="button" tabIndex="0" onClick={onClickCategory} className={`ms-3 ${categorySelected == 1 ? 'category-active' : ''}`}>Pizza</span>
          <span role="button" tabIndex="1" onClick={onClickCategory} className={`ms-3 ${categorySelected == 2 ? 'category-active' : ''}`}>Sandwich</span>
          <span role="button" tabIndex="2" onClick={onClickCategory} className={`ms-3 ${categorySelected == 3 ? 'category-active' : ''}`}>Drinks</span>
        </div>
      </div>
    </header>
  )
}

export default Header