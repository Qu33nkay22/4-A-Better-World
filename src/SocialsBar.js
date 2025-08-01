import React, { Component } from 'react';

import "./SocialBar.css";

class SocialBar extends Component {
    render() {
        return(
            <div className='social-bar'>
                <h1 className='bungee-spice-regular'><a href='/'> For A Better World</a></h1>
                <ul className="socials">
                    <li><a href='https://www.facebook.com/profile.php?id=61575555087787'>
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </li>
            
                    <li>
                        <a href='https://www.linkedin.com/groups/14636035/'>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
            
                    <li>
                        <a href='#'>
                            <i className="fa-brands fa-google"></i>
                        </a>
                    </li>

                  

                    <li>
                        <a href='https://x.com/4ABetterWorld__'> 
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SocialBar;