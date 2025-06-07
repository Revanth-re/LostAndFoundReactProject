import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Landingpage = ({setOpenState}) => {
    const navigate=useNavigate()
    console.log(setOpenState)
    const handleState=()=>{
        setOpenState(true)
        navigate("/loginPage")
    }
  return (
    <div>
        hello world
      <Button onClick={handleState}>Click</Button>
    </div>
  )
}

export default Landingpage
