import React from 'react';
import emailjs from 'emailjs-com';

import Navbar from '../../components/navbar/navbar.component';

import {Jumbotron} from 'react-bootstrap';

const Contact = () => {

    // https://www.emailjs.com/docs/examples/reactjs/
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ymr4mse', 'template_wv03f9o', e.target, 'user_5ckamWVH4TSVJJnehWuF3')
        .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    

    return (
        <>
            <Navbar />
            <Jumbotron>
                <h1>Contact Me</h1>
            </Jumbotron>
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-2 mx-auto">
                        <input type="submit" className="btn btn-secondary btn-lg btn-block" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Contact