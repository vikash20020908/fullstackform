import React, { useState } from 'react'
import './App.css'

function App() {
   
  const [form ,setForm] = useState ({})
  const handleForm = (e) => {
//     console.log(e.target.value, e.target.name);
     setForm({
      ...form,
      [e.target.name] : e.target.value
     })
  }
  const handlesubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/dummy', {
      method:'POST',
      body : JSON.stringify(form),
      headers : {
        'Content-Type' : 'application/json'
      }
        
      } )
    const data = await response.json()
     console.log (data)
  }
  return (
    <div  className='App'  >
      <form onSubmit={handlesubmit}>
        <h2>Username</h2>
        <input className='input' type='text' placeholder='enter' name='username' onChange={handleForm}></input>
        <h2>Email</h2>
        <input  className='input' type='text' placeholder='enter' name='Email' onChange={handleForm}></input>
         <h2>password</h2>
        <input type='text'   className='input' placeholder='enter' name='password' onChange={handleForm}></input>

        <br/>
        <input type = "submit" className='btn btn-success my-3'></input>
      </form>
    </div>
  )
  
}

export default App

