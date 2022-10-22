import React from 'react'
import './footer.css';
const Footer = () => {
  // initializing style object as footerstyle 
  // let footerStyle = {
  //     position:"relative",
  //     top:"10vh",
  //     width:"100%",
  //     // border:"2px solid red"
  //     }
  return (
    // <div  className="bg-dark text-light py-3" style={footerStyle} >
    <div  className="bg-dark text-light py-3"  >
      {/* creating object of style i.e. footerStyle */}
     {/* this is the classes of bootstrap */}
     <p className="text-center">
     Copyright &copy; My TodosList.com
     </p>
    </div>
  )
}

export default Footer    
