
import React, {Component} from "react";
import ContactForm from "../ContactForm";
import "./Footer.css";


class Footer extends Component {
    render() {
        return(
            <div className="footer-container">
                <div className="form">
                    
                        <ContactForm />
                </div>
                <div className="footer">

                    <p className="contact"><b>Contact Us</b></p>
                    <p>
                        <b>Email:</b> Kailynn.anderson22@gmail.com
                    </p>
                       
                    <p><b>Phone:</b> (555)555-5555</p>
                    <p><b>Address:</b> 1234 Walliby Street
                        <br/>Clinton Township, MI 48038
                    </p>

                    
                    <div>
                        <ul className="socials">
                            <li><a href='https://www.facebook.com/profile.php?id=61575555087787'>
                                    <i className="fa-brands fa-facebook"> For A Better World</i>
                                </a>
                            </li>
                    
                            <li>
                                <a href='https://www.linkedin.com/groups/14636035/</li>'>
                                    <i className="fa-brands fa-linkedin"> 4 A Better World </i>
                                </a>
                            </li>
                    
                            <li>
                                <a href='#'>
                                    <i className="fa-brands fa-google"></i>
                                </a>
                            </li>

                        

                            <li>
                                <a href='https://x.com/4ABetterWorld__'> 
                                    <i className="fa-brands fa-twitter"> 4ABetterWorld__</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p>All rights reserved</p>
                    <p>FOR EDUCATIONAL USE ONLY</p>
                </div>
                
            </div>

        );
    }
   
}

export default Footer;