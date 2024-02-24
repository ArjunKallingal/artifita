import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Items from '../Products/Items';
import { v4 as uuidv4 } from 'uuid'

const Addcategory = () => {

    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const obj = {};


    const handleAdd = (e) => {
        let ids = uuidv4()
        let uniqueid = ids.slice(1, 2)

        if (!category) {
            if (!category) {
                obj.category = 'Please fill this field'
            }
            setError(obj);
        } else {
            Items.push(
                {
                    id: uniqueid,
                    category: category,
                }
            )
            navigate('/home')
        }
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
        setError({
            ...error,
            category: ''
        })
    }

    return (
        <div>
            <Form className='border mt-5 pt-5 container' style={{ paddingLeft: '100px', paddingRight: '100px' }} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: 'bold' }}>Add Category</Form.Label>
                    <Form.Control type="text" onChange={handleCategory} required />
                </Form.Group>
                <div style={{ display: 'flex', justifyContent: 'end', padding: '25px' }}>
                    <Button
                        className='me-3'
                        onClick={handleAdd}
                        variant="warning" type="submit">
                        Add
                    </Button>
                    <Button
                        onClick={() => navigate('/home')}
                        variant="warning" type="submit">
                        Discard
                    </Button>
                </div>
            </Form >
        </div>
    )
}

export default Addcategory