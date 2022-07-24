
import '../styles/adddoc.css'
import { useFormik } from "formik";
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import axios from 'axios';
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function AddDoctor() {
    const navigate=useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            address: "",
            phone_number:"",
            qualification:"",
            gender:""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("doctor name is Required"),
            address:Yup.string().required("Address is Required"),
            phone_number:Yup.string().required("mobile number is Required"),
            qualification:Yup.string().required("Qualification is Required"),
            gender:Yup.string().required("Please Choose Gender")
        }),
        onSubmit:(values)=>{
                axios.post("http://localhost:8081/addDoctor",values);
               console.log(values);
               toast.success("Doctor has added");
        }
        
    });
  return (
    <div className='doc_container'>
        
       <form onSubmit={formik.handleSubmit}>
       <h1>Doctor Information</h1>
        <div>
        <input type="text" name="name" id="name" placeholder='Doctor Name'  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}/>
                   {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : ""}
        </div>
        <div>
        <input type="text" name="address" id="address" placeholder='Address'  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}/>
                   {formik.touched.address && formik.errors.address ? (
                  <div className="error">{formik.errors.address}</div>
                ) : ""}
        </div>
        <div>
        <input type="text" id="phone_number" name="phone_number" placeholder='Mobile Number'  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone_number} />
                   {formik.touched.phone_number && formik.errors.phone_number ? (
                  <div className="error">{formik.errors.phone_number}</div>
                ) : ""}
        </div>
        <div>
        <input type="text" id="qualification" name="qualification" placeholder='Qualification'  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.qualification}/>
                   {formik.touched.qualification && formik.errors.qualification ? (
                  <div className="error">{formik.errors.qualification}</div>
                ) : ""}
        </div>
        <div>
        <select name="gender" id="gender" onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender || ""}>
            <option value="none">Choose the Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
        </select>
        {formik.touched.gender && formik.errors.gender ? (
                  <div className="error">{formik.errors.gender}</div>
                ) : ""}
        </div>
        <input type="submit" value="submit"/>
       </form>
    </div>
  )
}

export default AddDoctor