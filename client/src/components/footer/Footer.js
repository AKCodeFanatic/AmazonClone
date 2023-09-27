import React from 'react'
import './footer.css'

export const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <div className="footer_container">
            <div className="footr_details_one">
                <h3>Get To Know Us</h3>
                <p>About us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cares</p>
            </div>

            <div className="footr_details_one">
                <h3>Connect with us</h3>
                <p>Facebook</p>
                <p>Twitter  </p>
                <p>Instagram</p>
                
            </div>

            <div className="footr_details_one forres">
                <h3>Make Money with us</h3>
                <p>Facebook</p>
                <p>Twitter  </p>
                <p>Instagram</p>
                
            </div>

            <div className="footr_details_one forres">
                <h3>Make Money with us</h3>
                <p>Facebook</p>
                <p>Twitter  </p>
                <p>Instagram</p>
            </div>
        </div>

        <div className="lastDetails">
            <img src="./amazon_PNG25.png" alt="" />
            <p>@ 1996-{year} , Amazon.com</p>
        </div>

        
    </footer>
  )
}
