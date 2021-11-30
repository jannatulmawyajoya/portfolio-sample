import "./contact.css";
// import Phone from "../../img/phone.png";
// import Email from "../../img/email.png";
// import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    // const theme = useContext(ThemeContext);
    // const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_fgcil4e",
                "template_2v21scr",
                formRef.current,
                "user_px3sdhhTbLImeDkzBZDrb"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src='https://cdn.onlinewebfonts.com/svg/img_1059.png' alt="" className="c-icon" />
                            +88 01729952011
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src='https://pluspng.com/img-png/email-icon-png-download-icons-logos-emojis-email-icons-2400.png' alt="" />
                            jannatul.mawya228@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src='https://tse1.mm.bing.net/th?id=OIP.56OPVn7ebkjCZzPqhuxV-QHaKl&pid=Api&P=0&w=300&h=300' alt="" />
                            Dhaka, Bangladesh.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <h1 className="c-desc">
                        <b> Get in touch</b>. 
                    </h1>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input  type="text" placeholder="Name" name="user_name" />
                        <br />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <br />
                        <input  type="text" placeholder="Email" name="user_email" />
                        <textarea  rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;