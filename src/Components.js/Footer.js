import React from 'react';


function Footer() {
    const currentdate = new Date()
    const year = currentdate.getFullYear()
  return (
    <div className='footer'>
        Copyright © {year}
    </div>
  )
}

export default Footer