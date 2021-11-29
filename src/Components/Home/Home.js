import React from 'react';
import Contact from '../Contact/Contact';
import Introduction from '../Introduction/Introduction';
import Navbar from '../navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Introduction></Introduction>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;