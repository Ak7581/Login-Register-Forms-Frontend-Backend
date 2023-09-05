import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*  const form = new FormData();
    form.append("email", email);
    form.append("password", password); */

    const data = {
      email: email,
      password: password,
    };
    axios.post("http://localhost:5000/login", data).then((res) => {
      if (res.data.status === "fail") {
        alert(res.data.message);
      } else {
        console.log(res.data);
        alert(res.data.message);
        navigate("/register");
      }
    });
  };

  return (
    <div>
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <form class="login" onSubmit={handleSubmit}>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="User name / Email"
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login__input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <button class="button login__submit">
                <span class="button__text">Log In Now</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div class="social-login">
              <h3>log in via</h3>
              <div class="social-icons">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
