import React, { useState } from "react";
import "./Register.css";
import axios from "axios"
import { useNavigate} from "react-router-dom";

const Register = () => {
  const  navigate = useNavigate()

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [image, setImage] = useState([]);
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  
  // (async()=>{
  //   const data = await fetch("http://localhost:5000")
  // const datas = await data.json()
  // console.log(datas)
  // })();
  const register = ()=>{
    const  user = { fname , lname , email,password,country,gender  }
    if(fname && lname && email && password && country && gender){

    axios.post("http://localhost:5000/register",user)
     .then(res =>  {
      if (res.data.status === "fail"){
        alert(res.data.message)

      }else{
        console.log(res.data)
        alert(res.data.message)
        navigate("/")
      }
      
     })

    }else{
      alert("invalid input")
    }
  }

  const updateImage = (e) => {
    const files = Array.from(e.target.files);
    setImage(files);
  };

  // Handling the password change

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("fname", fname);
    form.append("lname", lname);
    form.append("email", email);
    form.append("password", password);
    form.append("image", image[0]);
    form.append("country", country);
    form.append("gender", gender);

    axios.post("http://localhost:5000/register",form)
    .then(res =>  {
     if (res.data.status === "fail"){
       alert(res.data.message)
     }else{
       console.log(res.data)
       alert(res.data.message)
       navigate("/")
     }
     
    }).catch(err=>console.log(err))


/*     setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    setRepassword("");
    setCountry("");
    setImage([]);
    setGender(""); */
  };

  

  return (
    <div>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Responsive Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Re-type Password"
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                    required
                  />
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="fname"
                        placeholder="First Name"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="input_field radio_option">
                  <input
                    type="radio"
                    value="male"
                    id="rd1"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="rd1"> Male</label>
                  <input
                    type="radio"
                    value="female"
                    id="rd2"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="rd2">Female</label>
                </div>
                <div className="input_field select_option">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option>Select a country</option>
                    <option>india</option>
                    <option>usa</option>
                  </select>
                  <div className="select_arrow"></div>
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="file"
                    name="file"
                    onChange={updateImage}
                    required
                  />
                </div>
                <div className="input_field checkbox_option">
                  <input type="checkbox" id="cb1" required />
                  <label htmlFor="cb1">I agree with terms and conditions</label>
                </div>
                <div className="input_field checkbox_option">
                  <input type="checkbox" id="cb2" />
                  <label htmlFor="cb2">I want to receive the newsletter</label>
                </div>

                {/* <input className="button"   onClick={register} type="submit" value="Register" /> */}
                <input className="button"   onClick={handleSubmit} type="submit" value="Register" />

                
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="credit">
        Developed by
        <a href="http://www.designtheway.com" target="_blank">
          Design the way
        </a>
      </p>
    </div>
  );
}

export default Register;


  