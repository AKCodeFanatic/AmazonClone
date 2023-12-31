import React, { useState } from 'react'
import './signup.css'
import { NavLink } from 'react-router-dom'

export const SignIn = () => {
    
    const[logData , setData] = useState({
        email:"",
        password:""
    });

    console.log(logData);

    const adddata = (e)=>{
        const {name , value} = e.target;

        setData( () => {
            return{
                ...logData,
                [name]:value
            }
        })
    }



  return (
    <section>
        <div className="sign_container">
            <div className="sign_header">
                <img src="./blacklogoamazon.png" alt="amazonlogo" />
            </div>
            <div className="sign_form">
                <form>
                    <h1>Sign-In</h1>
                    <div className="form_data">
                        <label htmlFor="email">Email</label>
                        <input type="text" 
                        onChange={adddata}
                        value={logData.email}
                        name="email" id="email" />
                    </div>

                    <div className="form_data">
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        onChange={adddata}
                        value={logData.password}
                        placeholder="Atleast 6 Characters " name="password" id="password" />
                    </div>

                    <button className='signin_btn'>Continue</button>
                </form>
            </div>

            <div className="create_accountinfo">
                <p>New To Amazon</p>
            <NavLink to="/register"> <button>Create Your Amazon Account</button> </NavLink>
            </div>
        </div>
    </section>
  )
}
