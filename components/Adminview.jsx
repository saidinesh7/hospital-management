import React from 'react'
import {Button, Nav} from 'react-bootstrap'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Adminview() {
  const [patientCount,setPatientCount]=useState();
  const [doctorCount,setDoctorCount]=useState();

  const getPatientCount=()=>{
    axios.get("http://localhost:8081/patientCount").then(res=>setPatientCount(res.data));
  }
  const getDoctorCount=()=>{
    axios.get("http://localhost:8081/getDoctorCount").then(res=>setDoctorCount(res.data));
  }

useEffect(() => {
  getPatientCount();
  getDoctorCount();
}, [])



  return (
    <div>
        <Nav style={{backgroundColor:'aquamarine',display:'flex',height:'10vh',width:'100%',justifyContent:'space-around',alignItems:'center'}}>
            <Nav.Item>
               <h1 style={{fontSize:'2.5rem'}}>HMS Hospital</h1> 
            </Nav.Item>
            <Nav.Item>
                <Button style={{backgroundColor:'orange',border:'none',color:'black',fontWeight:'bold'}}>Logout</Button>
            </Nav.Item>
        </Nav>
        <div className='menu-container' style={{display:'flex',width:'100%',height:'90vh',justifyContent:'flex-start'}}>
          <div className='sidemenu' style={{width:'30%',display:'flex',flexDirection:'column',height:'90vh',backgroundColor:'aquamarine',alignItems:'center',justifyContent:'space-around'}}>
             <h3><Link to="/AddDoctor">Add Doctor</Link></h3>
             <h3><Link to="/ViewDoctor">View Doctor</Link></h3>
             <h3><Link to="/searchDoctor">search Doctor</Link></h3>
             <h3><Link to="/AddPatient">Add Patients</Link></h3>
             <h3><Link to="/ViewPatient">view Patients</Link></h3>
             <h3><Link to="/SearchPatient">search patient</Link></h3>
          </div>
          <div className='mainwindow' style={{width:'70%',display:'flex',flexDirection:'column',alignItems:"center",justifyContent:'center',height:'90vh'}}>
            <div style={{marginBottom:"20px"}}>
            <h1>Welcome User</h1>
            <h2>Lets Get started</h2>
            </div>
            <div className='box-container' style={{display:'flex'}}>
              <div className='doctor-box' style={{backgroundColor:'gray',padding:'20px 30px',color:'white'}}><h1>Doctors</h1><h2>{doctorCount}</h2></div>
              <div className='patient-box' style={{backgroundColor:'gray',padding:'20px 30px',marginLeft:"30px",color:'white'}}><h1>Patient</h1><h2>{patientCount}</h2></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Adminview