import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import '../styles/ViewDoc.css'

function ViewPatient() {
    const [data,setData]=useState([]);


    const loadData=()=>{
       axios.get("http://localhost:8081/getpatients").then((res)=>{setData(res.data)})
    }
    useEffect(()=>
     loadData()
      ,[]);
   
    
   
     return (
       <div id="table-container">
           <table>
               <thead>
               <tr>
                   <th>Patient ID</th>
                   <th>Patient Name</th>
                   <th>Age</th>
                   <th>Gender</th>
                   <th>Address</th>
                   <th>Admission Date</th>
                   <th>Mobile No.</th>
                   <th>Room No.</th>
               </tr>
               </thead>
               <tbody>           {
               data.map((d,i)=>{
                   return(
               <tr key={i}>
                   <td>{d.patient_no}</td>
                   <td>{d.name}</td>
                   <td>{d.age}</td>
                   <td>{d.gender}</td>
                   <td>{d.address}</td>
                   <td>{d.date_of_admission}</td>
                   <td>{d.mobile_no}</td>
                   <td>{d.room_no}</td>
               </tr>
               )})
                   
               }
             </tbody> 
           </table>
       
       </div>
     )
}

export default ViewPatient