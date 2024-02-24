import React from 'react'
import Header from '../comonents/Header'
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import './cart.css'

const Cart = () => {

    const Navigate = useNavigate();

    const shoppingBtn = (e) => {
        Navigate('/home')
    }

    return (
        <div>
            <Header />
            <div className="container cart-body">
                <h1>Your cart is empty</h1>
                <img className='cart-img' src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png" alt="" /><br />
                <Button variant="outline-secondary" onClick={shoppingBtn}>Continue Shopping</Button>
            </div>

   
        </div>
    )
}

export default Cart