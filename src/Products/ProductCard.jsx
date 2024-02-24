import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import items from './Items';
import './productCard.css'

const Productcard = () => {

    return (
         <div className="row">

            {items.map(item => (
                <div className='col-6 p-4 pcard' key={item.id}>
                    <Card style={{ width: '18rem', borderRadius: '15px', position: 'inherit' }}>
                        <div className="cardsize">
                            <Card.Img className='card-img p-4' variant="top" src={item.imgUrl} alt='loading...' />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <h4>{item.productName}</h4>
                                <p>Price: ${item.price}</p>
                            </Card.Title>
                            <Link to={'/Product-deatiles'}>
                                <Button variant="primary"
                                >check</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default Productcard