import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-div'>
            
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-8">

                    <Link to="/" className='p-3'>Home</Link>

                    <Link to="/about" className='p-3'>About</Link>

                    <Link to="/topics" className='p-3'>Topics</Link>
                    <Link to="/topics" className='p-3'>Topics</Link>
                    <Link to="/topics" className='p-3'>Topics</Link>
                </div>
            </div>

           
        </div>
    );
};

export default Navbar;