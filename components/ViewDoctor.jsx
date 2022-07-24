import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import '../styles/ViewDoc.css'


function ViewDoctor() {
 const [data,setData]=useState([]);


 const loadData=()=>{
    axios.get("http://localhost:8081/getAllDoctors").then((res)=>{setData(res.data)})
 }
 useEffect(()=>
  loadData()
   ,[]);

 

  return (
    <div id="table-container">
        <table>
            <thead>
            <tr>
                <th>Doctor Name</th>
                <th>Address</th>
                <th>Mobile Number</th>
                <th>Qualification</th>
                <th>Gender</th>
            </tr>
            </thead>
            <tbody>           {
            data.map((d,i)=>{
                return(
            <tr key={i}>
                <td>{d.name}</td>
                <td>{d.address}</td>
                <td>{d.phone_number}</td>
                <td>{d.qualification}</td>
                <td>{d.gender}</td>
            </tr>
            )})
                
            }
          </tbody> 
        </table>
    
    </div>
  )
}

export default ViewDoctor