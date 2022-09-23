import React, {  useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header';

function SignUpp() {
  
 
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Record, setRecord] = useState([]);
    const navigate = useNavigate();

    async function register(){
      let data = {
        first_name: name,
        email: email,
        password: password
     };
     if(!name || !email || !password){
      return alert("Pls Fill All Detials")
    }
     const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
     }
     }
     let result = await fetch('https://reqres.in/api/users', options)
        .then(res => res.json())
        .then(res => console.log(res));

       
        setRecord([...Record,data]);
        console.log(Record)
        localStorage.setItem("Record", JSON.stringify([...Record,data]));
         
        navigate('/login');
        }
        
  return (
    <div className='container'>
      <Header/>
    
     
      <div className='inputStyl'>
       <h1>This is SignUp Page</h1><br/>
       <input type={'text'} placeholder="Name.." value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
       <br/>
       <input type={'email'} placeholder="Write Email Id.." value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
       <br/>
       <input type={'password'} placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
       <button onClick={register}>SignUp</button>
        </div>
        </div>
   
  )
}

export default SignUpp