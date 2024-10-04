import React from 'react'
import './Account.scss'
import { CiSettings } from "react-icons/ci";
import { Link } from 'react-router-dom';


function Account() {
  return (
    <div>
      <div>

<div className='Pro-Account-Btn'>
  <button className='profilr-btn'>Profile</button>
  <button className='Account-btn'>---Account</button>
</div>

<div className='Account'> 
  <div className='Account1'>

    <Link to='/settings'>
  <CiSettings className='Settings' />
  </Link>

  </div>
</div>

<div className='Wel'>
<h2>Welcome To Starbuck</h2>

<Link to='/login'>
<button className='Sign-up'>Login or Sign Up</button>
</Link>


</div>


<div>

</div>


<div>
</div>






      </div>
    </div>
  )
}

export default Account
 