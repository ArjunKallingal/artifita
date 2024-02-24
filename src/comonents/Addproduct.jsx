import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Items from "../Products/Items";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../utils/api/product";

const AddItems = () => {
  const [pname, setPname] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [ram, setRam] = useState("");
  const [dec, setDec] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const obj = {};

  const handleAdd = async (e) => {
    if (!pname || !price || !imgUrl || !dec || !ram) {
      if (!pname) {
        obj.pname = "Please fill this field";
      }
      if (!price) {
        obj.price = "Please fill this field";
      }
      if (!imgUrl) {
        obj.imgUrl = "Please fill this field";
      }
      if (!ram) {
        obj.ram = "Please fill this field";
      }
      if (!dec) {
        obj.dec = "Please fill this field";
      }
      setError(obj);
    } else {
      const res = await addProduct({
        name: pname,
        price: price,
        ram: imgUrl,
        des: ram,
        imgUrl: dec,
      });
      if (res.status) navigate("/home");
      else alert(res.message);
    }
  };

  const handlePname = (e) => {
    setPname(e.target.value);
    setError({
      ...error,
      pname: "",
    });
  };
  const handleRam = (e) => {
    setRam(e.target.value);
    setError({
      ...error,
      ram: "",
    });
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
    setError({
      ...error,
      price: "",
    });
  };
  const handleDec = (e) => {
    setDec(e.target.value);
    setError({
      ...error,
      dec: "",
    });
  };
  const handleImgUrl = (e) => {
    setImgUrl(e.target.value);
    setError({
      ...error,
      imgUrl: "",
    });
  };

  return (
    <div>
      <Form
        className="border mt-5 pt-5 container"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold" }}>productName</Form.Label>
          <Form.Control type="text" onChange={handlePname} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold" }}>price</Form.Label>
          <Form.Control type="text" onChange={handlePrice} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold" }}>RAM </Form.Label>
          <Form.Control type="text" onChange={handleRam} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold" }}>description</Form.Label>
          <Form.Control type="text" onChange={handleDec} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold" }}>imgUrl</Form.Label>
          <Form.Control type="text" onChange={handleImgUrl} required />
        </Form.Group>
        <div
          style={{ display: "flex", justifyContent: "end", padding: "25px" }}
        >
          <Button
            className="me-3"
            onClick={handleAdd}
            variant="warning"
            type="submit"
          >
            Add
          </Button>
          <Button
            onClick={() => navigate("/home")}
            variant="warning"
            type="submit"
          >
            Discard
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddItems;
