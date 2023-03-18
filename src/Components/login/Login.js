import React from 'react'
import "./Login.css"
import mid from ".././img/mid.png"
import dummy from "../img/dummy.png"

function Login() {
    return (
        <div>

                <div className='fullwidLI'>

                    <div className="mruppercontent">
                        <img id='img2' src={mid} alt="" />
                        <img id='dummy' src={dummy} alt="" />
                    </div>



                    <div className="mrloginForm">
                        <div className="logoimg">
                            <h1>Login</h1>
                        </div>
                        <div className="mremail mrinputs">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder='Email Address' />
                        </div>
                        <div className="mrpass mrinputs">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' placeholder='Password' />
                        </div>
                        <div className="mrforgotpass">
                            <a href="#">Forgot Password ?</a>
                        </div>
                        <div className="mrbtn">
                            <button>Log In</button>
                        </div>
                        <div className="mrloginlink">
                            <p>Don’t have an account ?</p>
                            <a href="#">Contact your administrator.</a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Login