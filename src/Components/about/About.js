import "./about.css";
// import Award from "../../img/award.png";
import image1 from '../../img/joya.jpg'

const About = () => {
    return (
        <div className="a" id='about'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={image1}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Skilled at Html,CSS,JavaScript,Bootstrap,React JS,React-Router,React-Bootstrap,Firebase,MongoDB,Express JS. 
                </p>
                <p className="a-desc">
                    I can able to write well designed & efficient code for Web Development.A fully ambitious, hard working, fast learner person who can easily accept new technology, languages for exploring more in this web Development field.
                </p>
                <div className="a-award">
                    {/* <img src='' alt="" className="a-award-img" /> */}
                    <div className="a-award-texts">
                        {/* <h4 className="a-award-title">International Design Awards 2021</h4>
                        <p className="a-award-desc">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                            and fugit.
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;