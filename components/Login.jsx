import React from 'react'
import { useFormik } from "formik";
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import '../styles/login.css'
function Login() {
   let navigator=useNavigate();

    const formik = useFormik({
        initialValues: {
          username: "",
          password: ""
        },
        validationSchema: Yup.object({
          username: Yup.string().required("User Name is Required"),
          password: Yup.string().required("Password is Required").min(8, "Password is too short !")
            .max(12, "Password should not max 12 character"),
        }),
        onSubmit:values=>{
           let user=JSON.parse(localStorage.getItem('username'));
                if(values.username===user.username && values.password===user.password){
                alert("u have logged in");
                navigator("../Hello");
              }
              else{
                alert("user not found!!!");
              }
        }
      });
  return (
    <div className='loginmain-container'>
<div className='login-container'>

            
            <form onSubmit={formik.handleSubmit}>
              <div>
              <h1 className="heading-login">Login</h1>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder='username'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="error">{formik.errors.username}</div>
                ) : ""}
              </div>
              <div>
                
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : ""}
              </div>
              <div className="signup-text">
                <Link to='/signup'>Are you new user? Signup{" "}</Link>
              </div>
              <button id="loginButton" type="submit">
                Login
              </button>
            </form>
</div>
</div>
  )
}

export default Login