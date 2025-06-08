import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Download = ({setOpenState}) => {
    const navigate=useNavigate()
    console.log(setOpenState)
    const handleState=()=>{
        console.log("werth");
        
        setOpenState(true)
        navigate("/loginPage")
    }
  return (
    <div>
      <div id='Download' style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"50px"}}>
        
        <div>
            <h2>lorem</h2>
            <p>Lorem ipsum dolor sit amet consectetur, <br />
                 adipisicing elit. Perferendis, error?
                </p>
       <Button id='blue' onClick={()=>handleState()} >DownLoad-Now</Button>
        </div>
        <div>
            <img id='img2' src="https://img.freepik.com/premium-vector/free-download-system-concept-internet-updating-installation-man-with-smartphone-downloading-document-flat-illustration-vector_128772-1201.jpg?ga=GA1.1.1112550859.1741454000&semt=ais_hybrid&w=740" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Download
