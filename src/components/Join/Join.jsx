import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'
import './Join.css'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_21ic2kd', 'template_hfi3jpq',
            form.current, 'YEDrwwebqgVt7yW4Q')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="Join" id='join-us'>
            <div className="left-j">
                <hr/>
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form}
                      onSubmit={sendEmail}
                      className="email-container">
                    <input type="text" name='user_email'
                           placeholder='Please write your email...'
                    />
                    <button
                        className="btn btn-j">Join Now</button>
                </form>
            </div>
        </div>
    );
};

export default Join;