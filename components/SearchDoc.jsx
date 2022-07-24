import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
//import { useEffect } from 'react';

function SearchDoc() {
const [message,setMessage]=useState("");
const [inputData,setInputData]=useState([]);
    const loadData=()=>{
        axios.get("http://localhost:8081/getDoctor/"+message).then(res=>{setInputData(res.data);console.log(res.data);});
    }
    const loadData2=()=>{
        axios.get("http://localhost:8081/getAllDoctors/").then(res=>{setInputData(res.data);console.log(res.data);});
    }
  const handleChange=(e)=>{
       setMessage(e.target.value);
  }
  useEffect(()=>loadData2(),[]);
  const finalLoad=()=>{
  if(message===""){
  loadData2();
  }
  else{
   loadData();
  }
}

  return (
    <div>
        <input type="text" placeholder='Search For Doctor' onChange={handleChange}
        value={message} />
        <input type="button" onClick={finalLoad} value="search"/>
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
            <tbody>
                {
                    inputData.map((data,i)=>{
                        return(
                        <tr key={i}>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.phone_number}</td>
                <td>{data.qualification}</td>
                <td>{data.gender}</td>
                        </tr>
                    )})
                }
            </tbody>
        </table>
    </div>
  )
}

export default SearchDoc