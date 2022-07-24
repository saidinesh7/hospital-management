import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

function SearchPatient() {
    const [message,setMessage]=useState("");
const [inputData,setInputData]=useState([]);
    const loadData=()=>{
        axios.get("http://localhost:8081/getpatients/"+message).then(res=>{setInputData(res.data);console.log(res.data);});
    }
    const loadData2=()=>{
        axios.get("http://localhost:8081/getpatients/").then(res=>{setInputData(res.data);console.log(res.data);});
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
        <input type="text" placeholder='Search For Patient' onChange={handleChange}
        value={message} />
        <input type="button" onClick={finalLoad} value="search"/>
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
            <tbody>
                {
                    inputData.map((d,i)=>{
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

export default SearchPatient