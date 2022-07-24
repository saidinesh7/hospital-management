import React from 'react'
import { useNavigate } from 'react-router-dom';

function Hello() {
   let nav=useNavigate();
   
    const logout=()=>{
        localStorage.clear();
        nav('../');
    }

  return (
    <div>Hello

        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Hello