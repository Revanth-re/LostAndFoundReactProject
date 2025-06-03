import React, { useState } from 'react'
import { authentication } from '../../FireBaseConfig/Firebase'

import { setDoc,doc } from 'firebase/firestore'
import { db } from '../../FireBaseConfig/Firebase'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
// import {doc} from "firebase/auth"
import {Form,Button} from"react-bootstrap"
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
    let navigate=useNavigate()
    const [SignupDetails,setSignupDetails]=useState({name:"",email:"",password:""})
    const handleForm= async(e)=>{
        e.preventDefault()
        try{
        const accountCreated = await createUserWithEmailAndPassword(authentication,SignupDetails.email,SignupDetails.password)
console.log(accountCreated)

const update=await updateProfile( accountCreated.user,{

    displayName:SignupDetails.name
})
console.log(update)

await setDoc(doc(db,"users",SignupDetails.name),{
    name:SignupDetails.name,
    email:SignupDetails.email
  
 


})
await setDoc(doc(db,"FoundUsers",SignupDetails.name),{
    name:SignupDetails.name,
    email:SignupDetails.email
  



})
// await setDoc(doc(db,"FoundClaims",SignupDetails.name),{
//     name:SignupDetails.name,
//     email:SignupDetails.email
  



// })
navigate("/loginPage")

        }catch(err){
console.log(err);

        }


// await setDoc(doc(db,"users",SignupDetails.name),{
//     name:SignupDetails.name,
//     email:SignupDetails.email
// })


    }
  return (
    <div>
    <Form onSubmit={handleForm}>
   <Form.Control type="text" placeholder="enter Name" onChange={(e)=>setSignupDetails({...SignupDetails,name:e.target.value})} />
   <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setSignupDetails({...SignupDetails,email:e.target.value})} />
      <Form.Control type="password" placeholder="enter password" onChange={(e)=>setSignupDetails({...SignupDetails,password:e.target.value})} />
         <Button type="submit">Signup</Button>
    </Form>
    </div>
  )
}

export default SignUpPage
