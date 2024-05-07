import Loader from 'react-loaders'
import './contact.scss';
import React, { useRef } from 'react'
import Animatedletter from '../Animatedletter'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import Map from './Map';


function Contact() {

    const [letterClass, setLetterClass] = useState('text-animate');
    const RefForm = useRef();


    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        // Clean up the timeout when the component unmounts or when the effect is re-run
        return () => clearTimeout(timeout);
    }, []);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('SERVICE_ID', 'TEMPELETE_ID', RefForm.current, 'PUBLIC_KRY')
            .then(() => {
                alert('Message sent successfully!');
                window.location.reload(false);
            }, () => {
                alert('Message not sent! try again');
            });
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <Animatedletter
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e',]}
                            letterClass={letterClass}
                            idx={15}
                        />
                    </h1>
                    <p className='p1'>
                        Feel free to reach out to me through the provided contact information for any inquiries or collaboration opportunities. I'm excited to connect and discuss how my skills and expertise can add value to your projects. Let's create something amazing together!
                    </p>


                    <form ref={RefForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='from_name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name='from_email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name='subject' placeholder='subject' required />
                            </li>
                            <li>
                                <textarea name="message" placeholder='Message' required ></textarea>
                            </li>
                            <li>
                                <input type="submit" value="Submit" className='flat-button' name='submit' />
                            </li>
                        </ul>
                    </form>

                </div>
            </div>

            {/* <div className="info-map">
                Ansh patel
                <br />
                india
                sedrcfvtgyhuj addr
                <br />
                <span> email</span>
            </div> */}

            <div className="map-wrap">
                <Map/>
            </div>


            <Loader type='pacman' />
        </>

    )
}

export default Contact
