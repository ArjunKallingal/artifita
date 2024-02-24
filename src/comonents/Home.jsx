import React from 'react'
import Header from './Header'
import ProductList from '../Products/ProductList'
import './home.css'
import{ useNavigate }from 'react-router-dom'

const Home = () => {

  const navigate= useNavigate();

  return (
    <div>
        <Header/>
        <div className="home-add">
            <button className="category" onClick={()=>navigate('/add-category')}>Add category</button>
            <button className="category">Add sub category</button>
            <button className="category" onClick={()=>navigate('/add-products')}>Add product</button>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-3 product-type">
            <div className="fixed-product-type">
              <strong>category</strong><br />
              <div className='product-options'>
                <input className='home-products' type="checkbox" /> Connection <br />
                <input className='home-products' type="checkbox" /> Mobiles <br />
                <input className='home-products' type="checkbox" /> Accessorys <br />
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-sm-3 product-images">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home