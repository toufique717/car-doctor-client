import React from 'react';

import icon from '../../assets/logo.svg'

const Footer = () => {
    return (
         <footer className="footer bg-base-200 text-base-content p-10">
       <div className='grid grid-cols-4 gap-8'>
        <div className='px-16'>
        <aside>
     
   <div>
      <img src={icon} alt="Description of image" />



   </div>
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
      </div>
      <div>
        <nav className=' flex flex-col gap-4'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
      </div>
      <div>
        <nav className=' flex flex-col gap-4'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
       </nav>
      </div>
      <div>
        <nav className=' flex flex-col gap-4'>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
       </nav>
      </div>
       </div>
</footer>
    );
};

export default Footer;