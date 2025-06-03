import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import { authentication } from '../../FireBaseConfig/Firebase'
const LoginPage = () => {
    let navigate=useNavigate()
    const [loginDetails,setloginDetails]=useState({email:"",password:""})

    const handleLogin= async(e)=>{
        e.preventDefault()
try{
        const loggedInUser= await signInWithEmailAndPassword(authentication,loginDetails.email,loginDetails.password)
        console.log(loggedInUser)
        localStorage.setItem("reactProjectUsers",JSON.stringify(loggedInUser))
navigate("/userdashBoard")

}catch(err){
console.log(err);

}

        
    }
  return (
    <div>
   <Form onSubmit={handleLogin}>
     <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setloginDetails({...loginDetails,email:e.target.value})} />
          <Form.Control type="password" placeholder="enter password" onChange={(e)=>setloginDetails({...loginDetails,password:e.target.value})} />
             <Button type="submit">Signup</Button>
   </Form>
    </div>
  )
}

export default LoginPage
