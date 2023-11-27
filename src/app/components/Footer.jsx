import React from 'react'
import Image from 'next/image'
import {FaFacebookF,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className='w-11/12 mt-3 mx-auto'>
        <hr className='font-bold '/>
        <p className='py-3 text-center text-xl'>Copyright &copy;2023 AMOC. All Rights Reserved </p>
      </footer>
    </>
  )
}

export default Footer
