import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './productdeatiles.css'
import Header from '../comonents/Header';

function Product() {

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
      setQuantity(quantity + 1);
    };
  
    const decrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    return (
        <div>
            <Header />
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img className='product-img' src='' alt="loading..." />
                    </div>
                    <div className="col-lg-6">

                        <div className='product-deatiles'>

                            <h2>productName</h2>
                            <p>₹ price</p>
                            <p>category</p>

                            <b>About</b>
                            <p>shortDesc</p>
                            <b>RAM</b>
                            <p>4gb 8gb 16gb</p>
                            <div className="quantity mt-3 mb-3">
                                <span className="quantity-label me-3">Quantity:</span>
                                <button className="quantity-button" onClick={decrement}>-</button>
                                <span className="quantity-value ms-2 me-2">{quantity}</span>
                                <button className="quantity-button" onClick={increment}>+</button>
                            </div>

                            <Button variant="warning" onClick={() => navigate('/edit')}>Edit product</Button>
                            <Button className='ms-3' onClick={() => navigate('/buy-now')} variant="warning">Buy now</Button><br /><br />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product