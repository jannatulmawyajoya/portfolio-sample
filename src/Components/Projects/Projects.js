import React from 'react';
import image from '../../img/apartio-home-page.PNG';
import image2 from '../../img/manali.PNG';
import image3 from '../../img/medicoz.PNG';
import './Project.css'
const Projects = () => {
    return (
        <div className='project-div mt-5'>
            <h1 className='text-success'>-------Projects------</h1>
            <div className="row">
                <div className="col-md-4 p-3 ">
                    <img src={image} width= '400px' alt="" />
                    <h3 className='text-success'>Apartio Flat Booking Agency</h3>
                    <h5>This is a niche website. Selling of flats and other services which are available with buying of flats
                        can be booked in this website.</h5>
                    <p>Technology: React-Bootstrap, React Js, Express Js, Firebase, Firebase Hosting,
                        Heroku.</p>
                        <button className='btn btn-secondary m-3'>Details</button>
                    <a href="https://apartment-sales-website.web.app/" target='_blank'><button className='btn btn-success m-3'>Live Website</button></a>
                    <a href="https://github.com/jannatulmawyajoya/apartio-flat-booking-agency-client-side" target='_blank'><button className='btn btn-secondary m-3'>Code Link</button></a>
                </div>
                <div className="col-md-4 p-3 ">
                    <img src={image2} width= '400px' alt="" />
                    <h3 className='text-success'>Manali Travel Agency</h3>
                    <h5> This is a Tourism Services Website.This website is related to the tour packages booking.</h5>
                    <p>Technology: React-Bootstrap, React Js, Express Js, Firebase, Firebase Hosting,
                        Heroku.</p>

                    <button className='btn btn-secondary m-3'>Details</button>
                    <a href="https://manali-tourism-guide-2.web.app/" target='_blank'><button className='btn btn-success m-3'>Live Website</button></a>
                    <a href="https://github.com/jannatulmawyajoya/manali-travel-agency-client-side" target='_blank'><button className='btn btn-secondary m-3'>Code Link</button></a>

                </div>
                <div className="col-md-4 p-3 ">
                    <img src={image3} width= '400px' alt="" />
                    <h3 className='text-success'> Medicoz Medical solution</h3>
                   
                    <h5>This is Healthcare related Website.Medical Facilities will be provided over
                        here.</h5>
                   
                    <p>Technology: React-Bootstrap, React Js, Express Js, Firebase auth, Firebase Hosting.</p>

                    <button className='btn btn-secondary m-3'>Details</button>
                    <a href="https://medicoz-medical-solution.web.app/" target='_blank'><button className='btn btn-success m-3'>Live Website</button></a>
                    <a href="https://github.com/jannatulmawyajoya/medicoz-medical-solution" target='_blank'><button className='btn btn-secondary m-3'>Code Link</button></a>
                </div>
            </div>
        </div>
    );
};

export default Projects;