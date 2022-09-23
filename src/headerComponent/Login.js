import React, { useState,useEffect } from 'react'
import Header from './Header'
import {useNavigate} from 'react-router-dom'

function Login() {
 
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')

    var  navigate = useNavigate()
    
     function login(){
        const data = {
          login : name, 
          avatar_url : email, 
          password : password
        }
       
          if(!name || !email || !password){
            return alert("Pls Fill All Detials")
          }
          const url = "https://reqres.in/api/users";
          fetch(url).then((response)=>{
            return response.json();
          }) 
          .then(storeData=>console.log(storeData));

          if(isAuthenticate())
           navigate("/start")
          else{
            alert("You are not SignUp yet!!")
          }
        }
        function isAuthenticate(){
          let Record = JSON.parse(localStorage.getItem("Record")) || []
        return  Record.find((t)=> t.email ===email)
        }

  return (
    <div className='container'>
      <Header/>
    <div className='inputStyl'>
      
       <h1> Login Page</h1><br/>
       <input type={'text'} placeholder="Name.." value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
       <br/>
       <input type={'text'} placeholder="Write Email Id.." value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
       <br/>
       <input type={'password'} placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
       <button onClick={login}>Login</button>
       
        </div>
        </div>
  )
}

export default Login