import React from 'react'
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import axios from 'axios';
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function AddPatient() {
  const navigate=useNavigate();

  const formik = useFormik({
      initialValues:{
            patient_no:"",
            name:"",
            age:"",
            gender:"",
            address: "",
            date_of_admission:"",
            mobile_no:"",
            room_no:"",
          
      },
      validationSchema: Yup.object({
        patient_no:Yup.string().required("patinet no required"),
          name: Yup.string().required("doctor name is Required"),
          address:Yup.string().required("Address is Required"),
          mobile_no:Yup.string().required("mobile number is Required"),
          date_of_admission:Yup.string().required("date of admission is Required"),
          gender:Yup.string().required("Please Choose Gender"),
          age:Yup.string().required("age is required"),
          room_no:Yup.string().required("room number is required")
      }),
      onSubmit:(values)=>{
              axios.post("http://localhost:8081/AddPatient",values);
             console.log(values);
             toast.success("Patient Added Successfully");
      }
      
  });
       
return (
<div className='doc_container'>
    
   <form onSubmit={formik.handleSubmit}>
   <h1>Patient Information</h1>
   <div>
    <input type="text" name="patient_no" id="patient_no" placeholder='Patient Number'  onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.patient_no}/>
               {formik.touched.patient_no && formik.errors.patient_no ? (
              <div className="error">{formik.errors.patient_no}</div>
            ) : ""}
    </div>
    <div>
    <input type="text" name="name" id="name" placeholder='Patient Name'  onChange={formik.handleChange}
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
    <input type="text" id="mobile_no" name="mobile_no" placeholder='Mobile Number'  onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile_no} />
               {formik.touched.mobile_no && formik.errors.mobile_no ? (
              <div className="error">{formik.errors.mobile_no}</div>
            ) : ""}
    </div>
    <div>
    <input type="text" id="date_of_admission" name="date_of_admission" placeholder='Date of Admission (YYYY-MM-DD)'  onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date_of_admission}/>
               {formik.touched.date_of_admission && formik.errors.date_of_admission ? (
              <div className="error">{formik.errors.date_of_admission}</div>
            ) : ""}
    </div>
   
    <div>
    <input type="text" name="age" id="age" placeholder='Age'  onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}/>
               {formik.touched.age && formik.errors.age ? (
              <div className="error">{formik.errors.age}</div>
            ) : ""}
    </div>
    <div>
    <input type="text" name="room_no" id="room_no" placeholder='Room no'  onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.room_no}/>
               {formik.touched.room_no && formik.errors.room_no ? (
              <div className="error">{formik.errors.room_no}</div>
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

export default AddPatient