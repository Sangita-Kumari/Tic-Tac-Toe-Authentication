import React from 'react'
import {  Navigate,NavLink } from 'react-router-dom'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function Header() {
  // const user = JSON.parse(localStorage.getItem("userData")) || null;
  // console.log(user)
  const navigate  = useNavigate()

  function Logout(){
   let  confirmation = window.confirm("Are you sure want to Logout your account..")
   if(localStorage.getItem("Record") && confirmation) {
    localStorage.clear();
     navigate("/")
  }
  }
  return (
    <div className='header'>
      <nav>
       <ul>
       <li> <NavLink to = "/start" style={{color:"white" , marginLeft:'60rem'}}> Start Game </NavLink></li>
       <li> <NavLink to = "/" style={{color:"white"}}> SignUp </NavLink></li>
       <li> <NavLink to = "/login" style={{color:"white"}}> Login </NavLink></li>
       <li className="log"onClick={Logout} style={{color:"white",  cursor: "pointer" }}> Logout </li> 
        </ul>
        </nav>
    </div>
  )
}

export default Header