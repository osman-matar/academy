import React from 'react'
// import {FaFacebook, FaInstagram, FaTwitter} from "react-icons"
import { FaFacebook , FaInstagram, FaTwitter } from "react-icons/fa6"

const Footer = () => {
  const date = new Date().getFullYear(); 

  return (
    <footer id='footer'>
      <div className="container">
        <div className="footer-row">
          {/* col 2 */}
          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="social">
              <a href="#">
                <FaFacebook/>
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          {/* col 2 */}
          <div className="col">
            <h2>Company info</h2>
            <ul>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* col 3 */}
          <div className="col">
            <h2>Features</h2>
            <ul>
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          {/* col 4 */}
          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        {/* copyrights */}
        <div className="copyright">
          <p>
            &copy; {date} | All right reserved. Made by <a href="https://osman.42web.io" target='_blank'>Osman A.</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
