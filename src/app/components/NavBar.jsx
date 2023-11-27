import Link from 'next/link'
import React from 'react'
import Navs from './Navs'
import {FaRegUser,FaSearch} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className='w-full nav-shadow'>
      <nav className='flex justify-between items-center w-11/12 py-5 mx-auto '>
        {/* left most space  logo*/}
        <div>
        <Link href="/">
                <p>AMOC.</p> 
          </Link>
        </div>

        {/* middle space for nav */}
        
        <Navs/>

        {/* right most for icons */}
        <div className='flex justify-between space-x-5 items-center text-3xl'>
            <Link href="/login">
                <FaRegUser/>
            </Link>
            <FaSearch/>
        </div>

      </nav>
    </div>
  )
}

export default NavBar
