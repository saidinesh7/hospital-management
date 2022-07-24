import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/signup.css'
import { Link } from 'react-router-dom'

function Signup() {
    const formik=useFormik({
        initialValues:{
            username:"",
            password1:"",
            password2:""
        },
        validationSchema:Yup.object({
            username:Yup.string().required("username is required").min(5,"username is small"),
            password1:Yup.string().required("password is required").min(8,"password is too short").max(15,"password is too long.."),
            password2:Yup.string().oneOf([Yup.ref('password1'),null],"password must match")
        }),
        onSubmit:values=>{
            
            const formData={username:values.username,password:values.password1,confirmpass:values.password2};
            localStorage.setItem("username",JSON.stringify(formData));
            console.log(JSON.stringify(formData));
            alert("account created");
        }
        
    })
  return (
    <div className='mainsignup-container'>
        <div className='signup-container'>
            
     <form onSubmit={formik.handleSubmit}>
     <h1 className='heading-signup'>SignUp</h1>
  <input type='text' 
  id="username"
   name='username'
    onChange={formik.handleChange}
     onBlur={formik.handleBlur} 
     value={formik.values.username}
      placeholder="username" />
  {formik.touched.username && formik.errors.username?<div className='error'>{formik.errors.username}</div>:null}
  <input type='password'
   id="password1" name='password1'
    onChange={formik.handleChange}
     onBlur={formik.handleBlur}
      value={formik.values.password1} 
      placeholder="password" />
  {formik.touched.password1 && formik.errors.password1?<div className='error'>{formik.errors.password1}</div>:null}
  <input type='password'
   id="password2" name='password2'
    onChange={formik.handleChange} 
    onBlur={formik.handleBlur} 
    value={formik.values.password2}
     placeholder="re-enter password" />
  {formik.touched.password2 && formik.errors.password2?<div className='error'>{formik.errors.password2}</div>:null}
  <div className='login-txt'>
   <Link to="/login">Already have an account?</Link>
  </div>
  <button type='submit'>signup</button>
     </form>
        </div>
    </div>
  )
}

export default Signup