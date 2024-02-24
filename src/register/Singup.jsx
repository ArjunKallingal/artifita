import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { userRegister } from "../utils/api/auth";

const Singup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState();
  const obj = {};

  const btnClick = async (e) => {
    if (!name || !email || !password) {
      if (!name) {
        obj.name = "please enter your name";
      }
      if (!email) {
        obj.email = "please enter your email";
      }
      if (!password) {
        obj.password = "please enter your password";
      }
      setError(obj);
    } else {
      if (name && password) {
        const result = await userRegister(name, password, email);
        if (result.status) navigate("/");
        else alert(result.messaage);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="login-border border">
              <h2 className="text-center text-warning">Create Accound</h2>
              <div className="text-center">
                <form action="post" className="mt-5">
                  <input
                    className="label-login container"
                    type="text"
                    placeholder="enter your name"
                    onChange={(e) => (
                      setName(e.target.value), setError({ ...error, name: "" })
                    )}
                    value={name}
                  />
                  <br />
                  {error?.name && (
                    <strong className="text-danger">
                      Please enter your name
                    </strong>
                  )}
                  <input
                    className="label-login container mt-3"
                    type="text"
                    placeholder="enter your email"
                    value={email}
                    onChange={(e) => (
                      setEmail(e.target.value),
                      setError({ ...error, email: "" })
                    )}
                  />
                  <br />
                  {error?.email && (
                    <strong className="text-danger">
                      Please enter your e-mail
                    </strong>
                  )}
                  <input
                    className="label-login mt-3 container"
                    type="password"
                    onChange={(e) => (
                      setPassword(e.target.value),
                      setError({ ...error, password: "" })
                    )}
                    value={password}
                    placeholder="enter password"
                  />
                  <br />
                  {error?.password && (
                    <strong className="text-danger">
                      Please enter your password
                    </strong>
                  )}
                  <br />
                  <Button className="mt-3" onClick={btnClick} variant="warning">
                    Sign up
                  </Button>
                </form>
                <p>Forgot Accound ?</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 login-row1">
            <h1>Wellcome Back</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              ullam corrupti ipsam. Quae culpa consectetur delectus repudiandae
              omnis quia voluptas aliquam similique fugiat. Consectetur ullam
              itaque facilis velit id ea?
            </p>
            <Button
              className="mt-3"
              variant="outline-light"
              onClick={() => navigate("/")}
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
