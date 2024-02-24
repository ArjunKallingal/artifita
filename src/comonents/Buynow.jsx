import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './buynow.css'
import { useNavigate } from 'react-router-dom';


const Buynow = () => {
  const navigate = useNavigate();
  const [uname, setUname] = useState();
  const [cnum, setCnum] = useState();
  const [address, setAddress] = useState();
  const [error, setError] = useState();
  const [selectPayment, setSelectPayment] = useState();
  const obj = {};

  const placeOrder = () => {
    if (!uname || !cnum || !address || !selectPayment) {
      if (!uname) {
        obj.uname = 'please fill the fields'
      }
      if (!cnum) {
        obj.cnum = 'please fill the fields'
      }
      if (!address) {
        obj.address = 'please fill the fields'
      }
      if (!selectPayment) {
        obj.selectPayment = 'please fill the fields'
      }
      setError(obj);
    }
    else {
      alert('your order confimed');
      navigate('/home')
    }
  }

  const handleUname = (e) => {
    setUname(e.target.value)
    setError({
      ...error,
      uname: ''
    })
  }

  const handleCnum = (e) => {
    setCnum(e.target.value)
    setError({
      ...error,
      cnum: ""
    })
  }

  const handleAddress = (e) => {
    setAddress(e.target.value)
    setError({
      ...error,
      address: ''
    })
  }

  const handleSelectPayment = (e) => {
    setSelectPayment(e.target.value)
    setError({
      ...error,
      selectPayment: ''
    })
  }

  return (
    <div className='container space-bn'>
      <div className="container buynow">
        <div className="buynow-border">
          <h1 className='text-center p-3'>Payment</h1>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder='Enter name'
              value={uname} onChange={handleUname}
            />
            <label htmlFor="floatingInputCustom">Enter name</label>
          </Form.Floating>

          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder='Contact number'
              value={cnum} onChange={handleCnum}
            />
            <label htmlFor="floatingInputCustom">Contact number</label>
          </Form.Floating>

          <FloatingLabel controlId="floatingTextarea2" label="Enter delivery address">
            <Form.Control
              as="textarea"
              placeholder="Enter delivery address"
              style={{ height: '100px' }}
              value={address} onChange={handleAddress}
            />
          </FloatingLabel>

          <FloatingLabel className='mt-3'
            controlId="floatingSelect"
            label="Payment option"
            value={selectPayment}
            onChange={handleSelectPayment}>
            <Form.Select aria-label="Floating label select example">
              <option>Select payment option</option>
              <option value="1">view upi</option>
              <option value="2">csh on delivey</option>
              <option value="3">Net banking</option>
            </Form.Select>
          </FloatingLabel>

          {(error?.uname || error?.cnum || error?.address || error?.selectPayment) && <div className='border mt-4 p-4'>
            <p>Please fill all the fields for confirm your address</p>
          </div>}

          <button onClick={placeOrder} className='placeOrder-btn'>Place Order</button>

        </div>
      </div>
    </div>
  )
}

export default Buynow
