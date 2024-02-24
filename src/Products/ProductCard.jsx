import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import items from './Items';
import './productCard.css'
import { getProducts } from '../utils/api/product';

const Productcard = () => {
const [products, setProducts] = useState([])
    useEffect(() => {
        const getData = async () => {
           const data = await getProducts();
           data.status && setProducts(data.data)
        }
        getData()
    }, [])

    return (
      <div className="row">
        {products.map((item) => (
          <div className="col-6 p-4 pcard" key={item.id}>
            <Card
              style={{
                width: "18rem",
                borderRadius: "15px",
                position: "inherit",
              }}
            >
              <div className="cardsize">
                <Card.Img
                  className="card-img p-4"
                  variant="top"
                  src={item.imgUrl}
                  alt="loading..."
                />
              </div>
              <Card.Body>
                <Card.Title>
                  <h4>{item.productName}</h4>
                  <p>Price: ${item.price}</p>
                </Card.Title>
                <Link to={"/Product-deatiles"}>
                  <Button variant="primary">check</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
}

export default Productcard