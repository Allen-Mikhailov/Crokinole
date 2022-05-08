import React from 'react'

import {
  Link
} from "react-router-dom";

const bp = "/Crokinole"

export default function navbar() {
  return (
    <div className = 'navbar'>
        <div className='narbar-title'>Crokinole</div>
        <Link to={bp+"/Login"}><button className = 'button'>Login</button></Link>
    </div>
  )
}
