import React from 'react';
import './intro.css';
import image from '../../img/white_Dress-removebg-preview.png'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Jannatul Mawya</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Front-End Developer</div>
                            <div className="i-title-item">MERN Stack Developer</div>
                            <div className="i-title-item">React Developer</div>
                        </div>
                    </div>
                   
                    <p className="i-desc">
                        I  develop services for customers of all sizes,
                        in creating stylish, modern websites, web services.
                    </p>
                    

                    

                </div>
               
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={image} alt="" className="i-img" />
            </div>
        </div>
    );
};

export default Intro;