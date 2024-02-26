import React, { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./productdeatiles.css";
import Header from "../comonents/Header";
import { useEffect } from "react";
import { addCart, getProduct } from "../utils/api/product";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});
  const [quantity, setQuantity] = useState(1);

  console.log(productData, "product data");

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddtoCard = async (id) => {
    const user = localStorage.getItem("userData");
    console.log(user);
    if (user) {
      await addCart(user, { item: id });
      alert("Product added succesfully");
    } else alert("You need to Login");
  };

  useEffect(() => {
    const getProductData = async () => {
      const data = await getProduct(id);
      setProductData(data.data);
    };
    getProductData();
  }, [id]);

  return (
    <div>
      <Header />
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              style={{height:'300px'}}
              className="product-img"
              src={productData.imgUrl}
              alt="loading..."
            />
          </div>
          <div className="col-lg-6">
            <div className="product-deatiles">
              <h2>{productData.name}</h2>
              <p>₹ {productData.price}</p>
              <p>category</p>

              <b>About</b>
              <p>{productData.des}</p>
              <b>RAM</b>
              <p>{productData.ram}</p>
              <div className="quantity mt-3 mb-3">
                <span className="quantity-label me-3">Quantity:</span>
                <button className="quantity-button" onClick={decrement}>
                  -
                </button>
                <span className="quantity-value ms-2 me-2">{quantity}</span>
                <button className="quantity-button" onClick={increment}>
                  +
                </button>
              </div>
              <Button
                variant="warning"
                onClick={() => handleAddtoCard(productData._id)}
              >
                Add To cart
              </Button>

              <Button
                variant="warning"
                className="ms-3"
                onClick={() => navigate(`/edit/${id}`)}
              >
                Edit product
              </Button>
              <Button
                className="ms-3"
                onClick={() => navigate("/buy-now")}
                variant="warning"
              >
                Buy now
              </Button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
