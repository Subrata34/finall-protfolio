import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => { 
    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_ktg3huw', 'template_erykpdl', e.target, 
        'user_pACLg1alP3QD6jCvehQfE')
          .then((result) => {
              (result.text==="OK") && e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
    }   
    return (
        <section  id="contact" className="contact  py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                <h3  style={{ textAlign: 'center' }}>Contact<hr style={{backgroundColor:'white',width:'10%'}} /></h3>
                </div>
                <div className="col-md-8 mx-auto">
                    <form action="https://formsubmit.co/subratamodak3491@gmail.com" method="POST" onSubmit={sendEmail} >
                        <div className="form-group my-2">
                            <input name="sender_name" type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group my-2">
                            <input name="sender_email" type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group my-2">
                            <input name="selected_service" type="text" className="form-control" placeholder="Choose Service" />
                        </div>
                        <div className="form-group my-2">
                            <textarea name="sender_message" className="form-control" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group my-2 text-center">
                            <button type="submit" className="btn btn-success"> Send </button>
                        </div>
                    </form>
                </div>
                <div className="text-center text-white">
                    <h3 className="heading-color">contact Me</h3>
                </div>
                <div className="d-flex justify-content-center m-4">
                    <a href="https://github.com/Subrata34" target="_blank">
                    {" "}
                    <FaGithub className="text-white bg m-2" />
                    </a>
                    <a
                    href="https://www.linkedin.com/in/subrata-modak-22m02/"
                    target="_blank"
                    >
                    {" "}
                    <FaLinkedin className="text-white bg m-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;