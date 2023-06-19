import React from 'react'
const Footer = ({length})=> {
    
  return (
    
    <footer id='footerbox'>
       {length} {length===1? "Task":"Task's"}  Available...
    </footer>
  )
}
export default Footer
