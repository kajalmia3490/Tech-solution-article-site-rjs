import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='left'>
                <h1>
                    Technology
                </h1>
                <ul>
                    <li>
                        <a href='/tech'>
                            Privacy
                        </a>
                    </li>
                    <li>
                        <a href='/tech'>
                            Policy
                        </a>
                    </li>
                    <li>
                        <a href='/tech'>
                            Terms
                        </a>
                    </li>
                    <li>
                        <a href='/tech'>
                            FAQ
                        </a>
                    </li>
                </ul>
            </div>

            <div className='mid'>
                <h1>
                    Community
                </h1>
                <ul>
                    <li>
                        <a href='/tech'>
                            Session
                        </a>
                    </li>
                    <li>
                        <a href='/tech'>
                            Protocol
                        </a>
                    </li>
                    <li>
                        <a href='/tech'>
                            Communication
                        </a>
                    </li>
                </ul>
            </div>

            <div className='right'>
                <h1>
                    Contact
                </h1>
                <ul>
                    <li>
                        <a href='/email'>
                            Email: kajalmia3490@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com'>
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href='https://www.googlebyphone.com'>
                            Phone: 
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;