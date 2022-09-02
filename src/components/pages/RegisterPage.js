import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import '../../App.css'
import BackgroundImage from '../../assets/images/qr.jpeg'
import BackgroundImage2 from '../../assets/images/logo.jpeg'
import BackgroundImage3 from '../../assets/images/google.png'
import BackgroundImage4 from '../../assets/images/OneDrive.png'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <header className='pic' style={ HeaderStyle2 }></header>
            <form action="/home">
            <p>
                    <label className='pr'>Enter Mobile Number<span>*</span> </label><br/>
                    <input type="text" name="first_name" placeholder='       XXXXXXXXXX' required />
                </p>
                <p>
                    <label className='pr'> Enter OTP<span>*</span> </label><br/>
                    <input type="text" name="first_name" placeholder='       XXXX' required /><br></br>

                    <Link to="/forget-password"><label className="right-label">Resend OTP</label></Link>
                </p>
                <p>
                    <label className='pr'> Set-Up New PIN </label><br/>
                    <input type="text" name="first_name" placeholder='       XXXX' required />
                </p>
                
                <h5>Complete Your Basic Details With</h5>
                <header className='icons' style={ HeaderStyle3}></header>
                <header className='icons' style={ HeaderStyle4}></header>
                <h5><br></br><span className='or'>OR</span></h5>
                <h5 className='fill'>Fill Manually</h5>
                
            <p>
                    <label className='pr'>Full Name<span>*</span> </label><br/>
                    <input type="text" name="first_name" placeholder='       Enter your Full Name Here' required />
                </p>
                <p>
                    <label className='pr'> Personal Email</label><br/>
                    <input type="text" name="first_name" placeholder='       Eg.Abc@Gmail.Com' required />
                </p>
                <p>
                    <label className='pr'> Company Email</label><br/>
                    <input type="text" name="first_name" placeholder='       Eg.Xyz@Texlaculture.Com' required />
                </p>
                <p>
                    <label className='pr'> Mobile Number<span>*</span> </label><br/>
                    <input type="text" name="first_name" placeholder='       XXXXXXXXXX' required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">CREATE ACCOUNT</button>
                </p>
                
                <footer>
                <h6>Creating An Account Means You're Okay With Our <Link to="/register"><a>Terms Of Service, 
Privacy Policy</a></Link> And Our Default<Link to="/register"><a> Notification Settings</a></Link>.</h6>
            </footer>
            </form>
            
        </div>
    )
}
const HeaderStyle2 = {
    width: "55em",
    background: `url(${BackgroundImage2})`,
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
    overflow:"hidden",
    backgroundSize:"80em 80em"
    
}
    
const HeaderStyle = {
    width: "7em",
    height: "7em",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
    // margin-left:"2em";
}
const HeaderStyle3 = {
    width: "4em",
    height: "4em",
    marginLeft:"8em",
    background: `url(${BackgroundImage3})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
    
}
const HeaderStyle4 = {
    width: "4em",
    height: "4em",
    marginLeft:"15em",
    marginTop:"-4em",
    background: `url(${BackgroundImage4})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
    
}