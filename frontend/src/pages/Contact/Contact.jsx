import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import config from './config'; // Importez le fichier de configuration

emailjs.init(config.emailjsPublicKey);

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICEID,
                process.env.REACT_APP_TEMPLATEID,
                form.current,
                process.env.REACT_APP_KEY_PUBLIC
            )
            .then((result) => {
                console.log(result.text);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="main__contact">
            <form ref={form} onSubmit={sendEmail} className="form__contact">
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                <input
                    type="submit"
                    value="Send"
                    className="form__contact--btn"
                />
            </form>
        </div>
    );
};

export default Contact;
