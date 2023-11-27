import React from 'react'
import Image from 'next/image'
import {FaFacebookF,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <hr className='font-bold mt-4'/>
      <div className='bg-[url("/foooter-img1.jpg")]'>
        <div className="container mx-auto p-12">
          <div className="footerMain">
            <h1> Follow Us </h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="footerLogo flex justify-center content-center items-center col-span-2">
                <div className="flex flex-col">
                  <h3>AMOC</h3>
                  <p>AMOC Bags, Hand Crafted, Hand Made and Handy</p>
                  <ul className="flex flex-row justify-center content-center items-center">
                    <li><FaFacebookF/></li>
                    <li><FaInstagram/></li>
                    <li><FaYoutube/></li>
                    <li><FaTwitter/></li>
                  </ul>
                  <ul className="flex flex-row pt-4 justify-center content-center items-center">
                    <li>Blog</li>
                    <li>About Us </li>
                    <li>Conatct</li>
                    <li>Account</li>
                  </ul>
                </div>
              </div>
              <div className="instaBorder">
                <h3 className="flex"><FaInstagram className="text-3xl pt-1"/> Instagram</h3>
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                  <div className="instaImgBox">
                    <a href="https://www.instagram.com/amoc_bags" target="_blank">
                      <Image
                        src="/instaBags/footerInstaBag1.jpg"
                        width={100}
                        height={100}
                        alt="footerInstaBag1"
                        className="footerInstaImg"
                      />
                    </a>
                  </div>
                  <div className="instaImgBox">
                    <a href="https://www.instagram.com/amoc_bags" target="_blank">
                      <Image
                        src="/instaBags/footerInstaBag2.jpg"
                        width={100}
                        height={100}
                        alt="footerInstaBag2"
                        className="footerInstaImg"
                      />
                    </a>
                  </div>
                  <div className="instaImgBox">
                    <a href="https://www.instagram.com/amoc_bags" target="_blank">
                      <Image
                        src="/instaBags/footerInstaBag3.jpg"
                        width={100}
                        height={100}
                        alt="footerInstaBag3"
                        className="footerInstaImg"
                      />
                    </a>
                  </div>
                  <div className="instaImgBox">
                    <a href="https://www.instagram.com/amoc_bags" target="_blank">
                      <Image
                        src="/instaBags/footerInstaBag4.jpg"
                        width={100}
                        height={100}
                        alt="footerInstaBag4"
                        className="footerInstaImg"
                      />
                    </a>
                  </div>
                  <div className="instaImgBox">
                    <a href="https://www.instagram.com/amoc_bags" target="_blank">
                      <Image
                        src="/instaBags/footerInstaBag5.jpg"
                        width={100}
                        height={100}
                        alt="footerInstaBag5"
                        className="footerInstaImg"
                      />
                    </a>
                  </div>
                  <div className="instaImgBox">
                    <a href="https://www.instagram.com/amoc_bags" target="_blank">
                      <Image
                        src="/instaBags/footerInstaBag6.jpg"
                        width={100}
                        height={100}
                        alt="footerInstaBag6"
                        className="footerInstaImg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div> 
            <p className="copywrite">Copyright &copy;2023 AMOC. All Rights Reserved </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
