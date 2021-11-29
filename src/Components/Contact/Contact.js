import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
// import { Alert } from 'bootstrap';

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] =useState(false);

    const handleSubmit =(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_fgcil4e', 'template_2v21scr', formRef.current, 'user_px3sdhhTbLImeDkzBZDrb')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='c'>
            <h1 className='text-success'> Contact Us</h1>
            <div className="c-bg"></div>
                <div className="c-wrapper">
                    
                        
                        <div className="c-left">
                            <h1 className="c-title">
                                Let's Discuss Your Project
                            </h1>
                            <div className="c-info">
                                <div className="c-info-item">
                                    <img src="https://tse3.mm.bing.net/th?id=OIP.xO38UasYE7mPuJFejb67WwHaHa&pid=Api&P=0&w=300&h=300" alt="" className="c-icon" />
                                    +8801729952011
                                </div>
                                <div className="c-info-item">
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.ss-_jQBslgYZJj06t6IdCgHaHa&pid=Api&P=0&w=300&h=300" alt="" className="c-icon" />
                                    jannatul.mawya228@gmail.com
                                </div>
                                <div className="c-info-item">
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.TwiP7UaTKhwIVq5-axxqCgHaJI&pid=Api&P=0&w=300&h=300" alt="" className="c-icon" />
                                    Dhaka,Bangladesh
                                </div>
                            </div>
                        </div>
                        
                    <div className="c-right">
                        <h1 className='c-desc text-success'>
                            Get in Touch
                        </h1>
                   
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder='Name' name="user_name" />
                            <br />
                            <input type="text" placeholder='Subject' name="user_subject" />
                            <br />
                            <input type="text" placeholder='Email' name="user_email" />
                            <br />

                            <textarea name="message" id="" cols="30" rows="5" placeholder="Message"></textarea>
                            <br />
                            <button className='btn btn-success cursor-pointer'>Submit</button>
                            <br />
                            {done && 'Thank You..'}
                        </form>
                    </div>
                    


                   
                </div>
            
        </div>
    );
};

export default Contact;