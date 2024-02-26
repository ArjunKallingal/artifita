import React, { useEffect, useState } from "react";
import Header from "../comonents/Header";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { getCartData, removeCartData } from "../utils/api/product";

const Cart = () => {
  const Navigate = useNavigate();
  const [cart, setCart] = useState();

  const getData = async () => {
    const user = localStorage.getItem("userData");
    const res = await getCartData(user);
    console.log(res, "Res");
    setCart(res.cart);
  };

  const shoppingBtn = (e) => {
    Navigate("/home");
  };

  const removeCartItem = async (productId) => {
    const userid = localStorage.getItem("userData");
    const res = await removeCartData(userid, productId);
    if (res.status) {
      await getData()
      alert("Removed succesfully");
    } else {
      alert("Something went wrong, Please try again later");
    }
  };

  useEffect(() => {

    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="container cart-body">
        <div>
          {cart?.length === 0 ? (
            <>
              <h1>Your cart is empty</h1>
              <img
                className="cart-img"
                src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png"
                alt=""
              />
              <Button variant="outline-secondary" onClick={shoppingBtn}>
                Continue Shopping
              </Button>
            </>
          ) : (
            <>
              {cart?.map((item, index) => {
                return (
                  <>
                    <div className="cart-items">
                      <div className="cart-items-2">
                        <div className="row">
                          <div className="col-6">
                            <img
                              className="c-p-image"
                              src={item?.product?.imgUrl}
                              alt="Loading..."
                            />
                          </div>
                          <div className="col-6 c-p-n">
                            <b>{item?.product?.name}</b>
                            <p>{item?.product?.price} RS</p>
                         
                          <Button variant="warning w-25" onClick={()=>Navigate('/buy-now')}>
                            buy now
                          </Button> 
                          <Button variant="warning w-25 ms-2" 
                           onClick={() => removeCartItem(item?.product?._id)}>
                           Remove
                          </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
        <br />
      </div>
    </div>
  );
};

export default Cart;