import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

import '../../App.css'
import BackgroundImage from '../../assets/images/qr.jpeg'
import BackgroundImage2 from '../../assets/images/logo.jpeg'
const App = () => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:30');
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
        setTimer('00:30');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 30);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
  
    return (
        <div className="App">
            <h2>{timer}</h2>
            <span onClick={onClickReset}>Resend OTP</span>
        </div>
    )
}

export default function SignInPage() {
    
    return (
        <div className="text-center m-5-auto">
            <header className='pic' style={ HeaderStyle2 }></header>
            <form action="/home">
            <header className='qr' style={ HeaderStyle }></header>
                <h5>Login Via QR Code From App</h5>
            <p>
                    <label className='pr'>Enter Mobile Number<span>*</span> </label><br/>
                    <input type="text" name="first_name" placeholder='       XXXXXXXXXX' required />
                </p>
                <p>
                    <label className='pr'> Enter PIN<span>*</span></label><br/>
                    <input type="text" name="first_name" placeholder='       XXXX' required /><br></br>
                    <Link to="/forget-password"><label className="right-label">Forgot PIN </label></Link><Link to="/forget-password"><label className="right-label">Click Here To Reset PIN</label></Link>
                </p>
                <p>
                    <label className='pr'> Enter OTP<span>*</span> </label><br/>
                    <input type="text" name="first_name" placeholder='       XXXX' required /><br></br>

                    <Link to="/forget-password"><label className="right-label">
        </label></Link>
                </p>
                <p>
                    <label className='pr'> Set-Up New PIN </label><br/>
                    <input type="text" name="first_name" placeholder='       XXXX' required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">SIGN IN</button>
                </p>
                
                <footer>
                <h6>Not Yet Registered? <Link to="/register"><a>Create an account</a></Link>.</h6>
            </footer>
            </form>
            
        </div>
    )
}
const HeaderStyle2 = {
    width: "55em",
    background: `url(${BackgroundImage2})`,
    backgroundPosition: "center",
    overflow:"hidden",
    
}
    
const HeaderStyle = {
    width: "7em",
    height: "7em",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
    // margin-left:"2em";
}