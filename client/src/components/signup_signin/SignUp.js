import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const SignUp = () => {

    const[udata , setUData] = useState({
        fname:'',
        email:'',
        mobile:'',
        password:'',
        cpassword:''    
    })
    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="amazonlogo" />
                </div>
                <div className="sign_form">
                    <form>
                        <h1>Create Account</h1>
                        <div className="form_data">
                            <label htmlFor="email">Your Name</label>
                            <input type="text" name="fname" id="fname" />
                        </div>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>

                        <div className="form_data">
                            <label htmlFor="number">Mobile</label>
                            <input type="text" name="mobile" id="mobile" />
                        </div>

                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Atleast 6 Characters " name="password" id="password" />
                        </div>

                        <div className="form_data">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" name="password" id="password" />
                        </div>

                        <button className='signin_btn'>Continue</button>
                    </form>

                    <div className="signin_info">
                        <p>Already have an Account ?</p>
                        <NavLink to="/login">SignIn</NavLink>
                    </div>
                </div>



            </div>
        </section>
    )
}
