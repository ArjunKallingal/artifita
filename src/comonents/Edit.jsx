import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
// import Items from '../Products/Items';
import { useState } from 'react';
import { useEffect } from 'react';

export const Edit = () => {
    const [pname, setPname] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [dec, setDec] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const obj = {};

    useEffect(()=>{
        // setPname(JSON.parse(Items.getItem()));
    },[])

    const handleEdit = (e) => {
        if (!pname || !price || !imgUrl || !dec || !category) {
            if (!pname) {
                obj.pname = 'Please fill this field'
            }
            if (!price) {
                obj.price = 'Please fill this field'
            }
            if (!imgUrl) {
                obj.imgUrl = 'Please fill this field'
            }
            if (!category) {
                obj.category = 'Please fill this field'
            }
            if (!dec) {
                obj.dec = 'Please fill this field'
            }
            setError(obj);
        } else {
            
            navigate('/home')
        }
    }

    const handlePname = (e) => {
        setPname(e.target.value)
        setError({
            ...error,
            pname: ''
        })
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
        setError({
            ...error,
            category: ''
        })
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
        setError({
            ...error,
            price: ''
        })
    }
    const handleDec = (e) => {
        setDec(e.target.value)
        setError({
            ...error,
            dec: ''
        })
    }
    const handleImgUrl = (e) => {
        setImgUrl(e.target.value)
        setError({
            ...error,
            imgUrl: ''
        })
    }
    return (
        <div>
            <Form className='border p-3 mt-5 container' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: 'bold' }}>productName</Form.Label>
                    <Form.Control type="text" onChange={handlePname} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: 'bold' }}>category</Form.Label>
                    <Form.Control type="text" onChange={handleCategory} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: 'bold' }}>price</Form.Label>
                    <Form.Control type="text" onChange={handlePrice} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: 'bold' }}>description</Form.Label>
                    <Form.Control type="text" onChange={handleDec} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: 'bold' }}>imgUrl</Form.Label>
                    <Form.Control type="text" onChange={handleImgUrl} required />
                </Form.Group>
                <Button
                    onClick={handleEdit}
                    variant="warning" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    )
}
