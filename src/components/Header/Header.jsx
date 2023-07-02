import React, { useState } from 'react';
import './Header.css';

const Header = () => {

    const [dialog, setDialog] = useState(false);
    const [close, setClose] = useState(false);

    const clickToggleDialog = () => {
        // setDialog(!dialog);
        if (dialog && close) {
            setDialog(false);
            setClose(false);
        } else {
            setDialog(true);
            setClose(true);
        }
    };

    const pageReload = () => {
        window.location.reload();
    }

    return (
        <div className='header-section'>
            <header>
                <h1 className='heading' onClick={pageReload}>
                    Tech Solution
                </h1>
                <nav>
                    <ul>
                        <a href='/categories'>
                            Question & Answer
                        </a>

                        <a href='#' onClick={clickToggleDialog}>
                            sign in
                        </a>
                        {
                            dialog && (
                                <div className={`dialog ${setClose ? 'back' : ''}`}>
                                    <form action='#'>
                                        <p>Email</p>
                                        <input type='email' placeholder='Enter email' />
                                        <p>Password</p>
                                        <input type='password' placeholder='Enter password' />

                                        <p>
                                            <button className='login-button'>
                                                Login
                                            </button>

                                            <button className='back-button' onClick={clickToggleDialog}>
                                                Back
                                            </button>
                                        </p>
                                    </form>
                                </div>
                            )
                        }
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;