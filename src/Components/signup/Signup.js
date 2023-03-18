import React from 'react'
import "./Signup.css"
import leftarr from ".././img/leftarr.png"

function Signup(props) {
    return (

        <>
            <div className="fullwidSI">
                <div className="logo">
                    <div className="logofont"><img src={leftarr} alt="" /></div>
                    <div className="logotext"><h1>Digital-SOP</h1></div>
                </div>
                <div className="mrsignupForm">
                    <div className="mremail mrinputs">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder='Name' />
                    </div>
                    <div className="mrpass mrinputs">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder='Password' />
                    </div>
                    <div className="mrpass mrinputs">
                        <label>Phone</label>
                        <input type="text" id='password' placeholder='Phone' />
                    </div>
                    <div className="mrpass mrinputs">
                        <label>Role</label>
                        <input type="text" id='password' placeholder='Role' />
                    </div>
                    <div className="mrbtn">
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Signup