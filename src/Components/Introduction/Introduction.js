import React from 'react';
import './Introduction.css';
import image from '../../img/white Dress.jpg';
// import { Link, Router } from 'react-router-dom';
const Introduction = () => {
    return (
        <div className='intro-div'>
            
            <h1 className='m-5 text-success'>Portfoli Website </h1>
            
            <div className="row">
                <div className="col-md-5">
                    <img className='img-fluid img-div' src={image} alt="" width='40%'/>
                </div>
                <div className="col-md-7 text-start ">
                    <div className='mx-auto ' >
                        <h2><span className='text-secondary'>Hello, I'm</span> <span className='text-success'>Jannatul Mawya</span></h2>
                        <h3 className='text-secondary'>Junior Web Developer</h3>
                        <h4 className='text-secondary'>Skilled at Html,CSS,JavaScript,Bootstrap,React JS,React-Router,React-Bootstrap,Firebase,MongoDB,Express JS. I can able to write well designed & efficient code for Web Development.A fully ambitious, hard working, fast learner person who can easily accept new technology, languages for exploring more in this web Development field.</h4>
                     </div>
                     {/* <Link to=''>  <button>Download Resume</button> </Link> */}
                    <a href="https://drive.google.com/file/d/1tWobV38nlP_UCq_wrC1HoWSzDxtngMOQ/view?usp=sharing" download target='_blank'><button className='btn-start btn mt-3 btn-success'>Download Resume</button></a>
                       
                   
                </div>
                
            </div>
            
        </div>
    );
};

export default Introduction;