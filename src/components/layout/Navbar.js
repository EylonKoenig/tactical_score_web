import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className={"nav"}>
            <nav className="navbar">
                <h1>
                    <Link to="/">
                        <img src='http://localhost:5000//images/logo.jpg'  style={{width:'300px',height:'50px'}} alt={'logo'}/>
                    </Link>
                </h1>
            </nav>
                <div className='navbar-bot'>
                    <div className='navbar-links'>
                        <ul className='menu'>
                            <li>
                                <Link to="/">
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="/community">
                                    COMMUNITY
                                </Link>
                            </li>
                            <li>
                                <Link to="/downloads">
                                    DOWNLOADS
                                </Link>
                            </li>
                            <li>
                                <Link to="/matches">
                                    MATCHES
                                </Link>
                            </li>
                            <li>
                                <Link to="/players">
                                    PLAYERS
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;
