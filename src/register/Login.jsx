import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { userLogin } from "../utils/api/auth";

const Login = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState();

  const submit = async (e) => {
    const obj = {};

    if (!uname || !password) {
      if (!uname) {
        obj.uname = "Please enter your name";
      }
      if (!password) {
        obj.password = "please enter password";
      }
      setError(obj);
    } else {
      const res = await userLogin(uname, password);
      if (res.status) {
        localStorage.setItem("userData", res.data._id);
        navigate("/home");
      } else alert(res.message);
    }
  };

  const handlChange = (e) => {
    setUname(e.target.value);
    setError({
      ...error,
      uname: "",
    });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError({
      ...error,
      password: "",
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
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
              onClick={() => navigate("/singup")}
            >
              Sign up
            </Button>
          </div>
          <div className="col-lg-6">
            <div className="login-border border">
              <h1 className="text-center text-warning">
                Sign in to your account
              </h1>
              <div className="text-center">
                <form action="post" className="mt-5">
                  <input
                    className="label-login container"
                    type="text"
                    value={uname}
                    placeholder="enter your name"
                    onChange={handlChange}
                  />
                  <br />
                  {error?.uname && (
                    <strong className="text-danger">
                      Please enter your name
                    </strong>
                  )}
                  <input
                    className="label-login mt-2 container"
                    type="password"
                    value={password}
                    placeholder="enter password"
                    onChange={handlePassword}
                  />
                  {error?.password && (
                    <strong className="text-danger">
                      Please enter your password
                    </strong>
                  )}
                  <br />
                  <Button className="mt-3" variant="warning" onClick={submit}>
                    Sign in
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
