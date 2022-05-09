import React from 'react'

import {
  Link
} from "react-router-dom";

const bp = "/Crokinole"

export default function navbar() {
  return (
    <div className = 'navbar'>
        <Link to={bp}><div className='navbar-title'>Crokinole</div></Link>
        <Link to={bp+"/Login"}><button className = 'button'>Login</button></Link>
    </div>
  )
}
