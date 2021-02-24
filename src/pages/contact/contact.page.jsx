import React, {useState} from 'react';
import emailjs from 'emailjs-com';

import './contact.style.scss'

import Navbar from '../../components/navbar/navbar.component';
import {Jumbotron, Form, Button, Alert} from 'react-bootstrap';

const Contact = () => {

    // for success bubble
    const [sent, setSent] = useState(false);

    // https://www.emailjs.com/docs/examples/reactjs/
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ymr4mse', 'template_wv03f9o', e.target, 'user_5ckamWVH4TSVJJnehWuF3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            ;
        toggle();
    }

    const toggle = () => {
        setSent(!sent);
    }

    const sentAlert = <Alert variant='success'>Email sent successfully </Alert>

    return (
        <>
            <Navbar />
            <div className="contactpage">
            <Jumbotron>
                <h1>Contact Me</h1>
            </Jumbotron>
            {sent ? sentAlert : 
                <Form onSubmit={sendEmail} className="col-8 mx-auto">
                    <Form.Group controlId="emailForm.name">
                        <Form.Control type="text" placeholder="name" name="name" />
                    </Form.Group>
                    <Form.Group controlId="emailForm.email">
                        <Form.Control type="email" placeholder="email" name="email" />
                    </Form.Group>
                    <Form.Group controlId="emailForm.subject">
                        <Form.Control type="text" placeholder="subject" name="subject" />
                    </Form.Group>
                    <Form.Group controlId="emailForm.message">
                        <Form.Control as="textarea" rows={5} palceholder="message" name="message" />
                    </Form.Group>
                    <Button as="input" type="submit" value="Send" variant="secondary" block />
                </Form>
            }
            </div>
        </>
    )
}

export default Contact